function Main(input) {
  "use strict";
  const tmp = input.split("\n");
  const dAry = tmp.slice(1);
  const kagamiMochiAry = dAry.filter((val,i,self)=> val && self.indexOf(val) ===i);
  console.log(kagamiMochiAry.length);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
