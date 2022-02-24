/**
 * 263. Ugly Number
 * 
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

   Given an integer n, return true if n is an ugly number.
 */

// https://leetcode.com/problems/ugly-number/discuss/541479/Easy-JS-Solution

const isUgly = (num) => {
  if (!num) return false;
  while (num > 1) {
    if (num % 2 === 0) num /= 2;
    else if (num % 3 === 0) num /= 3;
    else if (num % 5 === 0) num /= 5;
    else return false;
  }
  return num === 1; // 不能寫TRUE
}

const num = 14
const result = isUgly(num)
console.log(result)