//array.map() method is used to provide a callback function once for each element and creates a new array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cube_nums = nums.map(cube);
cube_nums.forEach(print);
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}