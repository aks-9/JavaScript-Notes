//factory function
function createAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}
const address1 = createAddress('Capitol','Delhi',110035);
console.log(address1);



// Constructor function
function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('Fashion','Mumbai',440025);
console.log(address2);