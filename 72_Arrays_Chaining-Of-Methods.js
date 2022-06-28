//Chaining of methods.

const numbers = [1,2,-1,3,4];
const filtered = numbers.filter(n => n >= 0);
const items = filtered.map( n => ({value: n}) );
console.log(items);


// Chaining allows calling one method after another in a chain.

const numbers2 = [1,2,-1,3,4];

const items2 = numbers2
 .filter(n => n >= 0)// No semicolon as it is a chain.
 .map( n => ({value: n}) ); 

console.log(items2);
 


//Multi-chaining.
const numbers3 = [1,2,-1,3,4];

const items3 = numbers3
 .filter(n => n >= 0)
 .map( n => ({value: n}) ) // returns a new array, w/o changing the orginal array.
 .filter(obj => obj.value > 1) // returns objects > 1.
 .map( obj => obj.value);

console.log(items3);
 