let a = 7;
let b = 8;
let c = 9;
let d = 7;
let e = 6;
console.log(sum(a, b, c, d, e));
function sum(...nums){
  let total = 0;
  for(let num of nums){
    total += num;
  }
  return total;
}