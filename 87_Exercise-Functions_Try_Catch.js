//Exercise of error handling.


try {
  const numbers = [1,2,3,4,1,1];
  const count = countOccurences(true,1);
  console.log(count);
}
catch(e){
  console.log(e.message); //Displaying the message property of the error identifier 'e' .
}

function countOccurences(array, searchElement){
  if(!Array.isArray(array))
  throw new Error('Value is not an array.');


    return array.reduce((a,c) => {
     let occurence = (searchElement === c) ? 1 : 0;
     return a + occurence;
  },0);

}