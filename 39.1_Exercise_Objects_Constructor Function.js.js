
//Avoid passing too many parameters in a function.
function Post(title, body ,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];//Empty array.
    this.isLive = false;

}

let post = new Post('a','b','c');
console.log(post);