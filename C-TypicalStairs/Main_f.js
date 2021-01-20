"use strict";
function Main(input) {
  const tmp = input.trim().split("\n");
  const stepCount = parseInt(tmp[0].split(/\s/)[0], 10);
  const brokenStepAry = tmp.slice(1).map((val) => parseInt(val, 10));
  const mod = 1000000007;

  if(brokenStepAry.length==0) {
    console.log(fibonacci(stepCount+1))
    return 
  }

  const casesAry = [];
  for (let i = 0; i < brokenStepAry.length; i++) {
    let stepLength;
    if (i === 0) {
      stepLength = brokenStepAry[i];
    } else {
      stepLength = brokenStepAry[i] - brokenStepAry[i - 1] - 1;
      if (stepLength < 1) {
        return console.log(0);
      }
    }

    casesAry.push(fibonacci(stepLength));
  }
  casesAry.push(fibonacci(stepCount - brokenStepAry[brokenStepAry.length - 1]));
  console.log(
    casesAry.reduce((previousVal, currentVal) => {
      return (previousVal * currentVal % mod) % mod;
    }, 1) % mod
  );
}

const fibonacci = (n) => {
  // use Binet's Formula
  return Math.round(
    (((1 + 5 ** 0.5) / 2) ** n - ((1 - 5 ** 0.5) / 2) ** n) / 5 ** 0.5
  );
};

Main(`7 0`)
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
