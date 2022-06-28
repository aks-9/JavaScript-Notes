//To remove an element from the end.
const numbers = [1,2,3,4,5];
const last = numbers.pop();
console.log('Removed:',last,'from',numbers);

//To remove an element from the beginning.
const numbers1 = [1,2,3,4,5];
const first = numbers1.shift();
console.log('Removed:',first,'from',numbers1);

//To remove an element from the middle.
const numbers2 = [1,2,3,4,5];
const middle = numbers2.splice(2,1);//First arguement in splice() represents the index of the element that you want to remove.The second arguement represents the number of elements you want to remove, starting from the first arguement.
console.log('Removed:',middle,'from',numbers2);

//To remove multiple elements from the middle.
const numbers3 = [1,2,3,4,5];
const middle1 = numbers3.splice(2,2);//This removes two elements starting from index=2.
console.log('Removed:',middle1,'from',numbers3);

//Note that spliced method returns as array, so by using the splice method, the removed elements are stored in a new array eg. middle = [3];  and middle1 = [3,4];