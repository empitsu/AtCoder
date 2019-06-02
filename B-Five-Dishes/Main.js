function Main(input) {
  var array = input.trim().split("\n");
  array = array.map(val => parseInt(val, 10));
  var amount = 0;
  var longestWaitTime = 0;

  for (var i = 0; i < array.length; i++) {
    var ceil = Math.ceil(array[i] / 10) * 10;
    amount += ceil;
    longestWaitTime =
      ceil - array[i] > longestWaitTime ? ceil - array[i] : longestWaitTime;
  }
  console.log(amount - longestWaitTime);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
