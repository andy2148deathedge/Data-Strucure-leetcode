/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * param {number[]} nums
 * return {number}
 */
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/248020/My-easy-Javascript-Solution
// O(n)
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) nums[++i] = nums[j];
  }

  return ++i
};

// main
const numsArray = [0,0,1,1,1,2,2,3,3,4];
const result = removeDuplicates(numsArray);
console.log(result);
