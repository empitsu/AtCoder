function Main(input) {
  "use strict";
  const wordList = ["dream", "dreamer", "erase", "eraser"];
  const inputTxt = input.split("\n")[0];

  let txtLength = inputTxt.length;
  while (txtLength > 0) {
    let isEndsWith = false;
    for (let l = 0; l < wordList.length; l++) {
      if (inputTxt.endsWith(wordList[l], txtLength)) {
        txtLength -= wordList[l].length;
        isEndsWith = true;
        break;
      }
    }

    if (!isEndsWith) {
      console.log("NO");
      break;
    }
    if (txtLength === 0) {
      console.log("YES");
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
