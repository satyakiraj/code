/*ternary operator(?) = it is an alternative of if else statement
it works like this:
1. condition
2. if condition is true do something
3. if condition is false do something
*/
function winnerChecker(win){
    win ? console.log("you win") :  console.log("you lose") 
}
winnerChecker(true);