 //'This' keyword.
 
 //'This' keyword references the object, that is executing the current function.

 //If a function is a part of an object, we call the function a method. 
 //So if that function is a method in an object, 'this' references that object itself.

 //Otherwise if that function is a regular function, which means it's NOT part of an object, 'this' references the global object, which is a window object in browsers and global in Node.

 //Method => obj
 //Function => global (window, global)


 // Example 1: A method in object.
 const video = { //Defining an object called video, with a property 'title' and a method play().
     title:'a',
     play(){
         console.log(this); //Checking where 'this' is referencing.
     } 
 };

 video.play();
 // We get the 'video' object displayed on the console. Here play() is a method, in the 'video' object. So 'this' refers to the 'video' object itself.

 //We can also add a method later in this 'video' object, and we'll get the same result.

 video.stop = function(){
    console.log(this);
 };
 video.stop(); //This will display the 'video' object in the console.


 // Example 2: A regular function.

 function playVideo(){
    console.log(this); 

 }
 playVideo(); //This will display the 'window' object in the console.