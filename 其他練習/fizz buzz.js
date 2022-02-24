/**
 * 將一個大於 0 的整數傳到 fizzBuzz() 函式，該函式可以依下面的規則回傳結果
若該整數能被 3 整除，回傳 Fizz；
若該整數能被 5 整除，回傳 Buzz；
若該整數能被 3 和 5 同時整除，回傳 FizzBuzz；
若都不能整除，回傳該整數。
 */

function fizzBuzz(integer) {
  // 格式檢查
  if (integer < 1) return '請輸入大於等於1之正整數'
  if (integer % 1 !== 0) return '請輸入整數'
  
  // 檢查因數
  let chk = []
  if (integer % 3 === 0) chk.push(3)
  if (integer % 5 === 0) chk.push(5)
  
  // 區分結果
  if (chk.length === 2) return 'FizzBuzz'
  if (chk[0] === 3) return 'Fizz'
  if (chk[0] === 5) return 'Buzz'
  
  return integer
}


// main
const i = 15

const result = fizzBuzz(i)
console.log(result)