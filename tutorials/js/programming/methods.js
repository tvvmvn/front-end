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
foo.toUpperCase();

console.log(foo);
// > BAR


// trim()
var foo = "  bar  ";
foo.trim();

console.log(foo)
// > bar


// concat()
var foo = "Hello"
var bar = "JavaScript"

var result = foo.concat(" ", bar);

console.log(result);
// > Hello JavaScript


// split()
var foo = "Hello JavaScript";

foo.split(" ");

console.log(foo);
// > [Hello, JavaScript]


/*
  2 number method

  toPrecision()
  isInteger()
  isNaN()
*/


// toPrecision()
var pi = Math.PI;

var r = pi.toPrecision(50);

console.log(r)
// > 3.14...


// isInteger()
var n = 1.2
var r = n.isInteger(n);

console.log(r)
// > false


// isNaN()
var r = Number.isNaN('foo');

console.log(r)
// > true