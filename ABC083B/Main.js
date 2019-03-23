function Main(input) {
  "use strict";
  const tmp = input.split(/\s+/);
  const N = parseInt(tmp[0], 10);
  const A = parseInt(tmp[1], 10);
  const B = parseInt(tmp[2], 10);
  let total = 0;
 
  for (let i = N; i >= 1; i--) {
    let sum = 0;
    
    for (let j = 0; j < i.toString().length; j++) {
      sum += parseInt(i.toString().charAt(j), 10);
    }
    if (sum >= A && sum <= B) {
      total += i;
    }
  }
  console.log(total);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
