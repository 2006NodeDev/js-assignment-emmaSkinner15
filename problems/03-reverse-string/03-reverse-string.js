/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. 
function reverseStr(someStr) {
  halfLength = Math.floor(someStr.length/2)
  newArray = []
  for(var i=0; i<halfLength; i++){
      newArray[(someStr.length-(i+1))] = someStr[i]
      newArray[i] = someStr[(someStr.length-(i+1))]
      //console.log(newArray)
  }
  newString = newArray.toString()
  for(var i=0; i<someStr.length; i++){
    newString = newString.replace( ",", "")
  }
  
  return newString
}
console.log(reverseStr("Hello World!")) */
function reverseStr(someStr){
  reversedString = ""
for(var i=1;i<=someStr.length;i++ ){
  //reversedString[i-1] = 
  reversedString += someStr.slice(someStr.length-i, someStr.length+1-i)
}
return reversedString
}
testString = "racecar"
secondTest = "abcdefghijklmnopqurstuvwxyz"
console.log(reverseStr(testString), reverseStr(secondTest))
