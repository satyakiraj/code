/* foreach method is used to excute some code for each element of an array. array name, the index of the element and the element is automatically provided by the foreach method */
let students = ["john", "patrick", "jack"];
function capitalize(element, index, arr) {
  arr[index] = element[0].toUpperCase() + element.slice(1);
}
students.forEach(capitalize);
students.forEach(print);
function print(element){
    console.log(element);
}
