//array.filter() method creates an arry of new elements which has passed the given test 
let ages = [18, 67, 78, 14];
let adults = ages.filter(check);
adults.forEach(print);
function check(element){
    return element >= 18;
} 
function print(element){
    console.log(element);
}