let a = ["apple", "mango", "banana"];
//sort method is use to sort an array of strings in different ways
//alphabetical order
a = a.sort();
for(let fruit of a){
    console.log(fruit);
}
//reverse alphabetical order
a = a.sort().reverse();
for(let reverse of a){
    console.log(reverse);
}