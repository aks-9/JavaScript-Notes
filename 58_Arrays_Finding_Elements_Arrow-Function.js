const courses = [
    {id:1, name: 'a'},
    {id:1, name: 'b'},
    {id:1, name: 'c'}
];


// const searchCourse = courses.find(function(element){
//     return element.name === 'a';
// });
// console.log(searchCourse);



//Using Arrow function instead of callback function, no need of keyword 'function'.
const searchCourse = courses.find((element) => {
    return element.name === 'a'
});
console.log(searchCourse);


//If only one argument is to be passed, remove the paranthesis from arrow function's argument.
const searchCourse2 = courses.find(element => {
    return element.name === 'b'
});
console.log(searchCourse2);


//If only one statement is in the function body, remove curly braces and 'return' keyword.
const searchCourse3 = courses.find(element => element.name === 'c'); //Read as element goes to element.name.
console.log(searchCourse3);