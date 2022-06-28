// Adding elements to array.

const numbers = [1,2];
console.log(numbers);

numbers.push(3,4); // Adds at the end of the array.
console.log(numbers);

numbers.unshift(-1,0); // Adds at the beginning of the array.
console.log(numbers);

numbers.splice(2,0,'a','b'); // Adds 'a' and 'b' at the given index=2 of the array.
console.log(numbers);