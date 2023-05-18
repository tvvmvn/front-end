/*

  *** DATA TYPE ***

  1 String
  2 Number
  3 Boolean
  4 null
  5 undefined
  6 BigInt
  
*/


/* 
  1 String (문자열)

  a sequence of characters. 
  declare string value inside single or double quotes '', ""
*/

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
  2 Number
  it represent number between -(2^1024 -1) and 2^1024 - 1
  (or 1.7976931348623157e+308)
  
  type of values:
  integer
  decimals 
  NaN(Not a number)
  +Infinity
  -Inifinity
  
  ref
  double precision floating point number
*/


// integer
var year = 2023;
console.log(year);
// > 2023
console.log(typeof year)
// > number


// decimals
var pi = 3.14
console.log(pi);
// > 3.14


// NaN
var nan = 2 - "foo"
console.log(nan);
// > NaN


// max value of number type
var max_value = Number.MAX_VALUE;
console.log(max_value);
// 1.7976931348623157e+308


// negative max value of number type
var negative_max_value = -Number.MAX_VALUE;
console.log(negative_max_value); 
// -1.7976931348623157e+308


// Positive Infinity
var infinity = Number.MAX_VALUE * 1.1;
console.log(infinity)
// > Infinity


// Negative Infinity
var negative_infinity = -Number.MAX_VALUE + 1.1;
console.log(negative_infinity)
// > -Infinity


/*
  3 Boolean
  value with true or false
*/


var bool = true;

console.log(bool);
// > true
console.log(typeof bool) 
// > boolean


// comparison operation return boolean.
console.log(1 > 0);
// > true
console.log(1 == 2);
// > false


/*
  4 Null
  to represent "empty"
*/


var foo = null;

console.log(foo); 
// > null
console.log(typeof foo);
// > object


/*
  5 Undefined
  variables that is not defined
*/ 


var x;

console.log(x); 
// > undefined

console.log(typeof x); 
// > undefined


/*
  6 BigInt
  represent integer outside safe integer  
  you can declare bigint type appending "n" to number.
  
  safe integer: between -(2^53 - 1) and 2^53 - 1
  
  약 -9,000조 ~ 9,000조
*/


// max safe integer
var max_safe_integer = Number.MAX_SAFE_INTEGER;
console.log(max_safe_integer)
// > 9007199254740991


// min safe interger
var min_safe_integer = Number.MIN_SAFE_INTEGER;
console.log(min_safe_integer)
// > -9007199254740991


// Number type cannot store accurate value of not safe integer.
var not_safe_integer = 9999999999999999;
console.log(not_safe_integer);
// > 10000000000000000


// BigInt type can store accurate value.
var bigint = 9999999999999999n;

console.log(bigint); 
// > 9999999999999999n
console.log(typeof bigint)
// > bigint



/*
  Q. Data type

  1 Range that a Number type can store
  
  2 Range of Safe integer 

  3 Data type representing invalid, empty

  4 Data type representing variabels that is not defined
*/




