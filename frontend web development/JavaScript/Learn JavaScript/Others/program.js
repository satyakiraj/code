console.log("hello world");
window.alert("this website can access your personal data")
let age;
age = 8;
let years;
years = age + 5;
console.log(age);
console.log("you are", years, "years old");
//never use double quotes when you want to display value of a variable
//we need to first assign the name of variable and then assign value to it when you use the function let.
let FirstName = "SATYAKI";//string
console.log("hello", FirstName);
let students = true;//boolean
console.log(students);
document.getElementById("p2").innerHTML = "hello " + FirstName;
let x = 45;
let y = x * 45;
console.log(y)
let a = x % 2;
console.log(a)
let bro = 45;
let code = 20;
code *= 2;
console.log(code);
let result = (4589 - 999) * (456789 * 456789);
console.log(result);
let username = window.prompt("what is your name?");
console.log(username);
//type conversion
let user = window.prompt("what is your age?");
console.log(typeof user);
user = Number(user);
console.log(typeof user);
user += 1;
console.log(user);
let g;
let h;
let i;
g = Number("3.78");
h = Boolean("true");
i = String(45678);
console.log(g, typeof g);
console.log(h, typeof h);
console.log(i, typeof i);
const pi = 3.14285714286;
let radius;
let circumference;
radius = window.prompt("enter the value of radius:");
radius = Number(radius)
circumference = 2 * pi * radius;
console.log("the circumference is", circumference);
let k = 34.997;
k = Math.round(k);
console.log(k);
let ie = 3.56;
ie = Math.floor(ie);
//returns the greatest integer which is always less than the constant assigned in the variable
console.log(ie);
let xyz = 3.45
xyz = Math.ceil(xyz);
//returns the smallest integer which is always greater than constant assigned in the variable
console.log(xyz);
let bhel = 994;
bhel = Math.pow(bhel, 7);
//calculates power 
console.log(bhel);
let eng = 17;
eng = Math.sqrt(eng);
//calculates square root
console.log(eng);
let hin = -90890865432.8906435
hin = Math.abs(hin);
//it tell how far is the given number away from zero 
console.log(hin);
let p = 13.05;
let q = 14;
let r = 15;
let maximum;
maximum = Math.max(p, q, r);
console.log(maximum);
let minimum;
minimum = Math.min(p, q, r);
console.log(minimum);
let s;
s = Math.PI;
console.log(s);
let side = window.prompt("enter the length of side");
side = Number(side);
let base;
base = window.prompt("enter the length of base");
base = Number(base);
let hypotensue;
hypotensue = Math.sqrt(Math.pow(side, 2) + Math.pow(base, 2));
console.log("your hypotensue is", hypotensue);
//string properties
let lengthofname = "    Satyaki Raj   ";
console.log(lengthofname.length);
//type the index at which a letter is located
console.log(lengthofname.charAt(0));
console.log(lengthofname.charAt(3));
//finds the index of a letter in a word
console.log(lengthofname.indexOf(y));
console.log(lengthofname);
//removes extra space from string
lengthofname = lengthofname.trim();
console.log(lengthofname);
lengthofname = lengthofname.toUpperCase();
console.log(lengthofname);
lengthofname = lengthofname.toLowerCase();
console.log(lengthofname);
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "")
console.log(phoneNumber);
//end

