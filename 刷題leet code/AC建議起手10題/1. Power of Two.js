/**
 * #231. Power of Two
 * 
  Given an integer n, return true if it is a power of two. Otherwise, return false.

  An integer n is a power of two, if there exists an integer x such that n == 2x.

  Follow up: Could you solve it without loops/recursion?

 */

// https://leetcode.com/problems/power-of-two/discuss/229001/JavaScript
// Time Limit Exceeded 

// const isPowerOfTwo = (num) => {
//   // 不斷對符合條件的除以2
//   while (num % 2 === 0) num /= 2

//   return num === 1
// }

// const i = 32
// result = isPowerOfTwo(i)
// console.log(result)

https://leetcode.com/problems/power-of-two/discuss/369024/100-fastest-0ms-one-line-solution-with-explanation-binary-trick
// Runtime: 68 ms 

var isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;

const n = 32
const result = isPowerOfTwo(n)
console.log(result)