/**
 * 136. Single Number
 * https://leetcode.com/problems/single-number/
 * Given a non-empty array of integers nums, every element appears twice except for one.  Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
/**
 * param {number[]} nums
 * return {number}
 */
//https://leetcode.com/problems/single-number/discuss/559971/PythonJSGo-O(n)-by-XOR-w-Hint
// 運用 XOR ^= 技巧展開為二進位數字解題 O(n)
var singleNumber = function(nums) {
  let xor_result = 0; 
    for (let number of nums) {
      xor_result ^= number;    
    }
    return xor_result;
};

const numsArray = [7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7];
const result = singleNumber(numsArray);
console.log(result);