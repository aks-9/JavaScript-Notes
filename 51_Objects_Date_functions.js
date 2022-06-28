//Date Function.

const now = new Date();
const date1 = new Date('November 25 2021 23:00');
const date2 = new Date(2020,0,25,23,03,34); // 0 means January, 11 means December.

//For other formats, visit developer.mozilla.org

now.getDate(); //Get and set methods.
now.setFullYear(2059); //Changes the date to 2059 from 2021

/*
Use the following to print on console.
now.toDateString() gives "Tue Nov 25 2059"
now.toTimeString()  gives "23:12:16 GMT+0530 (India Standard Time)"
now.toISOString() gives "2059-11-25T17:41:54.419Z" 
*/
