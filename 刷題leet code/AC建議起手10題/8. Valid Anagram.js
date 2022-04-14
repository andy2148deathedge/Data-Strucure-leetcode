/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * param {string} s
 * param {string} t
 * return {boolean}
 */
var isAnagram = function(s, t) {
  // edge case: 先判斷兩字串長度不同直接 return false
  // 先做一個空物件用來計數
  // 用 for of 遍歷 string s, 若計數物件沒有該屬性, 就新增該屬性並且屬性值加一代表該字母多計一次
  // 再用 for of 遍歷 string t, 先檢查若計數物件沒有該屬性或值已經為0，直接return false
  // 若有該物件屬性且值不為 0 (false), 就將其值減1
  // 若跑完第二個 for of loop 都沒有 return false 代表 s t 內容字母吻合，最後 return true
  if (t.length !== s.length) return false;

  const countObj = {};
  for (let char of s) {
    countObj[char] = (countObj[char] || 0) + 1;
  }
  for (let char of t) {
    if (!countObj[char]) return false;
    countObj[char]--;
  }

  return true;
};

// 簡化 https://leetcode.com/problems/valid-anagram/discuss/66527/A-few-JavaScript-solutions
// var isAnagram = function(s, t, m = {}) {
//   for (let c of s) m[c] = (m[c] || 0) + 1;
//   for (let c of t) if (!m[c]--) return false;
//   return Object.values(m).every(v => !v); // return true;
// };


// main
const s = "anagram";
const t = "nagaram";
const result = isAnagram(s, t);
console.log(result);