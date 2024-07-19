//binds an object property when a value is assigned to it and it can accept values
class Car {
    constructor() {
        this._gas = 50;
    }
    get gas(){
        return this._gas;
    }
    set gas(value) {
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = `${value}L`;
    }
}

const car1 = new Car();
car1.gas = 57;
console.log(car1.gas);
