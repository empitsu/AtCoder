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

  var sumAry = [];
  var priorityQueue = new Map();

  priorityQueue.set("0,0,0", AAry[0] + BAry[0] + CAry[0]);

  for (var i = 0; i < K; i++) {
    var keyOfHighestVal = findKeyOfHighestValue(priorityQueue);
    sumAry.push(priorityQueue.get(keyOfHighestVal));
    priorityQueue.delete(keyOfHighestVal);

    var ary = keyOfHighestVal.split(",").map(val => parseInt(val, 10));

    var [a, b, c] = ary;
    var keyAry1Str = [a + 1, b, c].join(",");

    if (!priorityQueue.has(keyAry1Str) && (AAry[a + 1] && BAry[b] && CAry[c]))
      priorityQueue.set(keyAry1Str, AAry[a + 1] + BAry[b] + CAry[c]);
    var keyAry2Str = [a, b + 1, c].join(",");
    if (!priorityQueue.has(keyAry2Str) && (AAry[a] && BAry[b + 1] && CAry[c]))
      priorityQueue.set(keyAry2Str, AAry[a] + BAry[b + 1] + CAry[c]);
    var keyAry3Str = [a, b, c + 1].join(",");
    if (!priorityQueue.has(keyAry3Str) && (AAry[a] && BAry[b] && CAry[c + 1]))
      priorityQueue.set(keyAry3Str, AAry[a] + BAry[b] + CAry[c + 1]);
  }
  for (var k = 0; k < sumAry.length; k++) {
    console.log(sumAry);
  }
}

var findKeyOfHighestValue = map => {
  var highestValue = 0;
  var highestValueKey = null;
  map.forEach((val, key) => {
    if (highestValue < val) {
      highestValue = val;
      highestValueKey = key;
    }
  });

  return highestValueKey;
};

Main(`2 2 2 8
4 6
1 5
3 8`);
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
