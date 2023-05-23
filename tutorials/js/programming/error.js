/* 
  *** Error and Error Handling ***
  
  1 What is error
  2 Error handling
  3 Types of errors
  4 Custom errors
*/


/* 
  1 What is error

  error stops executing program.  
  error must be handled
*/


console.log(foo) 
// > ReferenceError: foo is not defined.
// > app crashed


/* 
  2 Error handling 
  try / catch 
*/

try {

  // ...
  
  console.log(x);

} catch (error) {
  console.error(error);
}



/* 
  3 types of error
  
  SyntaxError
  ReferenceError

  TypeError
  RangeError
  URIError 
*/


/* 
  ReferenceError
  when refer a variable that doesn't exist 
*/

console.log(x)
// > ReferenceError: x is not defined.


/*
  SyntaxError
  Syntax is wrong. It makes compile error
  try/catch could not handle compile error.

  * compile error: compiler couldn't understand your code.
*/

// console.log(2022));
// > SyntaxError: unexpected token ')'

  
/*
  TypeError 
  when a variable or parameter is not valid type.
*/

setInterval(null, 1000);
// > TypeError: callback must be a function. Received null.


/*
  RangeError
  A value is not in the set of range of allowed values
*/

let pi = Math.PI;

console.log(pi.toPrecision(200)) 
// > toPrecision() argument must be between 1 and 100


/*
  URIError
  encodeURI() or decodeURI() are passed invalid parameters.
*/

console.log(decodeURI('%')); 
// > URIError: URI malformed


/* 
  4 Custom Error 

  generate error if need it
*/

try {
  let age = 15;

  console.log('a student:', 'Guinness, please');

  if (age < 18) {
    // throw custom error
    throw 'Too young to buy an alcohol';
  }

  // not executed
  console.log('staff:', 'Here are Guinness');

} catch (error) {
  console.error('failed to buy an alcohol:', error)
}