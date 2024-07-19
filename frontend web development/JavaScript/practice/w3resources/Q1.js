class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails(){
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old. I live in ${this.country}`)
    }
}
const person1 = new Person("Charles", 56, "France");
person1.displayDetails();