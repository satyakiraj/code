//in inheritance a child class cn inherit/take all the properties of another class
class Animal{
    alive = true;
    sleep(){
        console.log(`This name is ${this.name}`);
    }
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    run(){
        console.log(`This ${this.name} is running   `);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
}
class Cheetah extends Animal{
    name = "Cheetah";
}
class Horse extends Animal{
    name = "Horse";
}
const  animal1 = new Rabbit;
const animal2 = new Cheetah;
const animal3 = new Horse;
animal1.eat();
animal1.sleep();
animal1.run();
animal2.eat();
animal2.sleep();
animal2.run();
animal3.eat();
animal3.sleep();
animal3.run();
console.log(animal1.alive);
console.log(animal2.alive);
console.log(animal3.alive);