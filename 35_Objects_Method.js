const circle = {
    radius: 1,
    isVisible: true,
    location: {
        x: 1,
        y: 2,
    },
    draw: function(){
        console.log("draw");
    }

};

circle.draw(); // a function defined in an object is called a method.
console.log(circle.isVisible); // Displaying a property on console.