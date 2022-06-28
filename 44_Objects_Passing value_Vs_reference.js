//Using a value.
x = 10;
y = x; // value of x is copied into y.
console.log('x is :', x);
console.log('y is :', y);

x = 20;

console.log('x is now:', x);//After we update the value of x, the value of x changes, but value of y doesn't change.
console.log('y is still:', y);//Value of y is independent of value of x.



//Using a reference.
x = {value:10};
y = x; 
console.log('x is :', x);
console.log('y is :', y);

x.value = 20;
console.log('x is now:', x);
console.log('y is also:', y);
/*When we use an object, that object is not stored in a variable like 'x' here. That object is stored somewhere else in the memory, and the address of that memory location is stored inside that memory variable, 'x'.

So when we copy x into y,it's the 'address' or the 'reference' that is copied. In other words, both x and y are pointing to the same object in memory. 
And when we modify each object using x,or y, our changes are 'immediately visible' to other variable.

Conclusion. Primitives are copied by value, reference types or objects are copied by, by their reference. */


let number = 10;

function increase (number){ // copying the value as arguement.
    number++;
}// scope of number inside the function ends.

increase(number);
console.log('After copying the value, number is:',number);//this will print the value of number before it was copied into the function's arguemnt.


let object = {value:10};

function increase (object){ // copying the value as an object, i.e. passing the address of value, instead of value itself.
    object.value++;
}// scope of number inside the function ends.

increase(object);
console.log('After copying the address, object is:',object);//this will print the value of number before it was copied into the function's arguemnt.