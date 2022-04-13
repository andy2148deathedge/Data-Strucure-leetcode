/**
 * 35. Search Insert Position
 * https://leetcode.com/problems/search-insert-position/description/
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * param {number[]} nums
 * param {number} target
 * return {number}
 */

/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 */

var searchInsert = function(nums, target) {
  let left = 0,
      right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) { 
      right = mid - 1;
    } else {
      left = mid + 1;
    } 
  }
  
  // 目標不在 test case array 的情況, 最後 right + 1 會等於 left 
  return left;
};


// main
const nums = [1,3,5,6];
const target = 7;
const result = searchInsert(nums, target);
console.log(result);