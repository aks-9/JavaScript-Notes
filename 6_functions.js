//When we declare a function, we pass parameters.
function add (a,b){
    return a + b;
}
// a and b are parameters.


//When we call the function, we pass arguements.
const result = add(1,2);
console.log(result);
//Here 1 and 2 are called arguements.




// This type of function performs a task

function greet(fname, lname) {
    console.log('Hello ' + fname + ' ' + lname);
//Leave space after Hello
}// No ; after function body.

greet('neo', 'anderson');



// This type of function calculate a value.

function square(number){
    return number * number;
}

console.log('The square of number 4 is: ' + square(4));

let input = square(5);
console.log('The square of number 5 is: ' + input);