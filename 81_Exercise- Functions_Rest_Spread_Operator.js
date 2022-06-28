// Calculating sum of multiple arguements passed to a function.

function sum(...items){
    return items.reduce((a,b) => a + b);
}

console.log(sum(1,2,3,4));


//If we pass an array while calling the function.The rest operator saves the arguements passed to the function in an array. So items now has an array of arrays.
function sum2(...items){
    console.log(items); // items has only one element, and that element is an array.
    return items.reduce((a,b) => a + b);
}

console.log(sum2([1,2,3,4]));// We get another array [ 1, 2, 3, 4] as a result instead of a sum of its elements, because the array in 'items', does not contain individual elements, but another array.


//So we must first check if 'items' array has an single element, and that first element is an array itself.



function sum3(...items){
    if ( items.length === 1 && Array.isArray(items[0]))
}

console.log(sum3([1,2,3,4]));

//Now that we have verified the array, we need to extract the first element(which itself is an array) from the array. We can do that with spread operator.

function sum3(...items){
    let output = [];
    if ( items.length === 1 && Array.isArray(items[0]))
    output = [...items[0]];// spreading the contents of the array at the first element of 'items' array. So now in output, we have the elements of the array at the first element.
    return output.reduce((a,b) => a + b);

}

console.log(sum3([1,2,3,4]));