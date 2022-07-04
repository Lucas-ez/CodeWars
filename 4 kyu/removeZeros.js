/*
Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
*/

function removeZeros(array) {
    for(let i = 0; i < array.length; i++) {
      if(array[i] == 0 && array[i] !== false) {
        let posNoZero = null
        for(let j = i + 1; j < array.length; j++) {
          if(array[j] != 0 || array[j] === false) {
            posNoZero = j
            j = array.length
          }
        }
        if(posNoZero) {
          for(let j = posNoZero; j > i; j--) {
            let aux = array[j]
            array[j] = array[j-1]
            array[j-1] = aux
          }
        } else{
          return array
        }
      }
    }
    return array;
  }