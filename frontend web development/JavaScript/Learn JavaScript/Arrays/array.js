let fruits = ["mango", "banana", "guava"];
fruits[1] = "orange";
fruits.push("lemon"); // adds an element
fruits.pop(); // removes the last elememt
fruits.shift(); // removes the element at beginning
fruits.unshift(true); // the unshift() method adds new elements to the beginning of an array.
let length = fruits.length;
let index = fruits.indexOf("orange");
 console.log(fruits);
 console.log(length);
 console.log(index);