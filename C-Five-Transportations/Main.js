function Main(input) {
  var tmp = input.trim().split("\n");
  var limitAry = tmp.slice(1).map(val => parseInt(val, 10));
  var person = parseInt(tmp[0], 10);
  var minLimit = Math.min(...limitAry);

  console.log(Math.ceil(person / minLimit) + 4);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
