// const numbers = [1,2,1,3,1,4,1];

// const count = countOccurences(numbers,1);

// function countOccurences(array, searchElement){
//     let total = 0;
//     for(let element of array)
//      if( element === searchElement)
//       total += 1;      
//     return total;
// }

// console.log(count);


//Using the reduce method.
const numbers2 = [1,2,3,4,1];

const count2 = countOccurences(numbers2,-1);

function countOccurences(array, searchElement){
    return array.reduce((accumulator,current) => {
        const occurence = (current === searchElement) ? 1 : 0;

        console.log(accumulator, current, searchElement);
        
        return accumulator + occurence;
    
    },0);
}

console.log(count2);