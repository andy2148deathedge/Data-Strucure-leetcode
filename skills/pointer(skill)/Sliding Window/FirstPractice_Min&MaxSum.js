// fist practice for sliding window
//min sum & max sum
//Write two functions that calculate the max and min sum of n consecutive numbers in an array

//maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //12     2+7+3
//minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //-28    -5-12-11
//會返回任意相鄰n個(n=3)值總和的最大值或最小值

function maxSum(arr, size) {
  let max_value = -Infinity;// 先初始化最大值為負無限
    
  if (size > arr.length) {
    return null; // 若sliding window size 比陣列還大， 則找不到符合要求sum，return null
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if(attempt > max_value) {
      max_value = attempt;
    }
  }

  console.log(max_value);
  return max_value;
}

function minSum(arr, size) {
  let min_value = Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }

  console.log(min_value);
  return min_value;
}

//main
maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);