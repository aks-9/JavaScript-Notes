


const person3 = {
  fName: 'Mosh',
  lName: 'Hamidani',
  set fullName(value){


    if( typeof value !== 'string')
    
    throw new Error('Value is not a string');

    const parts = value.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];    
  }
};

console.log(person3.fullName);

try {
  person3.fullName = null; 
}//Here we'll recieve the exception, means this is what is causing the error. So we will wrap this in a 'try block'. It can have 1 or more statements. 1 of these statments at least, can throw an exception. After this we define a catch block.

catch (e){
  console.log(e); //Displaying the error on the console for developers. We can also use alert() for displaying to users, but it is not recommended.
   

} //In paranthesis we define an identifier, this is an error object we're throwing in line 16 above.

console.log(person3.fullName);


//What if we pass an empty string, instead of null?

const person4 = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullname(){
    return ` ${person.firstName} ${person.lastName} `;

  },
  set fullName(value) {
    if(typeof value !== 'string') 
    throw new Error('Value is not a string.');

    const parts = value.split(' ');

    if(parts.length !== 2)
    throw new Error('Enter a first and last name.')

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
try {
  person4.fullName = ''; //We'll get undefined as output. So we will check if the value passed has a length =2. And then throw another exception line 55.

}
catch(e) {
  alert(e); 
}

console.log(person4);
//So basically when we throw an exception, the lines after the throw statements are not executed. It will jump out of this method, and the control will move to the catch block, where we catch the exception and do something with it, like displaying to user or developers.