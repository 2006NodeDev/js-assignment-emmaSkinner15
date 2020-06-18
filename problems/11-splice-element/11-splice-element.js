/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
//is this the desired implementation?
function spliceElement(someArr, index) {
  newArray = someArr[index]
  someArr = someArr.splice(index,1) //is is chearing to use the already existing splice fxn?
  return newArray
}
startingArray = ['Paul', 'John', 'George', 'Ringo']
console.log(spliceElement(startingArray, 2))    //expected output: 'George'
console.log(startingArray)  //expected output: origional array, without George

