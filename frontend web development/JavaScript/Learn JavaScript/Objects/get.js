//get = it binds an object property to function when the function is accessed
//the property name and the function defined using get keyword cannot have the same name to avoid it we use the underscore before the property name. it indicates that it is a protected property.
// logic - when we tried to access the property _power power function is started and we have already set the value/key of this. _power property to the parameter power and the function get power() return that property.
//in this example we are invoking a function when the property power is accessed 
class Car{
    constructor(power){
       this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
} 
const car1 = new Car(450)
console.log(car1.power);
