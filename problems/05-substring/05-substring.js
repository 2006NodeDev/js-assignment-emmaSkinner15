/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
if(someStr===""){
    throw("noInput");
}else if(startIndex<0 || someStr.length<startIndex){
    throw("startIndexOOB");
}else if(endIndex<startIndex || someStr.length<=endIndex){
    throw("endIndexOOB");
    
}else{
    newString=""
    for(i=startIndex; i<endIndex; ++i){
        newString+=someStr[i]
    }
    return newString
}
}
try {
    substring("", 3, 4)
} catch(e) {
    console.error("You made an error of type: "+e)
}
console.log(substring("Before you were, I am ", 17, 21))
