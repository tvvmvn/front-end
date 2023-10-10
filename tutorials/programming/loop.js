/*
  *** LOOP ***

  statement that executes a block of code multiple times.
  
  1 for loop
  2 whie loop
*/


/* 
for loop 

for (initialValue; loop condition; variable change operation) 
{ 
  code to loop 
}
*/

for (var i = 1; i <= 10; i++) {
  // access variable i
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

initialValue
while (loop condition) 
{
  code to loop
  variable change operation
}
*/

// print 1 - 10
var i = 1;

while(i <= 10) {

  console.log(i + "times executed");

  i++;
}


/*  
Q. Loop 

get sum of 1/1, 1/2, 1/3, ... 1/10
using for loop
*/

var sum = 0;

for (var i = 1; i <= 10; i++) { 
  sum += (1/i);
}

console.log(sum);


