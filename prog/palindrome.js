/**
 * Fast and Easy way to find number/string is palindrome
 * @param {*} word (word can be number or string)
 * @returns boolean
 */
function isPalindrome(word) {
    const str = String(word);
    const wLength = str.length - 1;
    const wLengthToCompare = wLength / 2;
  
    for (let i = 0; i <= wLengthToCompare; i++) {
      if (str.charAt(i) !== str.charAt(wLength - i)) {
        return false;
      }
    }
    return true;
  }
  
  // calling the isPalindrome Function
  const result = isPalindrome("HeeH"); // true
  console.log("Result: ", result);
  