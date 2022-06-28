//Creating an object called "post".

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [{author:'a',body:'b'},{author:'a',body:'b'}], // comments property has an array to hold 2 elements. Each element can have two properties viz. `author` and `body`.
    isLive: true //boolean value.
};

console.log(post);