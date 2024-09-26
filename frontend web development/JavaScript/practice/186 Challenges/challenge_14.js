function lcm(a, b) {
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result == 0 && b % result == 0) return (a * b) / result;
    result--;
  }
  return a * b;
}
const value = lcm(60, 45);
console.log(value);
