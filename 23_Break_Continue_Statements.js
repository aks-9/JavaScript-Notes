//Break and continue statements for loops.

let i=0;
while(i<=10){
    // if(i===5) break;

    if(i%2===0){
        i++;
        continue; // execution goes back to the starting of the loop.
    }

    console.log(i);
    i++;
}

