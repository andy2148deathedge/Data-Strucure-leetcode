
function bubbleSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {//最後一項會自動排好不用做
    for (let j = arr.length - 1; j >= i + 1; j--) {
      //condition 是j >= i + 1 因為到 i - 1 項都已在之前排好，
      //這一loop只可能需排第 i 項 跟 第 i + 1 項; 即 j - 1 項 % j 項
      if(arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  console.log(arr);
}

//main
bubbleSort([9,7,11,1,13,3,5]); // [ 1, 3, 5, 7, 9, 11, 13 ]

//Random test
// let test = [];

// for (let i = 0; i < 100; i++) {
//   test.push(Math.floor(Math.random() * 100));
// }
// console.log(test);

// bubbleSort(test);