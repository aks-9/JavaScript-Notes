

function calculateGrade(marks){
  let sum = 0;

  for(let mark of marks) {
    sum += mark;
  }
    

  let average = sum / marks.length;

  if (average < 60) return 'F'; // When we use return, if the condition is true, the execution stops there.
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
  

}

const marks = [80, 80, 90, 90];

console.log(calculateGrade(marks));
