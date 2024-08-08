const str = "radar"
let  reversed_str = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed_str += str[i];
}
console.log(str === reversed_str ? "It's a palindrome" : "It's not a palindrome");
