//Contructor function
// used to create/initialize objects.
// uses "Pascal" notation.
// uses 'this' and 'new' keywords.


function Circle(radius){
    this.radius = radius; /* 'this' keyword references an empty object. It is a reference,
    to an object that is executing this piece of code.
    We are adding a new property to an empty object {} here.
    We can use dot notation to access a property of an object.
    So on this new empty object {}, we want to add a property called radius,
    and set it to the 'radius' argument that we're passing. */
    

    this.draw = function(){
        console.log('draw');
    }// Adding a draw method to the empty object, and set it to a function.
}

const circle = new Circle(1); /* new operator is used to initialize the object.
new operator creates an empty js object. eg const x = {}.
Then it points properties created with 'this' keyword in constructor function to
point to the const x = {}, empty object.
Finally it will return the empty object from the constructo function. */




