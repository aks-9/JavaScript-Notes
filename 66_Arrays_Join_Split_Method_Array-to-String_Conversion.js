// Join method is used to join the individual elements of an array.
// It converts an array to a string.

const numbers = [1,2,3];
const joined = numbers.join('-');
/* Takes a string parameter which is used to join the elements of an array. The result returned is also a string. If it is empty, a comma is used by default. */
console.log(joined);



// Split method to split a string into an array.

const message = 'This is my first message';
const parts = message.split(' '); // Spliting the message at a whitespace ' ' in the string. This will return an array.
console.log(parts);


//Now we can use join method on the returned 'parts' array, and combine the elements.
const combine = parts.join('_');
console.log(combine); //This will return This_is_my_first_message.



