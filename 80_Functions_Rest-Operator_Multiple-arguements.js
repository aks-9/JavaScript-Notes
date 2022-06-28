//Rest Operator.
// Used to pass multiple arguements to a function.
// Rest operator(...) is used along with a parameter of a function.
// It looks like Spread operator, but it is used in functions while the Spread operator is used in arrays.

function sum(...args){ 
    console.log(args);//Here args is a real array of six elements. Rest operator takes all these elements and put them in an array.
}
console.log(sum(1,2,3,4,5,6));

//Using reduce method to add.
function sum2(...args){     
    return args.reduce((a,b) => a + b);    
}
console.log(sum2(1,2,3,4,5));

//Using multiple parameters along with Rest operator.
function sum3(discount, ...prices){ 
    console.log(prices);
    const total = prices.reduce((a,b) => a + b);
    return total*(1-discount);
}
console.log(sum3(0.5,20,30));




// Rest operator must always be the last parameter in a function declration!
// The following will give: 'Uncaught SyntaxError: parameter after rest parameter.'

// function sum4(discount, ...prices, extra){ 
//     console.log(prices);
//     const total = prices.reduce((a,b) => a + b);
//     return total*(1-discount);
// }
// console.log(sum4(0.5,20,30));
