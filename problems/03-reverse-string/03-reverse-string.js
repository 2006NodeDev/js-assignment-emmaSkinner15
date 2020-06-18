/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. 
 */
function reverseStr(someStr){
  reversedString = ""
for(var i=1;i<=someStr.length;i++ ){
  reversedString += someStr.slice(someStr.length-i, someStr.length+1-i)
}
return reversedString
}
testString = "racecar"
secondTest = "abcdefghijklmnopqurstuvwxyz"
console.log(reverseStr(testString), reverseStr(secondTest))
