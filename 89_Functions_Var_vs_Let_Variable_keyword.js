//Let vs Var keyword.

// 1. Issue of scope.

function start(){
  for( let i = 0; i < 5; i++) {
    console.log(i);  
  }
  
  console.log(i); //Will give error, as 'i' is not accessible outside the for loop's code block. It will also give output from 0 to 4.
}
start();


//But if we use 'var' instead of 'let' keyword in for loop,

function start2(){
  for( var i = 0; i < 5; i++) {
    console.log(i);  
  }

  console.log(i); //Will not give error as 'i' is still accessible outside the code block. The call was made within the function, so it will give output from 0 to 5 instead of 0 to 4 because in line 16, in last iteration 'i' becomes 5, and 5  is not less than 5 so the loop terminates. But in line 18, current value of 'i' is 5.

}
start2();

// Because 'let' keyword allow scope of a variable within the code block only, but when we use 'var' keyword, the scope of the variable is within the function instead of the cold block.

//In summary:
// let, const  => code block scope.
// var  => function scope.



// function start3(){
//   for( var i = 0; i < 5; i++) {
//     if(true){
//       let color = 'red';
//     }
  
//   }
//   console.log(color); //Will give error, as color variable's scope is within the if block only due to usage of 'let' keyword.
// }
// start3();


function start4(){
  for( var i = 0; i < 5; i++) {
    if(true){
      var color = 'red';
    }
  
  }
  console.log(color); //Will not give error, as color is declared using 'var' keyword, so its scope is in all function body.
}
start4();



//------------------------------------------

// 2. Global variables.



var color = 'red';
//When we use 'var', outside of a function, this creates a 'global variable' and attaches that global variable to the 'window object' in the browser.

//So this color varible will be acessible via window.color, which might lead to confusion if you're using a third party library that also uses a variable of the same naming convention as you and that third party variable can override your variable. So we should avoid adding stuff to the window object.


let color = 'red'; //The global variable created via 'let' keyword is not attached to the window object.



 //---------------------------------------
 
// When we define a function, it is technically a global function, and is added to the window object. 

 function sayHi() {
   console.log('hi');
 }
 //We can access a function by using window.sayHi() and that is a bad practice. To avoid this, we will learn about modules later, where we will encapsulate these function in seperate modules, so then they will not be added to the window object.