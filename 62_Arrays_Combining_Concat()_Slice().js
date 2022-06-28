// 1. Combining the arrays using concat() method.

const first = [1,2,3,];
const second = [4,5,6];

const combined = first.concat(second); // Returns a new array [1,2,3,4,5,6]


// Concat method returns an array, which is the combination of first and second arrays. 

//The first and second arrays remain unaffected.

console.log(combined);


// 2. Slicing the arrays using slice() method.
const combined1 = [1,2,3,4,5,6];
const slice = combined1.slice(1,5);// Returns [ 2, 3, 4, 5 ]. Last index is not included in output.
console.log(slice);

const combined2 = [1,2,3,4,5,6];
const slice2 = combined2.slice(2);// Returns all elements from orginal array starting from the given index.  [ 3, 4, 5, 6 ]
console.log(slice2);

const combined3 = [1,2,3,4,5,6];
const slice3 = combined3.slice();// Returns a copy of the original array. [ 1, 2, 3, 4, 5, 6 ]
console.log(slice3);



//NOTE: Primitive values will be copied into the target array. 
// If you've objects in your array, the objects themselves are not copied, but their references are copied. And that means that the  elements in both input and output arrays will point to the same objects.

const first4 = [{id:1}];
const second4 = [4,5,6];

const combined4 = first4.concat(second4); 
//When we call the concat method, the object is not copied into the combined4 array, only the object's reference is copied.
 
first4[0].id = 10; // Therefore the changing of the object's id by using the dot method, will reflect in combined4 and slice4 arrays as well.

const slice4 = combined4.slice();

console.log(combined4);
console.log(slice4);
