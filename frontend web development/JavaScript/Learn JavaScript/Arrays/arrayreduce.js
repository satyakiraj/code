//array.reduce() method is used to sum all the values of an array to single value and creates a new array
let prices = [25, 56, 78, 90];
let total_price = prices.reduce(sum);
console.log(total_price);
function sum(total, element){
    return total + element
}
