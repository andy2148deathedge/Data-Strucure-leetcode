/**
169. Majority Element
https://leetcode.com/problems/majority-element/description/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * param {number[]} nums
 * return {number}
 */

// https://leetcode.com/problems/majority-element/discuss/51608/Javascript-solution-(without-sort)
var majorityElement = function(nums) {
  const countObj = {};
  for (let num of nums) {
    countObj[num] ? countObj[num]++ : countObj[num] = 1;
    if ( countObj[num] > nums.length / 2 ) return num;
  }

  return -1;
};

// main
const nums = [2,2,1,1,1,2,2];
const result = majorityElement(nums);
console.log(result);