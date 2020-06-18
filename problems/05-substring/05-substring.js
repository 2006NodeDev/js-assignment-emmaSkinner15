/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
if(someStr===""){
    return("No string was selected! Please specify a string!");
}else if(startIndex<0 || someStr.length<startIndex){
    return("The start index is out of bounds! Please specify a value of at least 0 \n and less than the string's length");
}else if(endIndex<startIndex || someStr.length<=endIndex){
    return("The end index is out of bounds! Please specify a value \n greater than the start index and less than or equal to the string's length");
    
}else{
    newString=""
    for(i=startIndex; i<endIndex; ++i){
        newString+=someStr[i]
    }
    return newString
}
}
console.log(substring("", 3, 4))
console.log(substring("Before you were, I am ", 17, 21))
