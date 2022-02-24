//Coding practice - Min Sub Array Length
//Write a function called minSubLength which accepts two parameters, an array of positive integers and a positive integer. This function should return the minimal length of a continous subarry - the sum of elements inside this subarry has to br greater than or equal to the positive integer parameter. If subarry not found, then return 0.


//建立一個包括兩個參數的函式，其中一個參數是一元素全為正整數的陣列，另一個參數為一正整數。這個函式需返回一個正整數，該正整數代表了這個參數陣列的連續元素的子陣列中該子陣列總和可以符合大於正整數參數的最小符合條件子陣列的長度；若不存在符合此條件的子陣列，則返回0。

// Tips: 由於子陣列需要由連續的元素組成，因此可以思考以前後設兩個指示點索引變數的方式來解決這個問題。
// 設置一個

//ex.
//minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); //2

function minSubArray(arr, sum) {
  let left  = 0;// 下界
  let right = 0;// 上界
  let currentSum = 0;// 目前選取陣列總和
  let minLength = Infinity;
  
  while (left < arr.length) {
    if ((currentSum < sum) && (right < arr.length)) { //若未達目標 & 上界未爆
      currentSum += arr[right]; //則加總 且 右界繼續跑
      right++;
    } else if (currentSum >= sum) { //若已達到目標
        let currentLength = right - left;// 令當前目標陣列長度
        if (currentLength < minLength) {//若 比候選最小長度還小
          minLength = currentLength; //則 令 minSubArrLength 為 currentLength
        }
        currentSum -= arr[left];
        left++;// 且 left++ 以尋找可能有更短的符合陣列
    } else if (right >= arr.length) {
      break; //上界已爆 break出 while loop
    }
  }

  if (minLength === Infinity) { //minSubArrLength 都沒改到，表此組合沒有符合的sub array
    console.log("There is no required sub array for this combination.")
    return -1;
  } else {
    console.log(minLength);
    return minLength; 
  }
} 


//main
minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60);