 // Callback function, or Calling a Function from within a method.

 const video = {
     title: 'a',
     tags: ['a', 'b', 'c'],
     showTags(){
        this.tags.forEach(function(t){
           console.log(t);
        });
     }
 };

 video.showTags();


 //To display the title property of the video object next to each tag, let's try:
 const video2 = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags(){
      this.tags.forEach(function(t){
         console.log(this.title, t);
      });
   }
};

video2.showTags(); // This will result in 'undefined' output.
 


//If we remove the title property from this.title from line 22, we see that 'this' is referencing the window object, instead of object video2.

const video3 = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags(){
      this.tags.forEach(function(t){
         console.log(this, t);
      });
   }
};

video3.showTags(); 
//The reason is, here we are inside this callback function, which is just a regular function. It is not a method in Video3 object. The only method we have here is showTags().


//To solve this problem, the forEach() has two parameters. The first parameter is a callback function, while the second parameter is 'thisArg'. So we can pass an object in this second parameter, and 'this' in forEach() method will reference that object.
const video4 = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags(){
      this.tags.forEach(function(t){
         console.log(this, t);
      },{firstName: 'Mosh'}); //Passing an object in the second parameter of the forEach() method.
   }
};

video4.showTags();


//To display our video5 object.
const video5 = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags(){
      this.tags.forEach(function(t){
         console.log(this, t);
      },this); //Passing 'this' in the second parameter of the forEach() method. Because at this point, we're in showTags method, so 'this' references to the current video5 object. We're not inside a callback function of forEach() method anymore.
   }
};

video5.showTags();
//Now next to each tag, we can see our Video5 object with a title property, so we can add the title property now, from the forEach() method with console.log(this.title, t).


//To display our title property next to each tag.
const video6 = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags(){
      this.tags.forEach(function(t){
         console.log(this.title, t);
      },this);
   }
};

video6.showTags();

//Not all methods in JS gives you the ability to pass 'this' argument. Next section explains how to change 'this' reference for those cases.