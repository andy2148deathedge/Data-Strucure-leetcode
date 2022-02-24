/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/**
 * param {number[]} nums
 * return {boolean}
 */

// https://leetcode.com/problems/contains-duplicate/discuss/515531/Javascript-set-vs.-object 參考其物件寫法 O(n) array 長時所花時間較 set 解法為佳
var containsDuplicate = function(nums) {
  let recordObject = {};
  for (let i = 0; i < nums.length; i++) {
    if (recordObject[nums[i]]) {
      return true;
    } else {
      recordObject[nums[i]] = true;
    }
  }
  return false;
};

// https://leetcode.com/problems/contains-duplicate/discuss/515531/Javascript-set-vs.-object set解法 
// var containsDuplicate = function(nums) {
//   let setInstance = new Set(nums);
//   return setInstance.size !== nums.length;
// };  

// main
const numsArray = [1,2,3,4];
const result = containsDuplicate(numsArray);
console.log(result);
