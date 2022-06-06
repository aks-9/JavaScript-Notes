//Logical AND
// Returns TRUE only if both operands are TRUE.
// T && T = T
// T && F = F
// F && T = F
// F && F = F




//console.log(true && true);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore ;

// console.log(eligibleForLoan);


//Logical OR
// Returns TRUE if even one of the operands is TRUE.
// T || T = T
// T || F = T
// F || T = T
// F || F = F


//console.log(false || true);

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore ;

//console.log(eligibleForLoan);

//NOT operator
//opposite of what is given.
let applicationRefused = !eligibleForLoan;
console.log('Eligible for  Loan', eligibleForLoan);
console.log('Application is Refused', applicationRefused);



