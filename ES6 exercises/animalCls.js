// https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

class Animal {
    constructor(name, age, legs, species, status){
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

class Shark extends Animal {
    constructor(name, age, status){
        super(name, age, 0, 'shark');
    }
}

class Cat extends Animal {
    constructor(name, age, status){
        super(name, age, 4, 'cat');
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.   Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master){
        super(name, age, 4, 'dog');
        this.master = master;
    }
    greetMaster(){
        return `Hello ${this.master}`
    }
}