/* 
speed limit is 70
5 => 1 point
Math.floor(1.3)
12 points => suspended
 */


function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint) 
    return console.log('Ok');
    
    const points = Math.floor((speed - speedLimit)/ kmPerPoint);

    
    if (points > 12) 
    console.log('License Suspended!');
    else
     console.log('Point are:', points); 
}

checkSpeed(135);



// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint){
//         console.log('Ok');
//         return; // this stops the execution here and code after this if block doesn't get executed.
//         // Helps us to remove the indentation.
//     }
     
//     const points = Math.floor((speed - speedLimit) / kmPerPoint );

//     if (points > 12)
//     console.log('License suspended');
//     else
//     console.log('Points are:', points);
    
//     }
// checkSpeed(75);