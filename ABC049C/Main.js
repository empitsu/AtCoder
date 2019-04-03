function Main(input) {
  "use strict";
  const wordList = ["dream", "dreamer", "erase", "eraser"];
  let reverseWordList = [];
  let reverseTxt;
 
  reverseTxt = input.split("").reverse().join("");
  reverseWordList = wordList.map(elem => elem.split("").reverse().join(""));
 
  //console.log(reverseTxt, reverseWordList);
 
  while (reverseTxt.length > 0) {
    let cnt = 0;
    for (let l = 0; l < reverseWordList.length; l++) {
      if (reverseTxt.startsWith(reverseWordList[l])) {
        cnt++;
        reverseTxt = reverseTxt.replace(reverseWordList[l], "");
      }
    }
 
    if (reverseTxt.length > 0 && cnt === 0) {
      break;
    }
  }
 
  console.log(reverseTxt.length === 0 ? 'YES' : 'NO');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
