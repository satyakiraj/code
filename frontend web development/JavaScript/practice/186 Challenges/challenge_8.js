function removeDuplicateElement(arr){
  return new Set(arr);
}
const array = removeDuplicateElement(new Array(2, 4, 5, 8, 8, 2));
console.log(array);
