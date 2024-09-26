function gcd(a, b) {
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result == 0 && b % result == 0) break;
    result--;
  }
  return result;
}
const value = gcd(45, 36);
console.log(value);
