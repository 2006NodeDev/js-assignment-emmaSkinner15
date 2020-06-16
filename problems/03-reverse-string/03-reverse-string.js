/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
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
console.log(reverseStr("Hello World!"))