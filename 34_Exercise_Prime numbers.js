function showPrimes(limit){
  for (let number = 2; number <= limit; number++){

    isPrime = true;
    for(let factor = 2; factor < number; factor++){
      if(number % factor === 0){
      isPrime = false;
      break;
     }
    }

    if(isPrime)console.log(number);
  }
}

showPrimes(10);

// function showPrimes(limit){
//   for( let i = 2; i <= limit; i++)
//    if(isPrime(i)) console.log(i); 
// }

// function isPrime(i){
//   for( let j = 2; j < i; j++)
//     if( i % j === 0)
//     return false;
//   return true;  
// }

// showPrimes(20);