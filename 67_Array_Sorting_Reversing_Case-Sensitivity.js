//Sorting an array.

// In ascending order.
const numbers = [2,3,1];
numbers.sort(); /* Converts the elements(Numbers & strings) of an array to string, compare them and returns an array. No need to store in a seperate array to print on console. */
console.log(numbers);
//Returns  [ 1, 2, 3 ].


//Reversing an array.
numbers.reverse(); // Reverses the order of an existing array.
console.log(numbers);



//When the elements of an array are objects.

const courses = [
    {id:1, name:'Node.js'},
    {id:2, name:'Javascript'}
];

courses.sort();
console.log(courses); // Objects won't be sorted as the elements of the array are objects.


/* To sort an array with objects, Sort method optionally takes an arguement, which is a function that is used for comparision. Here we're taking two arguement 'a' and 'b'.
 So if a < b => -1
if a > b => 1
if a === b => 0 */


courses.sort(function (a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
console.log(courses);


//If the casetype of the elements to be compared doesn't match, then sorting can't be done properly.
const courses2 = [
    {id:1, name:'Node.js'},
    {id:2, name:'javascript'}
];
courses2.sort(function (a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
console.log(courses2); /* Here javascript starts with a small case. In computer language each letter is represented in ASCII numbers, where N is 78 while 'j' is 106. So N comes first in computer language as it is less than 'j'. So to overcome this, we must first convert the casetype of each variable to be compared into same casetype. We can use toLowerCase or toUpperCase method for this purpose. */


const courses3 = [
    {id:1, name:'Node.js'},
    {id:2, name:'javascript'}
];
courses3.sort(function (a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courses3);




