//Reducing an array.

const numbers = [1,2,-1,3];

//To find the sum of all of the elements of the array.
let sum = 0;
for( let element of numbers) 
 sum += element;

console.log(sum);


/* A better way is to use the reduce method, which can reduce all elements in an array into a single value. The single value could be a string, a number, an object etc.

A reduce method has two arguements. The first is a callback function with two parameters(accumulator and currentValue), and the second arguement is the initial value for the accumulator. */

const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;

},0);

console.log(sum2);

/* The 'accumulator' parameter is exactly like 'sum' vaiable in the previous code.So we initialize this to 0. And the arrow function is executed multiple times. Each time the 'currentValue' will be set to one element in the array. So in each call we will take the 'currentValue' and add it to 'accumulator'.

Internally, this reduce method will take the result of 'accumulator + currentValue' and store it in 'accumulator'.

If we represent 'accumulator' with a, and 'currentValue' with b, then after each call of the callback function:

a=0, c=1 => a= 1
a=1, c= -1 => a= 0
a=0, c=2 => a= 2
a=2, c=3 => a= 5



We can make it shorter by excluding the initialization of the 'accumulator' to 0 by not passing anything as a second arguement in reduce method. Then the 'accumulator' will automatically take the first element of the array as the initial value. */

const sum3 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;

});

console.log(sum3);

/* So now after each call of the callback function:

a=1, c= -1 => a= 0
a=0, c=2 => a= 2
a=2, c=3 => a= 5


Shorting it further by removing {} in arrow function. */

const sum4 = numbers.reduce((a, c) => a + c);

console.log(sum4);