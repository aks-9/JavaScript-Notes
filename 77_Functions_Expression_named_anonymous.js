//Function declaration

function walk(){
    console.log('walk');
} // Ending with semi colon not necessary.

walk();

//Function Expression.

let run = function(){ // Anonymous Function Expression.
    console.log('run');
}; // Must end it with a semi colon. Function are treated as objects.

run(); //Calling the Anonymous Function Expression.

let move = run(); //Referencing the same anonymous function expression.


let run2 = function walk(){ // Named Function Expression.
    console.log('running');
}; 

run2();