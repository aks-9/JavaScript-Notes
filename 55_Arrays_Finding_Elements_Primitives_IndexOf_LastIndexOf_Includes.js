const numbers = [1,2,3,4,1];
console.log(numbers.indexOf(3)); // searches for  the element '3', and returns its index.
console.log(numbers.indexOf('a')); //Returns -1 as 'a' is not present in the array.
console.log(numbers.indexOf('3')); // searches for  the element '3' as a string, and returns -1, because 3 is not a string in the given array.

console.log(numbers.indexOf(1,2)); // This will return the index of 1, but the search will begin at the index=2. So this will return 4, which is the index of 5th element, rather than the first element in the array.

console.log(numbers.lastIndexOf(1));// returns the last possible index of an element, in case there are multiple of them present in the array.

console.log(numbers.indexOf(1) !== -1); // If this returns 'true', that means the element exists in the array.

console.log(numbers.includes(1)); // a shorter way to check existence of an element.