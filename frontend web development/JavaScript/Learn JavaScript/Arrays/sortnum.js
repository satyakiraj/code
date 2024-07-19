let num = [34, 56, 23, 78];
num.sort(descendingorder);
num.forEach(print);
function descendingorder(x, y){
    return y - x;
}
function print(element){
    console.log(element);
}