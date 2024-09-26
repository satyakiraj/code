function binary(num) {
  let bin = ' ';
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
      bin += '0';
    } else {
      num = (num - 1) / 2;
      bin += '1';
    }
  }
  bin += '1';
  return bin.split('').reverse().join('');
}
const binary_value = binary(4);
console.log(binary_value);
