//toLocalestring = it used to format a number using the style
let num = 12743578601.906290657;
let a = 12743578601.906290657;
let b = 12743578601.906290657;
// num = num.toLocaleString("en-US", {style: "currency", currency: "USD"});
// console.log(num);
a = num.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
console.log(a);
// b = num.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
// console.log(b);
num =  num.toLocaleString(undefined, {style: "percent"});
console.log(num);