// Filtering an array using the filter method. 
// Returns an ARRAY with elements from original array that matches the mentioned criteria.


const numbers = [1,-1,2,3];
const filtered = numbers.filter(function(value){
    return value >= 0;
});
console.log(filtered); //Returns  [ 1, 2, 3 ]

//Using arrow notation.
const filtered2 = numbers.filter(value => value >= 0);
console.log(filtered2);


//Cleaning the code.
const filtered3 = numbers.filter(v => v >= 0);
console.log(filtered3);

//We could also use n instead of v, as we are dealing with an array of numbers.
const filtered4 = numbers.filter(n => n >= 0);
console.log(filtered4);