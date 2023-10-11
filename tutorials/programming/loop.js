/*
  *** LOOP ***

  executes a block of code multiple times.
  
  1 for loop
  2 whie loop
*/


/* 
for loop 
*/

// for (initialValue; loop condition; increase variable) 
for (var i = 1; i <= 10; i++) {
  console.log(i + "times executed"); 
}


// get sum on 1 - 10
var sum = 0;

for (var i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);
// > 55


/* 
while loop 
*/


// initialValue
var i = 1;

// while (condition)
while (i <= 10) {

  console.log(i + "times executed");

  // increase variable
  i++;
}


/*  
Q. Loop 

get sum of 1/1, 1/2, 1/3, ... 1/10 using for loop
*/

var sum = 0;

for (var i = 1; i <= 10; i++) { 
  sum += (1/i);
}

console.log(sum);


