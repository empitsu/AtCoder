function Main(input) {
	const ary = input.split('\n');
	const ary2 = ary[1].split(/\s/);
	const sum = parseInt(ary[0],10)+parseInt(ary2[0],10)+parseInt(ary2[1],10);
	console.log('%d %s',sum,ary[2]);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
