const str = "hello"
let  reversed_str = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed_str += str[i];
}
console.log(reversed_str);