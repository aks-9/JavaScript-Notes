// Scope of a variable.

1.

{   
  const message = 'hi';
}
console.log(message);
// Will give error as scope of 'message' is limited within the code block only.(Only for const and let keywords)




// 2.

function start() {   
  const message = 'hi';
}
console.log(message); //Will give error as the scope of the constant 'message' is limitied within the function's code block.



// 3.

function start1() {   
  const message = 'hi';

  if(true){
    const another = 'bye';
  }// This const is only accessible within the if statement's code block.

  console.log(another);// Will give error as we're trying to access 'another' from outside the if statement's code block.

}
start1();



// 4.

function start2() {   

  for (let i=0; i < 5; i++){
    console.log(i); //Will not give error, as 'i' is accessible with for loop's code block.
  }

  console.log(i); //Will give error, as we're trying to access 'i' from outside the code block, where 'i' is defined.


}
start2();


// .5
function start3(){
  const message = 'hi';
  console.log(message);
}

function stop3(){
  const message = 'bye';
  console.log(message);
}

start3(); //Will return 'hi' as result.
stop3();  //Will return 'bye' as result.

//Same named variable in two different function's code blocks can be used, as their scope is different.


// 6. Global scope.

const color = 'red'; // This constant is accessible everywhere in the program and is not limited to any code block. Its scope is therefore, 'global'.
function start3(){
        console.log(color);
  }
  
  function stop3(){
    console.log(color);
  }

start3(); 
stop3(); 
// Both functions can access the global variable 'color'.



// 7. Local vs Global scope.

const color = 'red'; 

function start3(){
        const color = 'blue';
        console.log(color);// This will output 'blue'.
  }
  
  function stop3(){
    console.log(color);// This will output 'red'.
  }

start3(); 
stop3(); 
// Local variables/constants have precedence over global variables. The use of Global varibles should be avoided as any function can modify it accidentaly, which may lead to bugs.

