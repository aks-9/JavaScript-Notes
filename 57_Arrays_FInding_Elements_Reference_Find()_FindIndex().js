const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'}
];

console.log(courses.includes({id:1, name:'a'})); //This returns false, because the object in the array has a different reference than the one we have searched here.



//For reference types in array, we use FIND method, which returns the first element that matches the criteria.

const findCourse = courses.find(function(element) { //In Find method, we pass as an arguement, a function called as Predicate/Callback function. And in that callback function, we pass the elements of the array we want to search.
    return element.name === 'a';    
});
//The result will be 'true' and is stored in a const 'findCourse' and then printed on console.
console.log(findCourse);


//If the result is 'false', the console will print 'undefined'.
const findCourse2 = courses.find(function(element) { 
    return element.name === 'xyz';    
});
//The result will be 'false' and 'undefined' is printed on console.
console.log(findCourse2);



//findIndex() method returns the index of the element.
const findCourse3 = courses.findIndex(function(element) { 
    return element.name === 'a';    
});
//The result will be '0' as index of 'a' is 0.
console.log(findCourse3);



const findCourse4 = courses.findIndex(function(element) { 
    return element.name === 'xyz';    
});
//The result will be '-1' as 'xyz' is not present.
console.log(findCourse4);