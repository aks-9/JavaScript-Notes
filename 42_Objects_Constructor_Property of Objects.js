//Factory funciton
function makeCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }

    }
};

const circle1 = makeCircle(1);
console.log(circle1);
console.log(circle1.constructor);
/*Every object in JS, has a property called constructor.
It references to a function that was used to create that object.
In case of objects created by factory functions, this function is
the native built in library function of JS called, Object(); */



/*In case of objects created by Constructor functions,
this constructory property refers to the Constructor function itself. */

//Constructor function
function CreateCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new CreateCircle(2);
console.log(another);
console.log(another.constructor); /*constructor property of this object 
refers to function CreateCircle(radius), which is its Constructor Function. */
