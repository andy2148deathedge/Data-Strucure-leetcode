/*
此處指的pointer跟c的pointer指針不是同一個概念
而是一個程式技巧

由於data是排序後的數組，
可以設定下限left  上限right 兩個pointer作為上下限的index，
將需要合在一起比較的數組根據給定的參數利用這兩個pointer逐步限縮，達到節省效率效果

average pair的題目用此技巧效率會高很多
由於只用一個while loop
complexity為O(n)
*/
let dataArray = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
let avgParameter = 1.5;

function averagePairPoint(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    let avgTemp = (arr[left] + arr[right]) / 2;
    if (avgTemp > avg) {//計算結果大於平均參數
      right--;//上界需下調讓計算結果變小
    } else if (avgTemp < avg) { //計算結果小於平均參數
      left++;//下界需上調讓計算結果變大
    } else {//計算結果等於平均參數，找到正確數組
      result.push([arr[left], arr[right]]);
      left++, right--;//將上下界都更緊縮找其他可能數組
    }
  }
  return result;
}

//main
console.log(averagePairPoint(dataArray, avgParameter));