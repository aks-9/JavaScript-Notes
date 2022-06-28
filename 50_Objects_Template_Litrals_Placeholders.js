//Normal formatting with strings.
const message = 'This is my\n' + '\'first\' message'; // + is used to concatenate the two strings together.
console.log(message);

// object litral {}
// Boolean litral true, false
// string litral '' "" 


// Template litral ``   
// Help us write cleaner code.



// No need to format with escape characters.
const another = `This is my
 'first' message`; 
console.log(another);



//Can be used for sending email in an app.
const another1 = `Hi Ash,

Thank you for joining the course!

Regards,
aks`;  
console.log(another1);

//Placeholders can be used for passing values, strings, functions.
const Uname = 'Ash';
const another2 = `Hi ${2+3} ${Uname}!

Thank you for joining the course!

Regards,
aks`;  
console.log(another2);


