//Constructor Function

function CreateAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//To check if both objects have properties equal to one another.
function areEqual(address1,address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode; 
    
}

//To check if both objects are pointing to the exact same object, i.e. they're referencing the same object.
function areSame(address1,address2){
    return address1 === address2;
}

/*Because the following are objects, they're not stored in the variable 'address1' or 'address2'. Only the memory address of their location is passed to these variables. */

let address1 = new CreateAddress('a','b','c'); //Creating new object address1, stored somewhere in memory.

let address2 = new CreateAddress('a','b','c');//Creating another object address2, stored somewhere else in memory than address1.

let address3 = address1; //Creating a new object called address3, that has same address as earlier object address1.

console.log(areEqual(address1,address2));
//Will return true, as both their individual properties are equal.

console.log(areSame(address1,address2));
//Will return false, as they're not the same object. They're two different objects in memory.

console.log(areSame(address1,address3)); // Will return `true` as o/p. Because they're pointing to the same object in the memory.