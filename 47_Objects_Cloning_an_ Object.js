
const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
};


//1st way to copy properties of an object into another.

const another = {}; // creating an empty object.
for(let key in circle) // using a for-in loop to iterate the properties of the object circle.
another[key] = circle[key];// copying all the properties of an object called 'circle', into an empty object called 'another', one by one. There could be more than one source objects as well.

console.log(another);


//2nd way, using Object.assign method.

const another2 = Object.assign({},circle);
console.log(another2);

//First arguement in Object.assign() could be an empty object, or a pre-existing object with a pre-existing property. eg color: 'yellow'

const another3 = Object.assign({color: 'yellow'},circle);
console.log(another3);
//In this case, all properties of source object will be added into the target object. The pre-existing property will remain in target object.


//4th way, using the 'spread' operator.
const another4 = {...circle};
console.log(another4);
//Simplet way, it simply copy all properties of cicle object into another4 object.


