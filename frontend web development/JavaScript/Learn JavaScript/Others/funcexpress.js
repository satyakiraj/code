//function expression does not include a function num (anonymous function);
let count = 0;
const increment = function(){
   count++;
   document.getElementById("count").textContent = count; 
};
const rest = function(){
    count = 0;
    document.getElementById("count").textContent = 0;
};
const decrement = function(){
    count--;
    document.getElementById("count").textContent = count; 
 };