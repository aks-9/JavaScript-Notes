

//Factory Function
//a function that has an object defination in it, 
// it's used to create new objects.

function createCircle(radius){
    return {
        radius,        
        draw(){
        console.log("Drawing a circle");
        }
    
    };
    
}

const circle1 = createCircle(1); // creating an object called circle1.
console.log(circle1); // Displaying an object.

const circle2 = createCircle(2); //creating another object called circle2.
console.log(circle2);