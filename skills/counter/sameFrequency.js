/*
比較兩個str，若其"組成"一樣返回true，不一樣則返回false;
例如:

sameFrequency(abbcc, abbc) → false; (注:長度不同組成不可能一樣)
sameFrequency(abbx, abbc) → false;
sameFrequency(abbc, aabc) → false;
sameFrequency(abbc, bbac) → true;

*/


function sameFrequency(str1, str2) {
  let arr1 = str1.split(""); //先將字串做成陣列
  let arr2 = str2.split("");

  if (arr1.length !== arr2.length) {
    return false;//錯誤檢查;長度不一樣直接return
  }

  let counter1 = {};
  let counter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1;
    } else {
      counter1[arr1[i]]++;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1;
    } else {
      counter2[arr2[i]]++;
    }
  }

  for(let property in counter1) {
    if (counter2[property] && 
      counter1[property] === counter2[property]) {
        return true;
      } else {
        return false;
      }
  }
}

//main
console.log(sameFrequency("aabc", "accb"));
console.log(sameFrequency("aabc", "abac"));
