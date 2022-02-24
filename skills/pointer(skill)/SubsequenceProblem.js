/*
給定一個原始字串和一新字串，若新字串在刪除一些字母元素(但不能改字母位置)之後能和原始字串相同，
則return true

isSubsequence("hello", "hello Dear"); //true
isSubsequence("book", "brooklyn"); //true
isSubsequence("abc", "bac"); //false
 */

function isSubsequence(str1, str2) {
  if(str1.length === 0) {
    return true;// 因如果第一個字串沒有元素則一定是str2 的 Subsequence
  }

  let ptr1 = 0;
  let ptr2 = 0;
  while(ptr2 < str2.length) {
    if(str1[ptr1] === str2[ptr2]) {
      ptr1++;
    } 
    if(ptr1 === str1.length) {
      return true;
    }
    ptr2++;
  }
  
  return false;
}

// main
console.log(isSubsequence("hello", "hello Dear"));//true
console.log(isSubsequence("book", "brooklyn"));//true
console.log(isSubsequence("abc", "bac"));//false

let x = 1;
