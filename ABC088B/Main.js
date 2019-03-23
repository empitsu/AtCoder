function Main(input) {
  "use strict";
  const tmp = input.split("\n");
  const aAry = tmp[1].split(/\s/);
  let aliceScore = 0;
  let bobScore = 0;
 
  for (let i = 0; i < aAry.length; i++) {
    const max = aAry.reduce((a, b) => {
      return Math.max(parseInt(a, 10), parseInt(b, 10));
    });
    const index = aAry.indexOf(max.toString());
    aAry[index] = 0;
    if (i % 2 === 0) {
      aliceScore += max;
    } else {
      bobScore += max;
    }
  }
  console.log(aliceScore - bobScore);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
