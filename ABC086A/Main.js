function Main(input) {
	var ary = input.split(/\s/);
	var product = parseInt(ary[0],10)*parseInt(ary[1],10);
	var remainder = product%2;
	console.log(remainder==0?'Even':'Odd');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
