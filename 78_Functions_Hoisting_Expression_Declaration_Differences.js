//Hoisting.
//we can call a function before declaring the function due to hoisting. Hositing is the process that automatically moves the function declaration to the top of the code at the run time by the JS engine.



//Function declaration
walk(); 

function walk(){
    console.log('walk');
} // This moves to the top at the run time.




//Function Expression.
run(); //This will result in an uncaught reference errror, as we haven't defined run before calling it.

let run = function(){ // Anonymous Function Expression.
    console.log('run');
}; 



