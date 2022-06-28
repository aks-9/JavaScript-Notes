 // If the function is a constructor function .

  function Video2(name){ //Constructor function uses Pascal notation.
    this.name = name;
    console.log(this); 

 }

 const v = new Video2('b'); // Creating a new Video2 object.
 //This will result in a new object, instead of a window object.

 //Because when we use a 'new' operator, this creates a new empty object {}, and sets the 'this' in the constructor function to point to the {} object. So in line 11, we add a 'name' property to this empty object.

