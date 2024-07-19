//break statement breaks from the loop when the code reaches a particular value
// continue statement escapes through a particular part of loop
for(let a = 1; a <= 20; a += 1){
    if(a == 13){
        break
    }
    console.log(a);
}
console.log("continue");
for(let i = 1; i <= 50; i += 1){
    if(i == 23){
        continue
    }
    console.log(i);
}