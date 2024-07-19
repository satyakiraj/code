//super keyword is used to refer to the parent class and invoke the constructor within the parent class
class Animal {
    constructor(name, age, speed) {
        this.name = name;
        this.age = age;
        this.speed = speed;
    }
}
class Rabbit extends Animal {
    constructor(name, age, speed) {
        //here super keyword passes the parameter to the constructor of parent element
        super(name, age, speed);
    }
}
class Cheetah extends Animal {
    constructor(name, age, speed) {
        super(name, age, speed);
    }
}
class Horse extends Animal {
    constructor(name, age, speed) {
        super(name, age, speed);
    }
}
const animal1 = new Rabbit("Rabbit", 1, 45);
const animal2 = new Cheetah("Cgeetah", 5, 105);
const animal3 = new Horse("Horse", 15, 95);
console.log(animal1.speed);