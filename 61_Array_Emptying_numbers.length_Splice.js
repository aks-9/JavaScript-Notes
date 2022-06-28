// Emptying an array
let numbers = [1,2,3,4,5];

// Solution 1: 
// If you don't have any other references to the original array, set the orginal array to an empty array.

numbers = [];
console.log(numbers);
// Old array still is in memory and if there are no other references to this object, it will eventually be removed by garbage collector.

//For example:
let numbers1 = [1,2,3,4,5];
let another = numbers1; //Variable 'another' is still pointing to the same object as the original array, so it will not be collected by garbage collector.

numbers1 = [];
console.log(numbers1); //Will show empty array.
console.log(another); //Will still show original array.


// Solution 2:
// If you do have references to the original object. Just set the length property to zero.

let numbers2 = [1,2,3,4,5];
let another2 = numbers2;

numbers2.length = 0;

console.log(numbers2); 
console.log(another2);


// Solution 3:
//Using the Splice method.


let numbers3 = [1,2,3,4];
let another3 = numbers3;

numbers3.splice(0, numbers3.length); //First arguement is 0 as we're starting from fist element. And numbers.length is used to cover all elements.

console.log(numbers3); 
console.log(another3);


// Solution 4:
//Using the Pop method with While loop.

let numbers4 = [1,2,3,4];

while(numbers4.length > 0)
 numbers4.pop();

console.log(numbers4);

