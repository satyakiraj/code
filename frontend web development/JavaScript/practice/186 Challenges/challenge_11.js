function countWords(str){
   const arr_str = str.split(' ')
   const word_count = arr_str.length
   return word_count
}   
const number = countWords("hello bro ?")
console.log(number)
