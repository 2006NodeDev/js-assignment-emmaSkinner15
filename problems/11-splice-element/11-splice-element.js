/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

//this implementation works, but it just uses the splice fxn.
function spliceElement(someArr, index) {
  newArray = someArr[index]
  someArr = someArr.splice(index,1) //is is cheating to use the already existing splice fxn?
  return newArray
}
//The code commeneted out does part of the job- it does return the spliced value,
//but it does not remove the value from the spliced array
/*
function spliceElement(someArr, index){
  arrLen = someArr.length
  newArray = []
  for(var i=0; i<arrLen; i++){
    if(i!=index){
      newArray.push(someArr[i]) 
    }
  }

  someArr = newArray
  console.log(someArr)
  return someArr[index]
}
*/
startingArray = ['Paul', 'John', 'George', 'Ringo']
console.log(spliceElement(startingArray, 2))    //expected output: 'George'

console.log(startingArray)  //expected output: origional array, without George

