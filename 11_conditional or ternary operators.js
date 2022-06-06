//The following is a multi-line comment. Any thing written in between /* and */ is treated as a comment.

/* If customer has points greater than 100,
then he is a gold type customer.
If  a customer has points less than 100,
then he is a silver type customer. */



let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);