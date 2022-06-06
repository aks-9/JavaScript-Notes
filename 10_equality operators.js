//Strict equality operator


console.log(1 === 1); //True
console.log('1' === 1); // False, as '1' is a string.
// Both type and value needs to be same.


//Loose equality operator
console.log(1 == 1);
console.log('1' == 1);
console.log( true == 1);
// Only value needs to be same.
// If type is diff, RHS is converted to the type of LHS and compared.
