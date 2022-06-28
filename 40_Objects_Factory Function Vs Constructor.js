//Factory function
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('drawing 1');
        }

    }
}
const circle1 = createCircle(1);
circle1.draw();


//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('drawing 2');
    }
}

const circle2 = new Circle(1);
circle2.draw();
