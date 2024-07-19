class Animal {
    constructor(spices, sound){
        this.spices = spices;
        this.sound = sound;
    }
    makesound(){
        console.log(`${this.sound}`)
    }
}
class Dog extends Animal{
    constructor(spices, sound, color){
        super(spices, sound);
        this.color = color;
    }
    makesound(){
        super.makesound()
        console.log(`${this.color}`);
    }
}
const animal1 = new Dog("Golden Retriver", "bark", "Golden");
console.log(animal1.spices);
animal1.makesound();