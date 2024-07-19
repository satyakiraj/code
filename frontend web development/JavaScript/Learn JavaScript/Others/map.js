// Map is a collection of key-value pairs where each key and value can be of any data type. It provides a way to associate values with keys and allows you to iterate over the entries in the order of key insertion.
const items = new Map([
    ["t-shirt", 90],
    ["jeans", 100],
    ["toys", 85],
])
let my_cart = 0;
//get key word is used to access the second value of each pair
my_cart += items.get("t-shirt");
my_cart += items.get("jeans");
my_cart += items.get("toys");
console.log(my_cart);
//set method is used to add a pair in the map
items.set("mango-juice", 10);
//delete method is used to remove a pair
items.delete("toys");
//has method is used to check whether our map has the given pair or not
console.log(items.has("toys"));
//size method is used to tell the no. of pairs in our map
console.log(items.size);
//value stores the price and key stores the name
items.forEach((value, key) => console.log(`${key} ${value}`));