//objects are the group of properties like name, age and methods properties = what an object has method = what an object can do and it is a way to intialize a function. (.)is used to access properties/methods
const form_data = {
  name: "John",
  age: 22,
  city: "New York",
  //greet is a function/method
  greet: ((name) => console.log(`HELLO ${name}`))
};
console.log(form_data.name);
console.log(form_data.age);
console.log(form_data.city);
form_data.greet("Satyaki Raj");
