let person = {
    fname: 'ash',
    age:31
};
console.log(person.fname);


// Dot notation
person.fname = 'neo';

console.log(person.fname);


//Bracket notation
//used for target property at the runtime

person['fname'] = 'aks';

console.log(person['fname']);