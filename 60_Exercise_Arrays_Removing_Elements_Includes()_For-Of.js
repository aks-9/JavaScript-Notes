const numbers = [1,2,3,4,5];

const output = except(numbers, [1,2]);
console.log(output);

function except(array,excluded){
    const output = [];
    for(let element of array)
     if(!excluded.includes(element))
      output.push(element);
    return output;

}

/*In this function we are checking each element of the array, if it is also present in the excluded array. If it is not present, we're pushing it in the empty output array.*/


