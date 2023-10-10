/*
  * Basic Methods 
  it performs specific operation on data

  1 String method
  2 Number method
*/


/*
  String method

  1 toUpperCase
  2 indexOf
  3 trim
  4 substring

  references
*/


// toUpperCase
var foo = "bar";

console.log(foo.toUpperCase());
// > BAR


// indexOf(string to search)
var foo = "bar"

console.log(foo.indexOf("r"))
// > 2
console.log(foo.indexOf("k"))
// > -1


// trim
var foo = "  bar  ";

console.log(foo.trim())
// > bar


// substring(startIndex, endIndex)
var foo = "abcde"

console.log(foo.substring(2, 4))
// > cd


/*
  Number method

  1 toPrecision
  2 isString
*/


// toPrecision()
var pi = Math.PI;

console.log(pi)
// > 3.141592653589793

var precisePi = pi.toPrecision(50);

console.log(precisePi)
// > 3.1415926535897931159979634685441851615905761718750


// toString
var year = 2023

console.log(year.toString());
// > "2023"
