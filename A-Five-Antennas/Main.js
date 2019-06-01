function Main(input) {
  var tmp = input.trim().split("\n");
  var array = tmp.slice(0, tmp.length - 1);
  var limit = parseInt(tmp[tmp.length - 1], 10);
  array = array.map(val => parseInt(val, 10));

  console.log(array[array.length - 1] - array[0] <= limit ? "Yay!" : ":(");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
