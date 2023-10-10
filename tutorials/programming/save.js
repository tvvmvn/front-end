/*
  BigInt
  type that represent integer outside safe integer  
  
  * safe integer
  integer that Number type is able to represent accurately.
  between -(2^53 - 1) and 2^53 - 1 (약 -9,000조 ~ 9,000조)
*/

// Max safe integer
var max_safe_integer = Number.MAX_SAFE_INTEGER;

console.log(max_safe_integer)
// > 9007199254740991


// Min safe interger
var min_safe_integer = Number.MIN_SAFE_INTEGER;

console.log(min_safe_integer)
// > -9007199254740991


// Number type cannot store accurate value of not safe integer.
var not_safe_integer = 9999999999999999;

console.log(not_safe_integer);
// > 10000000000000000


// you can declare bigint type appending "n" to number.
var bigint = 9999999999999999n;

console.log(bigint); 
// > 9999999999999999n

console.log(typeof bigint)
// > bigint