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
    var keyAry1Str = [ary[0] + 1, ary[1], ary[2]].join(",");

    if (
      !priorityQueue.has(keyAry1Str) &&
      (AAry[ary[0] + 1] && BAry[ary[1]] && CAry[ary[2]])
    )
      priorityQueue.set(
        keyAry1Str,
        AAry[ary[0] + 1] + BAry[ary[1]] + CAry[ary[2]]
      );
    var keyAry2Str = [ary[0], ary[1] + 1, ary[2]].join(",");
    if (
      !priorityQueue.has(keyAry2Str) &&
      (AAry[ary[0]] && BAry[ary[1] + 1] && CAry[ary[2]])
    )
      priorityQueue.set(
        keyAry2Str,
        AAry[ary[0]] + BAry[ary[1] + 1] + CAry[ary[2]]
      );
    var keyAry3Str = [ary[0], ary[1], ary[2] + 1].join(",");

    if (
      !priorityQueue.has(keyAry3Str) &&
      (AAry[ary[0]] && BAry[ary[1]] && CAry[ary[2] + 1])
    )
      priorityQueue.set(
        keyAry3Str,
        AAry[ary[0]] + BAry[ary[1]] + CAry[ary[2] + 1]
      );
  }
  for (var k = 0; k < sumAry.length; k++) {
    console.log(sumAry[k]);
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
