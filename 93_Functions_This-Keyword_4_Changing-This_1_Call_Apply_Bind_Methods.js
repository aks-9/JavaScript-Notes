//If we didn't have another arguement in forEach() method to pass an object for 'this' as reference.

//Solution 1: Using 'self' variable.
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        const self = this; // 'this' is referencing the video object here. So in our call back function we can save the value of 'this' in 'self', and use 'self' instead of 'this'. Because the value of 'this' changes, when a new function is called, but the value of 'self' will remain as defined.
        // Some people use 'that' instead of 'self'.
        this.tags.forEach(function(tag){
            console.log(self.title, tag);//Using self, we will always use the reference of 'this' defined in 'self' (const self = this;). Self is the original value of 'this' as it is declared in a const.

        });
    }
};

video.showTags();
//This is not the preffered approach, but is still used in many JS apps.



//Solution 2: Call, Apply, and Bind methods.

//Functions are objects in JS.
function playVideo(){
    console.log(this);

}
//Now this function is technically an object, so it has properties, and in objects we can access these properties using the dot notation. Here we've 3 methods: Call, Apply,and Bind. And with these methods we can change the value of 'this' in this playVideo() function.


playVideo.call({name:'mosh'}); // First parameter of the Call() method is 'thisArg', and 'this'  used in playVideo() will reference the object which we pass here.

playVideo(); //In contrast, if we call this function using the standard function call syntax, 'this' references the window object.



playVideo.apply({name:'mosh'}); //Just like the call method, what we pass as the first argument here, will be used as the value of 'this'. The difference is only about the way of passing multiple arguments.



function playVideo2(a,b){
    console.log(this);

}
//In call method, if we had multiple parameters in the function playVideo2(a,b), we can pass arguments normally.
playVideo2.call({name:'mosh'},1,2);


//But in apply method, we have to pass arguments as an array.
playVideo2.apply({name:'mosh'}, [1,2]);


//In Bind method, similar to call and apply, we have 'thisArg' to pass an object for 'this' for reference.
const fn = playVideo2.bind({name: 'mosh'});
fn();

//But this bind method doesn't call our playVideo2 function, instead it returns a 'new function' which we store in a const fn, and 'permanently' sets 'this' to always point to the object which we passed as an argument in 'thisArg' .

//So no matter how we call that function, 'this' will always point to the object that we have passed.

//Optionally we can directly call the returned function like this:
playVideo2.bind({name: 'mosh2'})();