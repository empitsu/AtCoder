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
  var ABSumAry = [];
  var ABCSumAry = [];

  AAry.sort((a, b) => b - a);
  BAry.sort((a, b) => b - a);
  CAry.sort((a, b) => b - a);

  for (var i = 0; i < X; i++) {
    for (var j = 0; j < Y; j++) {
      ABSumAry.push(AAry[i] + BAry[j]);
    }
  }

  ABSumAry.sort((a, b) => b - a);

  for (var k = 0; k < Math.min(K, ABSumAry.length); k++) {
    for (var l = 0; l < Math.min(Z, K); l++) {
      if (Math.min(K, ABSumAry.length) < k * l) break;
      ABCSumAry.push(ABSumAry[k] + CAry[l]);
    }
  }
  ABCSumAry.sort((a, b) => b - a);

  for (var m = 0; m < K; m++) {
    console.log(ABCSumAry[m]);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
