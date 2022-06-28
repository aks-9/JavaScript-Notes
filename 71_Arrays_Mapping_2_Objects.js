//Mapping the element of an array to an object.

const numbers = [1,2,-1,3,4];
const filtered = numbers.filter(n => n >= 0);
console.log(filtered); //Returns [ 1, 2, 3, 4 ]

//Using callback function, we're mapping each element of filtered array, to an object with a value property.
const items = filtered.map(function (n){
    const obj = {value: n};
    return obj;
});
console.log(items);

//Using arrow function. {} is used as there are multiple lines of code after arrow function.
const items2 = filtered.map( n => {
    const obj = {value: n};
    return obj;
});
console.log(items2); 
//Returns 
// 0: Object { value: 1 }​
// 1: Object { value: 2 }
// 2: Object { value: 3 } ​
// 3: Object { value: 4 }


//We're not working with that obj const, so we don't really need to define it, we can simply return it.
const items3 = filtered.map( n => {
    return {value: n};
    
});
console.log(items3);


//As we have only one line of code in arrow function, we can further shorten the code by removing the return keyword.

const items4 = filtered.map( n => {value: n});
console.log(items4);
//But this will result in an array of 'undefined' elements in output, as JS treats the {} in an arrow function as a code block by default when it parses the arrow function. But here we are defining an object, so to make JS engine understand this, we must put it in paranthesis.

const items5 = filtered.map( n => ({value: n}) );
console.log(items5);
 