/*
給定一個排序好的數組(Sorted Numbers)和一個參數，
請將數組內所有兩兩平均後等於給定參數的組合給找出。

複雜度: O(n^2)
*/

function averagePair (arr, avg) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) { 
    //因為最後一個在前面的比較會被比完，所以arr.length - 1 最後一個不用比
    for (let j = i + 1; j < arr.length; j++) {
      if((arr[i] + arr[j]) / 2 === avg) {
        result.push([arr[i],arr[j]]);
      }
    }
  }
  return result;
}

//main
console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));