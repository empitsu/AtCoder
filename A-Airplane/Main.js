function Main(input) {
  "use strict";
  const PQR = input
    .trim()
    .split(/\s/)
    .map(val => parseInt(val, 10));

  let sum = PQR.reduce((sum, currentVal) => {
    return sum + currentVal;
  }, 0);

  console.log(sum - Math.max(...PQR));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
