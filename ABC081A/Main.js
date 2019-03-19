function Main(input) {
  var counter = 0;
  for (var i=0;i<input.length;i++){
    if(parseInt(input.charAt(i),10) === 1) counter++;
  }
  console.log(counter);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
