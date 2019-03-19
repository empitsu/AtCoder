function Main(input) {
  "use strict"
  const tmp = input.split('\n');
  const AList = tmp[1].split(/\s/);
  
  let isEven = false;
  let minCounter = Math.pow(10, 9);
  for(let i=0;i<AList.length;i++){
    let num = parseInt(AList[i],10);
    isEven = num%2 === 0;
    if(!isEven) break;
    let counter = 0;
    do{
      counter++;
      num = num/2;
    }while(num%2===0 && counter<minCounter)
    minCounter = counter<minCounter?counter:minCounter;
  }
  if(!isEven) minCounter = 0;
 
  console.log(minCounter);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
