//for-in loop

//Declaring an object named Person
const person = {
    name: 'ash', //key:value
    age: 30
};

for( let key in person)
console.log(key, person[key]);


const colors = ['red', 'green', 'blue'];
for( let index in colors) 
console.log(index, colors[index]);