function Main(input) {
  "use strict";
  const tmp = input
    .trim()
    .split("\n")
    .slice(1);
  const list = tmp.map(val => val.split(/\s/).map(num => parseInt(num, 10)));
  console.log(list);

  let isSuccess = true;
  for (let i = 0; i < list.length; i++) {
    let pre = i - 1 < 0 ? [0, 0, 0] : list[i - 1];
    let t = list[i][0] - pre[0];
    let distX = Math.abs(list[i][1] - pre[1]);
    let distY = Math.abs(list[i][2] - pre[2]);
    let dist = distX + distY;

    if (t < distX + distY || t % 2 !== dist % 2) {
      isSuccess = false;
      break;
    }
  }
  console.log(isSuccess ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

