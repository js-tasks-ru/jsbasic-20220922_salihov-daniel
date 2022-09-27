function factorial(n) {
  if (n === 0 || n === 1) return 1;

  let res = 1;

  for (let i = 2; i <= n; i++) {
    res *= i;
  }

  return res;
}
factorial(0);
factorial(1);
factorial(3);
factorial(5);
