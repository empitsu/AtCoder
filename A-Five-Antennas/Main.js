function Main(input) {
  var tmp = input.trim().split("\n");
  var array = tmp.slice(0, tmp.length - 1);
  var max = parseInt(tmp[tmp.length - 1], 10);
  array = array.map(val => parseInt(val, 10));
  var success = true;

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (i >= j) continue;
      var dist = array[j] - array[i];

      if (max < dist) {
        success = false;
        break;
      }
    }
  }
  console.log(success ? "Yay!" : ":(");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
