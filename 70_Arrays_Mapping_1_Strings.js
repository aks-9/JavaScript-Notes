//Mapping an Array.

const numbers = [1,2,-1,3,4];

//Filtering all the positive numbers.
const filtered = numbers.filter(n => n >= 0);
console.log(filtered); //Returns [1,2,3,4]

//Mapping the elements of the filtered array to a string to get an HTML markup code.  
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items); // This returns an array[ "<li>1</li>", "<li>2</li>", "<li>3</li>", "<li>4</li>" ]

//The elements of the returned array are then joined with an empty character and concatenated with <ul> html code.
const html = '<ul>' + items.join('') + '</ul>'; 
console.log(html); //This returns <ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>


