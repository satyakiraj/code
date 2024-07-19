//this keyword is used to access any properties of the given object.
//arrow function does not work with this keyword.
const form_data1 = {
    name: "John",
    age: 22,
    city: "New York",
    greet: function(name){
        console.log(`Hello ${name}. I am ${this.name} and I am ${this.age} years old. I live in ${this.city}.`);
    }
  };
  const form_data2 = {
    name: "Charles",
    age: 25,
    city: "Paris",
    greet: function(name){
        console.log(`Bonjour ${name}. I am ${this.name} and I am ${this.age} years old. I live in ${this.city}.`);
    }
  };
  form_data1.greet("Satyaki Raj");
  form_data2.greet("Satyaki Raj");
//here this keyword access the window object with property name
this.name = "mywindow"
console.log(this);