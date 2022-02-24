//Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters. 

//請寫一函式，可接受一個字串參數且返回其最長的子字串(連續的)長度，該子字串須符合所有字串元素不重複。

//ex.
//uniqueLettersString("thisishowwedoit") //6

//Tips: use skills sliding window and counter
//用sliding window 跟 計數器 技巧 (以 JS 物件型態 做計數器) 來求解


function uniqueLettersString(str) {
  let start = 0; // 代表字串 開始位址
  let end = 0; // 代表字串 結束位址
  let counter = {}; // 令空的計數器物件
  let maxLength = -Infinity; // 當前最大長度

  while (end < str.length) {
    if (counter[str[end]]) {
      counter[str[start++]]--;
    } else {
      counter[str[end++]] = 1;
      if(end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }

  if (maxLength === -Infinity) {
    console.log("Can't find unique letters substring.")
    return null;
  }

  console.log(maxLength);
  return maxLength;
}

//main
uniqueLettersString("thisishowwedoit");