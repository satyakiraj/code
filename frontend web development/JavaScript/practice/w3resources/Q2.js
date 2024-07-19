class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
    area(){
        console.log(`${this.length * this.breadth}`);
    }
    perimeter(){
        console.log(`${2 * (this.length + this.breadth)}`);
    } 
}
const rectangle1 = new Rectangle(45, 56);
rectangle1.area();
rectangle1.perimeter();