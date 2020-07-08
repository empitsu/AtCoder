"use strict";
function Main(input) {
  const tmp = input.trim().split(/\s/);
  const K = parseInt(tmp[0], 10);
  const N = parseInt(tmp[1], 10);
  const mod = 1000000007;

  console.log(fibonacci(K, N)%mod);
}

const fibonacci = (k, n) => {
  const memo = {};
  function fib(n) {
    if (memo[n]) return memo[n];
    if (n <= k) return 1;
    let sum = 0;
    for (let i = 1; i <= k; i++) {
      sum += fib(n - i);
    }
    return (memo[n] = sum);
  }
  return fib(n);
};
Main("2 10");
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
