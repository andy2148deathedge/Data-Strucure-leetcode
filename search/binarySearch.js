let numbers = [
  9,
  12,
  15,
  18,
  19,
  20,
  22,
  25,
  26,
  26,
  33,
  37,
  38,
  41,
  47,
  47,
  50,
  55,
  57,
  60,
  68,
  80,
  87,
  90,
  98,
  100,
  103,
  108,
  109,
  109,
  116,
  120,
  120,
  124,
  127,
  128,
  131,
  135,
  135,
  139,
  143,
  145,
  151,
  155,
  156,
  158,
  163,
  164,
  165,
  169,
  169,
  173,
  174,
  176,
  177,
  178,
  181,
  182,
  182,
  183,
  184,
  189,
  192,
  195,
  200,
  201,
  203,
  204,
  207,
  213,
  217,
  222,
  222,
  222,
  227,
  228,
  233,
  235,
  237,
  239,
  239,
  243,
  248,
  251,
  252,
  257,
  260,
  260,
  263,
  268,
  270,
  271,
  271,
  276,
  281,
  284,
  285,
  295,
  297,
  298,
];

//二元搜尋
//針對已經排序好的資料可使用，每次都把從中點開始找的方法，所以一定每次都可以減少一半的搜尋量

/*
Worst Case Performance: O(log n)
Best Case Performance: O(1)
Average Case Performance: O(log n)
*/

function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length-1;
  let stepCounter = 0;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (arr[mid] < n) {
      left = mid + 1;
    } else if (arr[mid] > n) {
      right = mid - 1;
    } else {
      console.log(`Found ${n} in position ${mid}.`);
      console.log(`Found it after ${stepCounter} steps.`);
      return mid;
    }
    stepCounter++;
  }
  console.log(`Can't find ${n} in target array.`);
  return -1;
}

binarySearch(numbers, 297);
