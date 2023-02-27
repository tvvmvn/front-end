/*
  *** CONDITION ***
  
  1 if condition
  2 switch 
  3 ? (ternary)
*/

/*
  1 if condition

  if (condition) {
    a block of code
    excuted if condition is true
  }
*/

// > if
// if (1 > 0) {
//   console.log("foo")
// }

// if (1 > 2) {
//   console.log("foo")
// }

// > if/else
// if (1 > 2) {
//   console.log("foo")
// } else {
//   console.log("bar")
// }

// > if/elseif/else
// var year = 2022;

// if (year === 2021) {
//   console.log("Last year")
// } else if (year === 2022) {
//   console.log("This year")
// } else if (year === 2023) {
//   console.log('Next year')
// } else {
//   console.log(".")
// }

// # condition in not boolean type
// if (true) {
//   console.log('foo');
// }

// if ('foo') {
//   console.log('bar')
// }

// if ("") { // false
//   console.log("foo")
// }

// if (null) { // false
//   console.log("foo")
// }

// if (undefined) { // false
//   console.log("bar")
// }

/*
  2 Switch
  strict equal comparison 
*/

// var year = 2022;

// switch(year) {
//   case 2021:
//     console.log('Last year');
//     break;
//   case 2022:
//     console.log('This year');
//     x = 2
//     break;
//   case 2023:
//     console.log('Next year');
//     x = 3
//     break;
//   default:
//     console.log('.');
// }

/* 
  ? (ternary)
  shorten condition statement

  condition ? value1 : value2
  if condition is true, return value 1 
  if condition is false, return value2
*/

// var year = 2022;
// console.log(year === 2022 ? 'This year' : 'Not this year');

/*
  Q. Condition
*/

// Q1. Make condition that tells he is teenager or not according to variables

// var johnAge = 20;
// if (johnAge > 13 && johnAge < 19) {
//   console.log("He is teenager")
// } else {
//   console.log("He is not Teenager")
// }

// Q2. Make condition that tells whether he/she is adult or not according to variables
// (ternary)

// var johnAge = 20;
// var r = johnAge >= 18 ? 'He is adult' : 'He is not adult';
// console.log(r)