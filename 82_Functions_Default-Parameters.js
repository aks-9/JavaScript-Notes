//Default parameters in functions.


function interest(principle, rate, years){
    return principle * rate/100 * years;
}
console.log(interest(10000,3.5,5));

//Missing arguements will cause result to be NaN.
function interest2(principle, rate, years){
        return principle * rate/100 * years;
}
console.log(interest2(10000));


//Setting default values for rate and years.
function interest3(principle, rate, years){
    rate = rate || 3.5;
    years = years || 5;
    return principle * rate/100 * years;
}
console.log(interest3(10000));

//Cleaner way in ES6.
function interest4(principle, rate = 3.5, years = 5){
        return principle * rate/100 * years;
}
console.log(interest4(10000));
//Make sure that there is no parameter without a default value left, if you use this. The last parameter should always have a default value.


//This will give NaN, as years have no default value.
function interest5(principle, rate = 3.5, years){
    return principle * rate/100 * years;
}
console.log(interest5(10000));

//This will also give NaN as JS engine doesn't understand the arguement 5 is for year.
function interest6(principle, rate = 3.5, years){
    return principle * rate/100 * years;
}
console.log(interest6(10000, 5));

//We can fix it by passing 'undefined' as an arguement for rate.
function interest7(principle, rate = 3.5, years){
    return principle * rate/100 * years;
}
console.log(interest7(10000,undefined, 5));