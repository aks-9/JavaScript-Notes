function showStars(rows){
  for (let row = 1; row <= rows; row++){
    let pattern = '';
    for (let i = 0; i < row; i++) /* i < row, because the loop starts from 0,
    for first row, i will be 0 and print one star. 
    For 2nd row, i will be 1 and print two stars.
    For 3rd row, i will be 2 and print three stars.
    For 4th row, i will be 3 and print four stars.
    For 5th row, i will be 4 and print five stars.

    The same can be achieved by setting i = 1; i <= row; i++
     */

     pattern += '*';
  
    console.log(pattern);
  }

}


showStars(5);