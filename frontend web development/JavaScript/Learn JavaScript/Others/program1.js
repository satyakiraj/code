//string slicing
//slice()- it displays a part of string as a new string by specifying the index of the string
let fullname = "SATYAKI RAJ";
let lastname;
let firstname;
//it copies all the part after the specified index
lastname = fullname.slice(8);
console.log(lastname);
firstname = fullname.slice(0, 7);
console.log(firstname);
//method chainig is used to run to programs simulatenously
let x = "bro";
x = x.charAt(0).toUpperCase();
console.log(x);
let a;
document.getElementById("b1").addEventListener("click", ()=>{
    a = document.getElementById("i1").value;
    a = Number(a);
    console.log(a);
    
}
) 
let b = 5;
if(b >= 18){
   console.log("you are an adult");
}
else if(b <= 5){
    console.log("you are a child");
}
else{
    console.log("you're a child");
}
let online = false;
if(online){
    console.log("you are online");
 }
 else{
    console.log("you're offline");
}