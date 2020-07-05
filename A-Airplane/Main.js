function Main(input) {
  "use strict";
  const PQR = input
    .trim()
    .split(/\s/)
    .map(val => parseInt(val, 10));
  const sumAry = [];

  for(let i=0;i<PQR.length;i++){
    const copyAry = PQR.concat();
    copyAry.splice(i,1);

    for(let j=0;j<copyAry.length;j++){
      sumAry.push(PQR[i]+copyAry[j]);
    }
  }
  
  console.log(Math.min(...sumAry));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
