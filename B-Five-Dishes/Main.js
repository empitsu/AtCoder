function Main(input) {
  var array = input.trim().split("\n");
  array = array.map(val => parseInt(val, 10));
  var waitTimeAry = [];
  var amount = 0;
  var ceilArray = [];
 
  for (var i = 0; i < array.length; i++) {
    var ceil = Math.ceil(array[i] / 10) * 10;
    waitTimeAry.push(ceil - array[i]);
    ceilArray.push(ceil);
  }
 
  var maxWait = Math.max(...waitTimeAry);
  var index = waitTimeAry.indexOf(maxWait);
  ceilArray.splice(index, 1);
  ceilArray.splice(ceilArray.length, 0, array[index]);
  for (var j = 0; j < ceilArray.length; j++) {
    amount += ceilArray[j];
  }
  console.log(amount);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));