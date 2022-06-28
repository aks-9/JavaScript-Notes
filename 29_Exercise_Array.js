function countTruthy(numbers){
    counter=0;
    for( let index of numbers){
        if(index)
        counter++;
    }
    return console.log(counter);
}



const numbers = [0,1,2,3,4,'five', 6, null, NaN,undefined,false]

countTruthy(numbers);



