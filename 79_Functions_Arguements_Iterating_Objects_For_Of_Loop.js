function sum(a, b){
    return a + b;
}

console.log(sum(1,2)); //returns 3.

console.log(sum(1)); //This means we're adding 1 + b. The value of b is not passed, so by default it will be 'undefined'. And 1 + b will mean, 1 + undefined, which will result in NaN.(Not a number)

console.log(sum());// Same thing happens when no arguements are passed. The default values will be undefined + undefined = NaN.

console.log(sum(1,2,3,4,5)); //Here excess arguements are passed, so only first two arguements will be used as only those are declared in function declaration. So 1 and 2 will be passed and the result will be 3.


//Every function in JS has a special object called 'arguements'.

function sum2(a, b){
    console.log(arguments); 
    return a + b;
}
console.log(sum2(1,2,3,4,5));
// arguements object looks like an array, but it's an object.
// 0: 1​
// 1: 2
// 2: 3
// 3: 4​
// 4: 5

// But the keys to this object are the indexes of the arguements passed to this function.


//If you want to have a function, with varying numbers of paratmeters, to work with all the arguements passed to this function, we'll use a For-Of loop.

function sum3(a, b){
    let total = 0;
    for ( let value of arguments) //We can use this loop to iterate over the values of this arguements object. We can use For-Of loop with not only arrays, but with any object that has an iterator.
    //Plain objects created with object literal syntax don't have an iterator.
    total += value;
    return total;
}
console.log(sum3(1,2,3,4,5,6,7,8,9,10));

//As we're not using a and b, we can remove them.
function sum4(){
    let total = 0;
    for ( let value of arguments)
    total += value;
    return total;
}
console.log(sum4(1,2,3,4,5));