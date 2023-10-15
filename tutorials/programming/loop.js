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
for (var n = 1; n <= 10; n++) {
  console.log(n + "times executed"); 
}


// get sum on 1 - 10
var sum = 0;

for (var n = 1; n <= 10; n++) {
  sum += n;
}

console.log(sum);
// > 55


/* 
while loop 
*/


// initialValue
var n = 1;

// while (condition)
while (n <= 10) {

  console.log(n + "times executed");

  // increase variable
  n++;
}


/*  
Q. get sum of 1/1, 1/2, 1/3, ... 1/10 using for loop
*/

var sum = 0;

for (var n = 1; n <= 10; n++) { 
  sum += (1/n);
}

console.log(sum);


/*
Q. get sum of 1 - 10 using while loop
*/


var n = 0;
var sum = 0

while (n <= 10) {
  sum += n;

  n++;
}

console.log(sum);

