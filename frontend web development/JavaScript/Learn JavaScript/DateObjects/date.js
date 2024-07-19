//date objects work with date & times. To get date we need to call the consructor Date class.
let date1 = new Date();
console.log(date1.toLocaleString());
//we are creating our new date object using the constructor in the Date class 
let date2 = new Date(2023, 0, 2, 5, 6, 50, 500);
//it converts the given date in a compact form and returns a strng.
console.log(date2.toLocaleDateString());
//it will print the exact time
console.log(date2);
let years_date2 = date2.getFullYear();
let month_date2 = date2.getMonth();
let day_date2 = date2.getDay();
let hour_date2 = date2.getHours();
let minutes_date2 = date2.getMinutes();
let seconds_date2 = date2.getSeconds();
let milliseconds_date2 = date2.getMilliseconds();
console.log(minutes_date2);
console.log(years_date2);
let date3 = new Date();
//we are setting the our new date object using the constructor in the Date class.
date3.setFullYear(2025);
//month is always set in index.
date3.setMonth(8);
date3.setDate(13);
date3.setHours(22);
date3.setMinutes(56);
date3.setSeconds(45);
date3.setMilliseconds(556);
console.log(date3.toLocaleString());