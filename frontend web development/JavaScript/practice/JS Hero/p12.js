//&& (and), || (or) and ! (not). && links two Boolean values. If both values are true, the result is true. In all other cases it is false. With || the result is true, if at least one of the two input values is true. If both input values are false, the result is false. ! is applied to a single Boolean value and inverts this value: !true is false and !false is true. 
//!true is false and !false is true.
function nand(a, b) {
  let and = a && b;
  return !and;
}

