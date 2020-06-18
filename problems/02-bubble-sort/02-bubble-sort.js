/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

/*this solution is based on the psuedocode implementation for bubble sort
from wikipedia: https://en.wikipedia.org/wiki/Bubble_sort#Pseudocode_implementation */
function bubbleSort(numArray) {
    length=numArray.length
    inOrder=true
    for(var j=0; j<=length-1; j++){
        if(numArray[j+1]<numArray[j]){
            inOrder=false
        }
    }
    if(inOrder){
        return numArray
    }else{
        isSwapped = false
        while(!isSwapped){
            for(var i=1; i<=length-1; i++){
                if(numArray[i-1] > numArray[i]){
                    smallValue = numArray[i]
                    bigValue = numArray[i-1]
                    numArray[i] = bigValue
                    numArray[i-1] = smallValue
                    isSwapped = true
                }
            }
        }
        return bubbleSort(numArray)
    }

}

testArray = [100, 69, 420, 666, 1, 3, 45, 15, 38]
console.log(bubbleSort(testArray))