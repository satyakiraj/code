class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;

    }
displayDetails(){
    console.log(`${this.make}, ${this.model}, ${this.year}`);
}
}
class Car extends Vehicle{
    constructor(make, mode, year, doors){
        //we are invoking the constructor o parent class
        super(make, mode, year)
        this.doors = doors;
    }
  displayDetails(){
    //here we are first calling the displaydetails function and implementing some additional code to it.
    super.displayDetails();
    console.log(`No. of doors = ${this.doors}`);
  }
}
const car1 = new Car(2022, "mustang", 2035, 4);
console.log(`${car1.make}, ${car1.model}, ${car1.year}, ${car1.doors}`);
car1.displayDetails();