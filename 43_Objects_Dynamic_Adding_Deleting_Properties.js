const circle = {
    radius:1

};

circle.color = 'yellow'; // Adding new dynamic properties.
circle.draw = function(){
    console.log("draw");
}

delete circle.color; // Deleting new dynamic properties.
delete circle.draw;

console.log(circle);