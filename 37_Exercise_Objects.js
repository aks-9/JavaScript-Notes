const address = {
    street: 'Chat_street',
    city: 'Delhi',
    zipCode: 110025
};

function showAddress(object){
    for(let key in object)
    console.log(key , object[key]);
}

showAddress(address);