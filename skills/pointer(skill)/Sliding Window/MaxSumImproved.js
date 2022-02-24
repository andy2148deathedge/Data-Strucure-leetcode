//improved maxSum
//maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //12

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let max_value = 0;
  for (let i = 0; i < size; i++) {
    max_value += arr[i];
  }

  let tempValue = max_value;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > max_value) {
      max_value = tempValue;
    }
  }

  console.log(max_value);
  return max_value;
}

//main
maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);