function Main(input) {
  const A_PRICE = 500;
  const B_PRICE = 100;
  const C_PRICE = 50;
  var tmp = input.split("\n");
  var X = parseInt(tmp[3], 10);
 
  var A_MAX = parseInt(tmp[0], 10);
  var B_MAX = parseInt(tmp[1], 10);
  var C_MAX = parseInt(tmp[2], 10);
  var patternAry = [];

  var a = Math.floor(X / A_PRICE);
  a = a > A_MAX ? A_MAX : a;
  
  for (var i = a; i >= 0; i--) {
    var aRemainder = X - A_PRICE * i;
    var b = Math.floor(aRemainder / B_PRICE);
    b = b > B_MAX ? B_MAX : b;
    for (var j = b; j >= 0; j--) {
      var bRemainder = aRemainder - B_PRICE * j;
      var c = Math.floor(bRemainder / C_PRICE);
      c = c > C_MAX ? C_MAX : c;
      if (i * A_PRICE + j * B_PRICE + c * C_PRICE === X) {
        patternAry.push({ a: i, b: j, c: c });
      }
    }
  }
  console.log(patternAry.length);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
