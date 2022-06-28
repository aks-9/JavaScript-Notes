const numbers = [1,2,3,4];

const output = move(numbers,0,2);
console.log(output);


function move(array, index, offset){
    //First we will check if out index and offset are valid or not.
    const position = index + offset;
    if ( position >= array.length || position < 0){
        return console.error('Invalid offset');
    }

    const output = [...array]; // Don't want to change the original array, so using a copy.

    const element = output.splice(index,1)[0];// Removing the element. Because splice method returns an array, which has only one element. To access that element, we use its index value of [0];
    output.splice(index + offset, 0, element); //Adding the element removed from the output array. index + offset is used because we want to put the element at a new place.
             
    return output;    

    }