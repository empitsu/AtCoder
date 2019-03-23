function Main(input) {
  "use strict";
  const tmp = input.split(/\s/);
  const N = parseInt(tmp[0], 10);
  const Y = parseInt(tmp[1], 10);
  let ans = [];

  var a = Math.floor(Y / 10000);
  a = a > N ? N : a;

  for (let i = 0; i <= a; i++) {
    var aRemainder = Y - 10000 * i;
    var b = Math.floor(aRemainder / 5000);
    b = b > N - i ? N - i : b;
    for (let j = 0; j <= b; j++) {
      var bRemainder = aRemainder - 5000 * j;
      var k = Math.floor(bRemainder / 1000);

      if (i * 10000 + j * 5000 + k * 1000 === Y && i + j + k === N)
        ans.push([i, j, k]);
    }
  }
  if (!ans.length) ans.push([-1, -1, -1]);
  console.log(ans[0].join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

