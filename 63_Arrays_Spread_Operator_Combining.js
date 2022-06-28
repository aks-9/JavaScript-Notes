//Combining using the Spread operator.

const first = [1,2,3,];
const second = [4,5,6];

const combined = [...first, ...second];//When we spread an array, all its elements are returned individually. SO here we're declaring a new array, and in that new array we are adding the individual elements of first and second arrays.
console.log(combined);


//More visiblity, flexibility.
const combined2 = ['a',...first,10,20, ...second,'b'];//We can add new elements in the combined array using the spread operator.
console.log(combined2);