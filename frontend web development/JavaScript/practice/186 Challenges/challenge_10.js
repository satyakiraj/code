function findLongest(str){
    const arr_str = str.split(' ')
    let longestWord = " "
    for(let word of arr_str){
        longestWord = longestWord.length < word.length ? word : longestWord
    }
    return longestWord
}
const word = findLongest("hello bro how are you ?")
console.log(word)
