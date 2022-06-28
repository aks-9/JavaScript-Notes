const movies = [
    {title:'a', year: 2018, rating: 4.5},
    {title:'b', year: 2018, rating: 4.7},
    {title:'c', year: 2018, rating: 3},
    {title:'d', year: 2017, rating: 4.5}
];

// year = 2018.
// Rating > 4.
//Descending order.
//Sort and display by title.

const titles = movies
 .filter(m => m.year === 2018 && m.rating >= 4)// year is a property of an object in movies array. 'm' is the arguement passed in arrow function, so we can access the array properties using the dot notation via 'm'. 
 .sort((x,y)=> (x.rating - y.rating))// sort method only works for numbers and strings by default. For objects we need to provide a comparision function. 
    //  x > y => -1
    //  x === y => 0
    //  x < y => 1 

    // we could also optionally use if statements for the above logic. 
// .sort((x,y)=> {if (x >y) return -1;
//         if (x === y) return 0;
//         if (x < y) return 1;})
 .reverse() 
 .map(m => m.title)


 console.log(titles);

