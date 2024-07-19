class Car{
    constructor(car, color, MSRP, horse_power){
        this.car = car
        this.color = color
        this.MSRP = MSRP;
        this.horse_power = horse_power;
    }
    break(){
        console.log(`Break power of your car is ${this.horse_power} hp`)
    }
}
const car1 = new Car("ferrari", "red", "$450000", 150);
const car2 = new Car("mercedes", "black", "$100000", 200);
const car3 = new Car("porsche", "powderblu", "$178000", 185);
const cars = [car1, car2, car3];
console.log(`Break Horse power of a porsche is ${cars[2].horse_power} hp`);
for(let break_cars  of cars){
    break_cars.break();
}