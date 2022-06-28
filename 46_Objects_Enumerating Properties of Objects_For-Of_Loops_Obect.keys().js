const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
};
//For-in looop is for objects.
for( let key in circle)
console.log(key, circle[key]); 


/*For-of loop is for arrays and maps, that are iterable.
circle is an object, so it is not iterable. */

// for ( let key of circle) 
// console.log(key);


//To make it iterable we use Object.keys(),and it returns an array. And since arrays are iterable, now we can use For-Of loop to iterate them.
for ( let key of Object.keys(circle))
console.log(key);

//Object.keys() returns a string array.

for ( let entry of Object.entries(circle))
console.log(entry); 
//Object.entries() returns each key:value pair as an array.


//We use 'in' operator, to see if a given object has a given property or method.
if ('radius' in circle)
console.log('yes');// yes output on console.
if ('color' in circle)
console.log('yes');// console stays empty.
