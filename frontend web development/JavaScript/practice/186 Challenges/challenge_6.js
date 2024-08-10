const vowel_str = "aeiou"
const str = "hello"
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (vowel_str.includes(str.charAt(i))) {
        count++;
    } 
}
console.log(count);