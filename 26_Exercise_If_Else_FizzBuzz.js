//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not Divisible by 3 or 7 => same input
//Not a number = 'Not a number'


// function fizzBuzz(input){
//     if ( typeof input !== 'number') // gives type of value
//     return NaN; //Not a number
    
//     else if (( input % 3 === 0 ) &&  (input % 5 === 0 ))
//     return 'FizzBuzz';
    
//     else if ( input % 3 === 0 )
//     return 'Fizz';
    
//     else if  (input % 5 === 0 )
//     return 'Buzz';
        
//     else
//     return input;

// };
// console.log(fizzBuzz(15));

//We can also remove the else part to make it cleaner.

function fizzBuzz(input){
    if ( typeof input !== 'number') // gives type of value
    return NaN; //Not a number
    
    if (( input % 3 === 0 ) &&  (input % 5 === 0 ))
    return 'FizzBuzz';
    
    if ( input % 3 === 0 )
    return 'Fizz';
    
    if  (input % 5 === 0 )
    return 'Buzz';
        
    return input; //no need of if statment as this is the only option left.

};
console.log(fizzBuzz(15));