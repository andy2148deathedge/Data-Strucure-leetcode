/*
給定兩個array: [1, 2, 3]  [5,16, 1, 3]
若要找出兩陣列交集元素，最簡單可以用兩層loop對每個元素兩兩相比return值一樣的陣列
但complexity很差，兩層loop為O(n^2) or (O(n*m))

因此可以利用一個counter的技巧:

對於兩個陣列每個元素都掃一次，每次紀綠到相同元素counter就+1
最後重複出現的舊為交集元素
此algorithm複雜度相較暴力法從O(n^2)降為O(n+m) → O(n)
*/

function intersection(arr1, arr2) {
  let result = []; //紀錄結果陣列
  let arrConcat = arr1.concat(arr2); //把arr1 arr2 合成為合成陣列 arrConcat
  let counter = {}; //計數器counter物件

  for (let i = 0; i < arrConcat.length; i++) {
    if (!counter[arrConcat[i]]) {
      counter[arrConcat[i]] = 1;
    } else {
      counter[arrConcat[i]]++;
    }
  }
  //loop over the counter
  for (let property in counter) {
    if (counter[property] > 1) {
      result.push(property);
    }
  }
  //最後返回result結果
  return result;
}

//main
intersectionNum = intersection([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 1, 3]);
console.log(intersectionNum);