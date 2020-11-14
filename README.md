# Virtual Pet Project

This exercise allows you to create a virtual pet using JavaScript! We can program the pet to do many things such as go for walks, eat, sleep, and play. We can also code the pet to adopt a child if we want :)

## Getting Started

## Clone the repository
1. Create a fork of this repo.
2. Clone your copy: `git clone git@github.com:*your-github-username*/virtual-pet.git`
3. `cd` into the repository and you will see all the files here

### Install the project dependencies
1. Running `npm install` or `npm i` for short will tell node package manager (npm) to download the `dependencies` and `devDependencies` for this project, outlined in the `package.json` file
2. Once you have run `npm i` you should see `node_modules/` in the repository

### Running the tests
1. Open up the `pet.test.js` file and run `npm t` in the terminal. The tests outlined here test the code written in the `pet.js` file 
2. The `require` statement at the top of the test file imports the functions from our `pet.js` file into the test file. This ensures that the tests can test the functions written in the `pet.js` file 
3. The `it` blocks in the test file make assertions about what should happen when we call the function to be tested. For example:

```js
    describe('isAlive', () => {
    it('tells us if the pet is no longer alive', () => {
     const pet = new Pet('Fido');
     pet.fitness = 0;
     pet.hunger = 10;
     pet.age = 30;
     expect(pet.isAlive).toEqual(false);
     });
    });
    ```

- `describe('isAlive', () => { ... });` this test is testing the `isAlive` method 
-  `it('tells us if the pet is no longer alive', () => { ... });` tells us what the return value should be when passed a certain argument
- `expect(pet.isAlive).toEqual(false);` this calls the function pet.isAlive and expects it to return false

```
### Using Node to give the virtual-pet commands
1. `cd` into the `pet.test.js` file 
2. Type `node` into the terminal - you should see: 

    Welcome to Node.js v12.18.4.
Type ".help" for more information.
> 
3. Type `const Pet = require('../src/pet');` and hit enter
    * You can also do this from the `virtual-pet` folder itself. Once you open `node` type `const Pet = require('./src/pet');` - the double `..` in the first example means that you need to come back out of the `pet.test.js` file and then move into the `pet.js` file (`/src/pet`). If you're already inside the `virtual-pet` folder you're telling the computer it just needs to go inside the `pet.js` folder instead with the `./src/pet`
4. Copy and paste any `const` lines from the individual tests. For example:
    * `const pet = new Pet('Fido');`
    * `const parent = new Pet('Dave');`
    * `const child = new Pet('Amelia');`
Copy and paste these one at a time and hit `enter` or `return` after each one. These are the variables the code is working with

### Type commands for your pet!
1. Type `pet` into node and hit `enter` or `return` - this will give you the starting values of your pet
    * Your pets' name should be: Fido
    * Your pets' initial age should be: 0
    * Yuur pets' initial hunger should be: 0
    * Your pets' initial fitness should be 10
2. Type `pet.growUp()` to change these values
    * Every time you call this function on your pet their age will increase by 1, their hunger will increase by 5, and their fitness will decrease by 3
3. To feed your pet run `pet.feed()`
    * This will decrease the pets' hunger by a value of 3, to a minimum value of 0
4. To exercise your pet run `pet.walk()`
    * This will increase their fitness level by a value of 4, to a maximum value of 10
5. To check on the status of your pet run `pet.checkUp()`
    * This will allow the pet to tell you if it's hungry, needs a walk, both, or if it's A-okay
6. To adopt a child for your pet run `parent.adoptChild(child)`
    * This will create a child for your pet called 'Amelia'
7. Be warned! Your pet will perish if you do not feed it or exercise it enough
    * If your pets' hunger level reaches 10 or higher it will die
    * If your pets' fitness level drops to 0 or lower it will die
    * If your pet reaches the age of 30 or higher it will die
8. Over to you now - have fun! :)

### If I had more time / if I knew more
1. It would be fun to add some sort of frontend development into this project. Either adding pictures or animation as a visual tool for how your pet is doing 

### Built with
1. Node.js
2. Jest - for testing

### Acknowledgements
Thank you Manchester Codes for all your help creating this project! This was a fun one and was great for getting a better understanding of writing tests, writing code for those tests, and working with `node REPL`

