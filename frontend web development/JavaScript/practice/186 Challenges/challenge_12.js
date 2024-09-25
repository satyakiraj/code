function isPrime(num) {
  if (num <= 1) return false;
  else if (num == 2 || num == 3) return true;
  else if (num % 2 == 0 || num % 3 == 0) return false;
  else {
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  }
  return true;
}
console.log(isPrime(3) ? "It's a Prime number" : 'Not a Prime Number');
