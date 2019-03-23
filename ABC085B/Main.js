function Main(input) {
  "use strict";
  const tmp = input.split("\n");
  const dAry = tmp.slice(1);
  const kagamiMochiAry = [];
  dAry.sort((a, b) => {
    return parseInt(b, 10) - parseInt(a, 10);
  });
  kagamiMochiAry.push(dAry[0]);
 
  for (let i = 0; i < dAry.length - 1; i++) {
    if (dAry[i] !== dAry[i + 1]) kagamiMochiAry.push(dAry[i + 1]);
  }
  console.log(kagamiMochiAry.length);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
