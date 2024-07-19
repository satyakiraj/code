//Sometimes you want to read a number from a string. In case of an integer (..., -2, -1, 0, 1, 2, ..) you can use the parseInt function. The following examples return 19 or -19
//the second parameter passed to parseInt is 10. This parameter specifies the radix (the base in mathematical numeral systems) on which the number is to be interpreted.
function add(String){
let add = String.indexOf("+");
let n1 = String.substr(0, add);
n1 = parseInt(n1, 10);
let n2 = String.substr(add);
n2 = parseInt(n2, 10);
return n1 + n2; 
}
