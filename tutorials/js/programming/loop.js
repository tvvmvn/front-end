/*
  *** LOOP ***

  execute a block of code multiple times.
  
  1 for loop
  2 whie loop
*/


/* for loop */

// execute a block of code in 10 times
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


/* while loop */

// print 1 - 10
var i = 1;

while(i <= 10) {

  console.log(i + "times executed");

  i++;
}


/*  Q. Loop */

// get sum numbers of 1/1, 1/2, 1/3, ... 1/10
var sum = 0;

for (var i = 1; i <= 10; i++) { 
  // Answer: sum += (1/i);
}

console.log(sum);


