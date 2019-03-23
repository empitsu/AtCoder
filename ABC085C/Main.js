function Main(input) {
  "use strict";
  const tmp = input.split(/\s/);
  const N = parseInt(tmp[0], 10);
  const Y = parseInt(tmp[1], 10);
  let ans = [];
 
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N - i; j++) {
      for (let k = 0; k <= N - i - j; k++) {
        if (i * 10000 + j * 5000 + k * 1000 === Y && i + j + k === N)
          ans.push([i, j, k]);
      }
    }
  }
 
  if (!ans.length) ans.push([-1, -1, -1]);
  console.log(ans[0].join(" "));
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
