
//Error Handling.

const person = {
  fName: 'Mosh',
  lName: 'Hamidani',
  get fullName(){
    return `${person.fName} ${person.lName}`;
  },
  set fullName(value){
    const parts = value.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];    
  }
};

console.log(person.fullName);
person.fullName = true; // This will result in error. As boolean value doesn't have a split method. Only string has it. So when the split method (line 11) in fullName function in line 10 will recieve this boolean, it will result in an error. 
// We will get similar errors if we pass 'null' or 'underfined'.
console.log(person.fullName);


//Error handling will resolve this issue. Typically, it is done at the beginning of a function or a method. This is called defensive programming. So we have to check that the values that are coming in are of right type, so we can execute our logic.





const person2 = {
  fName: 'Mosh',
  lName: 'Hamidani',
  get fullName(){
    return `${person2.fName} ${person2.lName}`;
  },
  set fullName(value){


    if( typeof value !== 'string')
    return; //Making sure that this value is a string. String must be in ''.


    const parts = value.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];    
  }
};

console.log(person2.fullName);
person2.fullName = null; 
console.log(person2.fullName);



// Throw an exception.
//To report an error we have to throw an exception.
const person3 = {
  fName: 'Mosh',
  lName: 'Hamidani',
  get fullName(){
    return `${person3.fName} ${person3.lName}`;
  },
  set fullName(value){


    if( typeof value !== 'string')
    // Instead of return; 
    throw new Error('Value is not a string'); //using a 'throw' keyword and creating a new error object. Here Error() is a constructor function. We're calling it using a 'new' operator, to create a new error object.
    

    const parts = value.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];    
  }
};

console.log(person3.fullName);
person3.fullName = null; 
console.log(person3.fullName);




// Error vs Exception.
const e = new Error(); //Here we're creating an error object as well. But this is a plain JS object. Nothing special about it.

//But the moment you throw it as an error, we refer to it as an 'exception'.
throw e;
