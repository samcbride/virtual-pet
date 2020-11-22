const Pet = require('../src/pet');
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
    it('has an initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
  });
describe('isAlive', () => {
  it('tells us if the pet is no longer alive if hunger is greater than 10', () => {
    const pet = new Pet('Fido');
    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
  });
  it('tells us if the pet is no longer alive if fitness is less than 0', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
  });
  it('tells us if the pet is no longer alive if age is greater than 30', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
  it('it tells us if the pet is alive if fitness is greater than 0', () => {
    const pet = new Pet('Fido');
    pet.fitness = 1;
    expect(pet.isAlive).toEqual(true);
  });
  it('it tells us if the pet is alive if hunger is less than 10', () => {
    const pet = new Pet('Fido');
    pet.hunger = 9;
    expect(pet.isAlive).toEqual(true);
  });
  it('it tells us if the pet is alive if age is less than 30', () => {
    const pet = new Pet('Fido');
    pet.age = 29;
    expect(pet.isAlive).toEqual(true);
  });
});
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it('increments the hunger property by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it('decrements the fitness property by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});
describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('throws an error if pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});
describe('feed', () => {
  it('decreases hunger by 3', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
  it('decreases hunger to a maximum of 0', () => {
    const pet = new Pet('Fido');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});
describe('checkUp', () => {
  it('lets you know if the pet is hungry and needs a walk', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });
  it('lets you know if the pet needs a walk', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I need a walk');
  });
  it('lets you know if the pet is hungry', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry');
  });
  it('lets you know if the pet is fine', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.hunger = 4;
    expect(pet.checkUp()).toEqual('I feel great!');
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
  });
});
describe('adoptChild', () => {
  it('parent adopts a child pet', () => {
    const parent = new Pet('Dave');
    const child = new Pet('Amelia');

    parent.adoptChild(child)
  
    expect(parent.children).toEqual([{"age": 0, "children": [], "fitness": 10, "hunger": 0, "name": "Amelia"}]);
  });
});

//This is the other way the pet can have a child

describe('haveBaby', () => {
  it('parent has a child pet', () => {
    const parent = new Pet('Dave');

    parent.haveBaby('Amelia');
  
    expect(parent.children).toEqual([ { name: 'Amelia', age: 0, hunger: 0, fitness: 10, children: [] } ]);
  });
});