///Getters and Setters.



const person = {
    fName: 'Ash',
    lName: 'Singh'
};

console.log(person.fName + ' ' + person.lName);
//Displaying the name by accessing object property with dot operator and concatanating with a empty string.


console.log(`${person.fName} ${person.lName}`);
//Using a template literal with placeholders.

//If we have multiple places in our app where we need to display someone's full name, then we would be required to repeat the above template literal at multiple places. 

//A better approach will be to  define a method called fullName in the person object and define this expression there only once. Then we can simply call that method, whenever we need to display the full name of a person.

const person2 = {
    fName: 'neo',
    lName: 'anderson',
    fullName() {
    return `${person2.fName} ${person2.lName}`;        
    }
};
console.log(person2.fullName());
// Problems with this approach:

//We can't treat fullName like a property. e.g. console.log(person2.fullName);
//This is read-only i.e. we can't set the person's full name from the outside like this.
// person2.fullName = 'Rohan Rathore';


//Getter => access properties in an object. Using the 'get' keyword before defining the function.
//Setters => change/mutate properties. Using the 'set' keyword before defining the function.

//With getters we can read the person's full name like a object's property and with setters we can change the name from the outside.

const person3 = {
    fName: 'Rohan',
    lName: 'Rathore',
    get fullName() {
    return `${person3.fName} ${person3.lName}`        
    },
    set fullName(value) {
        const parts = value.split(' '); 
        this.fName = parts[0];    
        this.lName = parts[1];    
        }
};
console.log(person3.fullName);// read by accessing as a property.

person3.fullName = 'Baba Yaga'; // changing a property from the outside.
console.log(person3.fullName);// Checking for changes.

console.log(person3);


//Before changing a property, we must have access to it. So setter will access the getter which in turn will allow access to properties of an object. So we need getter to have access to properties of an object and then we need setters to be able to change that property.


