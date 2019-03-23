function Main(input) {
  "use strict";
  const A_PRICE = 500;
  const B_PRICE = 100;
  const C_PRICE = 50;
  const tmp = input.split("\n");
  const X = parseInt(tmp[3], 10);
 
  const A_MAX = parseInt(tmp[0], 10);
  const B_MAX = parseInt(tmp[1], 10);
  const C_MAX = parseInt(tmp[2], 10);
  const patternAry = [];
  
  let a = Math.floor(X / A_PRICE);
  a = a > A_MAX ? A_MAX : a;
 
  for (let i = 0; i <= a; i++) {
    let b = Math.floor((X - A_PRICE * i) / B_PRICE);
    b = b > B_MAX ? B_MAX : b;
    for (let j = 0; j <=b; j++) {
      let c = Math.floor((X - A_PRICE * i - B_PRICE * j) / C_PRICE);
      c = c > C_MAX ? C_MAX : c;
      if (i * A_PRICE + j * B_PRICE + c * C_PRICE === X) {
        patternAry.push({ a: i, b: j, c: c });
       
      }
    }
  }
  console.log(patternAry.length);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
