let a = [4,5,6,7,8];
let b = a.length;
if(b%2 == 0){
    console.log("the number of elements in array is even");
    console.log(1/2 * (a[b/2 - 1] + a[b/2 +1 - 1]));
}
else if(b%2 == 1){
    console.log("the number of elements in array is odd");
    console.log(a[(Math.floor(b/2 +1) - 1)]);
}