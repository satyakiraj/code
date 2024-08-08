let arr = [45, 56, 78, 95]
let sum = arr.reduce(sum_arr)
function sum_arr(total, element) {
    return total + element
}
console.log(sum);