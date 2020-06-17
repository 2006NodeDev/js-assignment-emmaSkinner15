/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  if(someStr.length==1){
      return true
  }else if(someStr[0]===someStr[someStr.length-1]){
      newStr= someStr.slice(1, someStr.length-1)
      return isPalindrome(newStr)
  }else{
      return false
  }
}
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('Obviously not a palindome'))