//Two types of strings in JS: 1)Primitive  2)Object type.


//Primitve type.
message = ' This is my first message ';
console.log(message);
//typeof message is 'string'.


//Object type.

const another = new String('Hello');
console.log(another);
//typeof another is an 'object'.


/* But when we use dot notation with a primitive type string, JS engine internally wraps it with a object type. So we can work with a primitive type, like a string object. 

There are many methods of string object.Whole list and usage on developer.mozilla.org.

Few methods of string object:
string.length = shows no. of charactors in a string.

string.index = shows character at a specific index.
*/

console.log(message[0]); //returns T
console.log(message[1]); //returns h

//string.includes = checks if a string has a specific word.
console.log(message.includes('my')); //returns True.
console.log(message.includes('not')); //returns False.

//string.startsWith = checks the string starts with a specific word or not.It is case sensitive.

console.log(message.startsWith('This')); //returns True
console.log(message.startsWith('this')); //returns False

//Similarly we've string.endsWith.
console.log(message.endsWith('e')); //returns True
console.log(message.endsWith('E')); //returns False

//string.indexOf = finds index of a character in a string.
console.log(message.indexOf('my')); //returns 8 as index.

//string.replace = replaces a specific string.
console.log(message.replace('first','second')); // shows `This is my second message`
//Note: It only returns a new string and doesn't modify the orginal string.
console.log(message); // Still prints the original message.

//string.toUpperCase
//string.toLowerCase

//string.trim = removes all the whitespaces before and after the message.
console.log(message.trim());
// string.trim(left) = removes whitespaces before the message.
// string.trim(right) = removes whitespaces after the message.


//ESCAPE NOTATION.
another1 = new String(' This is my \'first\' message ');
console.log(another1); //returns This is my 'first' message 

// For a new line in a string = \n
another2 = new String('This is my\n first message');
console.log(another2); // should return This is my
//                               first message 

// splitting the string.
another3 = new String('This is my last message');
console.log(another3.split(' ')); //splits the string into elements of an array.
//  Array(5) [ "This", "is", "my", "last", "message" ]
