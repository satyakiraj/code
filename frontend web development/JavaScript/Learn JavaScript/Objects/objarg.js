class Car{
    constructor(car, color, MSRP){
        this.car = car
        this.color = color
        this.MSRP = MSRP;
    }
}
const car1 = new Car("ferrari", "red", "$450000");
const car2 = new Car("mercedes", "black", "$100000");
const car3 = new Car("porsche", "powderblu", "$178000");
display(car1)
changeColor(car2)
function display(car_var){
    console.log(car_var.color);
}
function changeColor(car_name){
    car_name.color = "white";
    console.log(car_name.color);
}