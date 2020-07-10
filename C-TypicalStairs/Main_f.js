"use strict";
function Main(input) {
  const tmp = input.trim().split("\n");
  const stepCount = parseInt(tmp[0].split(/\s/)[0], 10);
  const brokenStepAry = tmp.slice(1).map(val => parseInt(val, 10));
  const mod = 1000000007;

  const casesAry = [];
  for (let i = 0; i < brokenStepAry.length; i++) {
    let stepLength;
    if (i === 0) {
      stepLength = brokenStepAry[i];
    } else {
      stepLength = brokenStepAry[i] - brokenStepAry[i - 1] - 1;
      if (stepLength <= 1) {
        return console.log(0);
      }
    }

    casesAry.push(fibonacci(stepLength - 1));
  }
  casesAry.push(
    fibonacci(stepCount - brokenStepAry[brokenStepAry.length - 1] - 1)
  );
  console.log(
    casesAry.reduce((previousVal, currentVal) => {
      return previousVal * currentVal;
    }, 1) % mod
  );
}

const fibonacci = n => {
  const memo = {};
  function fib(n) {
    if (memo[n]) return memo[n];
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    let sum = 0;
    sum = fib(n - 1) + fib(n - 2);
    return (memo[n] = sum);
  }
  return fib(n);
};

Main(`100 5
1
23
45
67
89`);
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
