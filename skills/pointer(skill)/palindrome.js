//用pointer技巧檢查出左右對稱字串，正確返回true

// //main
// palindrome('tacocat');// true
// palindrome('amanaplanacalpanama');// true
// palindrome('asjoihfhwo');// false

//function
function palindrome(str) {
  arr = str.split("");

  let left = 0;
  let right = arr.length-1;
  while(left <= right) {
    if(arr[left] === arr[right]) {
      left++, right--;
    } else {
      return false;
    }
  }
  return true;
}

//main
console.log(palindrome('tacocat'));// true
console.log(palindrome('amanaplanacanalpanama'));// true
console.log(palindrome('asjoihfhwo'));// false