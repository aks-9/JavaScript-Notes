/* 
Falsy values
undefined
null
''
NaN
0
false 
*/




// anything that is not falsy-> Truthy


//false || 1
// true

// false || 'Mosh'
//'Mosh'

//false || 1 || 2
// Because 1 is interpreted as truthy, expression is retuurnned as True and 2 is ignored.


// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor ;

// console.log(selectedColor);
// userColor is the preferred value.


// let defaultColor = 'blue';
// let userColor = 'yellow';
// let selectedColor = defaultColor || userColor;

// console.log(selectedColor);
// defaultColor is the preferred value.

// First color mentioned is accepted as Truthy, and second value is not prefered is also Truthy.
