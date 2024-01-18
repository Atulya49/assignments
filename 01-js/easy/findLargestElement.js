/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var a= numbers.sort();
console.log(a[numbers.length-1])
    return a;
}

module.exports = findLargestElement;
