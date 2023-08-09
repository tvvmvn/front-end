/*
  * DATA TYPE 

  1 String
  2 Number
  3 Boolean
  4 Null
  5 Undefined
  6 BigInt
*/


/* 
  String (문자열)

  a sequence of characters. 
*/

// declare string value inside single or double quotes '', ""
var foo = "bar";

// value and type
console.log(foo); 
// > foo

console.log(typeof foo);
// > string

// access each single characters
console.log(foo[0]); 
// > b
console.log(foo[1]);
// > a
console.log(foo[2]); 
// > r

// string length
console.log(foo.length);
// > 3


/*
  Number
  
  1 type of values:
  - integer
  - decimals 
  - NaN(Not a number)
  - +Infinity
  - -Inifinity
  
  * ref
  it represent number between -(2^1024 -1) and 2^1024 - 1
*/

// Integer
var year = 2023;

console.log(year);
// > 2023
console.log(typeof year)
// > number


// Decimals
var pi = 3.14

console.log(pi);
// > 3.14


// NaN
var nan = 2 - "foo"

console.log(nan);
// > NaN


// Max value of number type
var max_value = Number.MAX_VALUE;

console.log(max_value);
// > 1.7976931348623157e+308


// Negative max value of number type
var negative_max_value = -Number.MAX_VALUE;

console.log(negative_max_value); 
// > -1.7976931348623157e+308


// Positive Infinity
var infinity = Number.MAX_VALUE * 1.1;

console.log(infinity)
// > Infinity


// Negative Infinity
var negative_infinity = -Number.MAX_VALUE * 1.1;

console.log(negative_infinity)
// > -Infinity


/*
  Boolean

  value with true or false
*/

var bool = true;

console.log(bool);
// > true
console.log(typeof bool) 
// > boolean


// Comparison operation return boolean.
console.log(1 > 0);
// > true
console.log(1 == 2);
// > false


/*
  Null
  to represent "empty"
*/

var foo = null;

console.log(foo); 
// > null
console.log(typeof foo);
// > object


/*
  Undefined
  variables that is not defined
*/ 

var x;

console.log(x); 
// > undefined

console.log(typeof x); 
// > undefined


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


