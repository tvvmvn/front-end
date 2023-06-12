/*
  *** Basic Methods ***
  perform specific operation on data

  1 string method
  2 number method
*/


/*
  1 string method

  toUpperCase()
  trim()
  concat()
  split()
*/


// toUpperCase()
var foo = "bar";

console.log(foo.toUpperCase());
// > BAR


// trim()
var foo = "  bar  ";

console.log(foo.trim())
// > bar


// concat()
var foo = "Hello"
var bar = "JavaScript"

var result = foo.concat(" ", bar);

console.log(result);
// > Hello JavaScript


// split()
var foo = "Hello JavaScript";

console.log(foo.split(" "));
// > [Hello, JavaScript]


/*
  2 number method

  toPrecision()
  isString()
*/


// toPrecision()
var pi = Math.PI;

var r = pi.toPrecision(50);

console.log(r)
// > 3.14...


// toString()
var n = 2023

console.log(n.toString());
// > 2023
