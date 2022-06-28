// Searching an array.

const numbers = [1,-1,2,3];

/* Every method.
To check if all numbers in the array are positive.
It checks EVERY element in the array one by one. */
const allPositive = numbers.every(function(value){
    return value >= 0; 
    // Returns a boolean true if each element matches the criteria. 
    // Returns false as soon as it finds an element that doesn't match the criteria.
});
console.log(allPositive);


// Some method.
//Checks if we've AT LEAST ONE element in the array that matches to the criteria.
const atLeastOnePositve = numbers.some(function(value){
    return value >= 0; 
    // Returns a boolean true as soon as it finds an element that matches the criteria and search will terminate.
});
console.log(atLeastOnePositve);
