
function rangeArray(min,max){
    const output = [];
    for(let i = min; i <= max; i++)
    output.push(i); // sending the value of i to empty array.

    return output;

}

const numbers = rangeArray(-4,2);
console.log(numbers);
