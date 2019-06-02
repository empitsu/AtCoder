function Main(input) {
  var tmp = input.trim().split("\n");
  var XYZK = tmp[0].split(/\s/).map(val => parseInt(val, 10));
  var X = XYZK[0];
  var Y = XYZK[1];
  var Z = XYZK[2];
  var K = XYZK[3];
  var AAry = tmp[1].split(/\s/).map(val => parseInt(val, 10));
  var BAry = tmp[2].split(/\s/).map(val => parseInt(val, 10));
  var CAry = tmp[3].split(/\s/).map(val => parseInt(val, 10));

  AAry.sort((a, b) => b - a);
  BAry.sort((a, b) => b - a);
  CAry.sort((a, b) => b - a);

  var ABSumAry = [];
  var ABCSumAry = [];

  for (var i = 0; i < K; i++) {
    if (typeof AAry[i] === "undefined") break;
    for (var j = 0; j < K; j++) {
      if (typeof BAry[j] === "undefined") break;
      ABSumAry.push(AAry[i] + BAry[j]);
    }
  }

  ABSumAry.sort((a, b) => b - a);

  for (var k = 0; k < K; k++) {
    if (typeof ABSumAry[k] === "undefined") break;

    for (var l = 0; l < K; l++) {
      if (typeof CAry[l] === "undefined") break;
      ABCSumAry.push(ABSumAry[k] + CAry[l]);
    }
  }
  ABCSumAry.sort((a, b) => b - a);

  for (var m = 0; m < K; m++) {
    console.log(ABCSumAry[m]);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
