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
});
