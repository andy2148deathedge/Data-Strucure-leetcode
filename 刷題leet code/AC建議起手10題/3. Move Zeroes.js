/**
 * 283. Move Zeroes
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the r elative order of the non-zero elements.
 * 
 *  Note that you must do this in-place without making a copy of the array.
 * 
 */

// https://leetcode.com/problems/move-zeroes/discuss/72364/Javascript-124ms
// two pointers
// 96 ms 左右
// 因 O(N + M) = 極端情況如果陣列很大又都是0( worst case ), 則效率會最差 
var moveZeroes = function(nums) {
  let zeroCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) nums[zeroCounter++] = nums[i];
  };
  
  for (let i = zeroCounter; i < nums.length; i++) {
    nums[i] = 0;
  };
};

// https://leetcode.com/problems/move-zeroes/discuss/72364/Javascript-124ms 回覆列
// 解構賦值寫法 可以一迴圈解決 但是跑測試沒有比較快
// 116 ms
// var moveZeroes = function(nums) {
//   let zeroCounter = 0;
  
//   for (let i in nums) {
//     if (nums[i]) {
//       [ nums[zeroCounter], nums[i] ] = [ nums[i], nums[zeroCounter] ];
//       zeroCounter++;
//     }
//   }

//   return nums;
// };

const numsArray = [0, 7, 0, 8, 4, 7, 3, 0];
const result = moveZeroes(numsArray);
console.log(result);