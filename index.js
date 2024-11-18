// Given an array of integers, return an array such that each element
// at index i is the product of all the numbers in the original
// array except the one at i.
// for solving this code problem let me go through each step
// of course we need function with one parameter
function returnInt(arr) {
  // we need to return an array of numbers so we need to store them in a new array
  let result = [];
  // to go through each number we need for loop
  for (let i = 0; i < arr.length; i++) {
    // to get each number inside the loop we need to have a inner loop
    // we need to store number 1 in a variable
    // this one store the accumulation after each iteration meaning when we multiply two numbers it store the result of it
    // this result is again multiplying with the second number and it continues until end of loop
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        // this ensures that current index i of outer loop is skipped
        // meaning the index i should be skipped
        product *= arr[j];
        // product start at 1
      }
    }
    result.push(product);
    // push the result to result
  }
  return result;
  // return the result
}

console.log(returnInt([1,2,3,4,5]));
