/*
  *** CONDITION ***
  
  1 if condition
  2 switch condition
  3 ? (ternary) condition

  W3S references
*/


/*
  1 if condition

  if (condition) {
    a block of code excuted if condition is true
  }

*/


var year = 2023

if (year === 2023) {
  console.log('This year')
}
// > This year


if (year === 2023) {
  console.log('This year')
} else {
  console.log('Not this year')
}
// > This year


if (year === 2022) {
  console.log('Last year')
} else if (year === 2023) {
  console.log('This year')
} else if (year === 2024)  {
  console.log('Next year')
} else {
  console.log('Not close year');
}
// > This year



/*
  2 Switch
  perform strict equal comparison operation.
*/

var year = 2023;

switch(year) {
  case 2022:
    console.log('Last year');
    break;

  case 2023:
    console.log('This year');
    break;

  case 2024:
    console.log('Next year');
    break;

  default:
    console.log('not close year');
}

// > This year


/* 
  ? (ternary)

  condition ? value1 : value2
  
  if true, return value 1 
  if false, return value 2
*/

var year = 2023;

console.log(year === 2023 ? 'This year' : 'Not this year');
// > This year



/*
  Q. Condition
*/

// Q1. Make conditional statements that tells he is teenager or not according to variables

var age = 20;

// if/else condition
if (age >= 18) {
  console.log("He is an adult.")
} else {
  console.log("He is not an adult.")
}
// > he is an adult


// ternary condition
var r = age >= 18 ? 'He is an adult' : 'He is not an adult';

console.log(r)
// > he is an adult