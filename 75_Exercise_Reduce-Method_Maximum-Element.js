const numbers = [1,2,9,3,8,4,5];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    if(array.length === 0)
     return undefined;


    // My implementation:
    // let maximum = 0;
    // const sorted = array.sort();
    // console.log(sorted);
    // for( let n of array)
    //  maximum = n+1 < n ? n+1 : n;
    //  return maximum; 

    //Using for loop.
    // let max = array[0];
    // for( let i=1; i< array.length; i++)
    //   if(array[i] > max)
    //   max = array[i];
    //   return max;

    return array.reduce((a,c) => {
        if( c > a) return c;
        return a; 
    });

    /* a is set to first element of the array, as no second parameter is passed in reduce method. Now we just need to check if a>c, then return a, otherwise return c. */
}



//Shortening the code.
const max2 = getMax2(numbers);

console.log(max2);

function getMax2(array){
    if(array.length === 0)
     return undefined;

    return array.reduce((a,c) =>  (c > a) ? c : a );
    
}
/* Any time you have an array of values, and you want to get a single value as a result of iterating that array, think of reduce method. */
