const maximumFitness = 10; //global variables/constants
const minimumFitness = 0;
const initialAge = 0;
const maximumAge = 30;
const initialHunger = 0;
const maximumHunger = 10;

function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = maximumFitness;
    this.children = [];
}
Pet.prototype = {
    get isAlive() {
        return this.age < maximumAge && this.hunger < maximumHunger && this.fitness > minimumFitness;
    }
}
Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}
Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if((this.fitness + 4) <= 10) {
        return this.fitness += 4;
    } else {
        return this.fitness = 10;
    };
}
Pet.prototype.feed = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if((this.hunger - 3) >= 0) {
        return this.hunger -= 3;
    } else {
        return this.hunger = 0;
    };
}
Pet.prototype.checkUp = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if(this.fitness <=3 && this.hunger >=5) {
        return 'I am hungry AND I need a walk';
    } else if(this.fitness <= 3) {
        return 'I need a walk';
    } else if(this.hunger >= 5) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }
};
Pet.prototype.adoptChild = function(child) {
    this.children.push(child);
};  

//This is the other way the pet can have a child

Pet.prototype.haveBaby = function() {
    this.children.push(new Pet('Amelia'));
};  


module.exports = Pet;