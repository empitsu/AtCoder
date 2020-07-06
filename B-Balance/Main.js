function Main(input) {
  "use strict";
  const WAry = input
    .trim()
    .split("\n")[1]
    .split(/\s/)
    .map(val => parseInt(val, 10));
  let minGap = Infinity;

  for (let i = 1; i < WAry.length; i++) {
    const copyAry = WAry.concat();
    const latterAry = copyAry.splice(i);

    let formerSum = 0;
    let latterSum = 0;
    for (let j = 0; j < copyAry.length; j++) {
      formerSum += copyAry[j];
    }
    for (let k = 0; k < latterAry.length; k++) {
      latterSum += latterAry[k];
    }
    minGap =
      minGap > Math.abs(formerSum - latterSum)
        ? Math.abs(formerSum - latterSum)
        : minGap;
  }
  console.log(minGap);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
