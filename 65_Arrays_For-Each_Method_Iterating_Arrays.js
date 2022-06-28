//Iterating an array.



//Method 1: Using For-of loop.

const numbers = [10, 20, 30];

for(let element of numbers)
console.log(element);


//Method 2: Using ForEach method with callback function.

numbers.forEach(function(element){
    console.log(element);
});

//Can optionally take a second parameter, i.e. index.
numbers.forEach(function(element, index){
    console.log(index,element);
}); 

//This can also be done via for-in loop.
for(let element in numbers)
console.log(element, numbers[element]);

//Here, numbers[element] gives us the element, and element gives us the index.





//Method 3: Using For-each method with arrow function syntax.

numbers.forEach(element => console.log(element));


//Can optionally take a second parameter, i.e. index.
numbers.forEach((element, index) => console.log(index, element)); //Here we've two parameters, so they must be passed in paranthesis.