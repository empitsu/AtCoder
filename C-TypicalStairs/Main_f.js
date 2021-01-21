"use strict";

const mod = 1000000007;

// utilities to compute decimal numbers
// cf) https://blog.asial.co.jp/1191
// const multiply = function(value1, value2) {
//     var intValue1 = +(value1 + '').replace('.', ''),
//         intValue2 = +(value2 + '').replace('.', ''),
//         decimalLength = _getDecimalLength(value1) + _getDecimalLength(value2),
//         result;
//     result = (intValue1 * intValue2) / Math.pow(10, decimalLength);
//     return result;
// };
// const subtract = function(value1, value2) {
//     var max = Math.max(_getDecimalLength(value1), _getDecimalLength(value2)),
//         k = Math.pow(10, max);
//     return (multiply(value1, k) - multiply(value2, k)) / k;
// };

// Use the Extended Euclidean Algorithm to compute a modular multiplicative inverse
// but I don't know why this results in incorrect values.
// const modMultiInverse = (a, mod) => {
//   let b = mod
//   let u = 1
//   let v = 0;
//   while (b) {
//       const t = a / b;
//       a = subtract(a,multiply(t,b));
//       [a, b] = [b,a]
//       u = subtract(u,multiply(t,v));
//       [u,v] = [v,u]
//   }
//   u %= mod;
//   if (u < 0) u += mod;
//   return u;
// }

// Compute a modular multiplicative inverse of a with Fermat's little theorem
// cf) https://qiita.com/drken/items/3b4fdf0a78e7a138cd9a#3-4-fermat-%E3%81%AE%E5%B0%8F%E5%AE%9A%E7%90%86%E3%81%AB%E3%82%88%E3%82%8B%E9%80%86%E5%85%83%E8%A8%88%E7%AE%97
const modMultiInverse = (a, mod) => {
  return modPower(a, mod - 2, mod);
};

const fibonacci = (n) => {
  // use Binet's Formula
  return Math.round(
    ((modPower((1 + 5 ** 0.5) / 2, n, mod) -
      modPower((1 - 5 ** 0.5) / 2, n, mod)) *
      modMultiInverse(5 ** 0.5, mod)) %
      mod
  );
};

// Compute a^${n} mod ${mod} with the Binary Exponentiation
// to prevent the result from becoming Infinity when calculating a large exponent.
// cf) https://qiita.com/drken/items/3b4fdf0a78e7a138cd9a#4-%E7%B4%AF%E4%B9%97-an
const modPower = (a, n, mod) => {
  let res = 1;
  while (n > 0) {
    // &:Bitwise AND
    if (n & 1) res = (res * a) % mod;
    a = (a * a) % mod;
    // binary logical operator: Right shift assignment
    n >>= 1;
  }
  return res;
};

function Main(input) {
  const tmp = input.trim().split("\n");
  const stepCount = parseInt(tmp[0].split(/\s/)[0], 10);
  const brokenStepAry = tmp.slice(1).map((val) => parseInt(val, 10));

  if (brokenStepAry.length == 0) {
    console.log(fibonacci(stepCount + 1) % mod);
    return;
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
      return ((previousVal * currentVal) % mod) % mod;
    }, 1) % mod
  );
}

Main(`100000 0`);
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
