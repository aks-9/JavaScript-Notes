//Solution 2: The bind method usage.
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){        
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this)); //Binding the callback function, for the value of 'this' to be used in the callback function in line console.log() in line 7. We can pass the object in bind method, which we want 'this' to reference. So we passed 'this' that is referencing the video object, to be used as the value of 'this' in console.log() in line 7.
    }
};

video.showTags();

//Solution 3: The Arrow function. (Newer and Better) 
//The good thing about arrow function is that they inherit the 'this' value.

const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){        
        this.tags.forEach(tag => console.log(this.title, tag)); 
    }
};

video2.showTags();

//No need to use bind method. Because arrow function inherits 'this' from the containing function, in this case the containing function is the method showTags(). That means whatever is the value of 'this' in showTags(), the same value will be used by arrow function.


