/* 
  * Error and Error Handling
  
  1 What is error
  2 Error handling
  3 Types of errors
  4 Exceptions
*/


/* 
  What is error

  Error stops executing program.  
  Error must be handled
*/

console.log(foo) 
// > app crashed


/* 
  Error handling 
  
  try / catch 
*/

try {

  // ...
  
  console.log(x);

} catch (error) {
  console.error(error);
}


/* 
  Types of errors
  
  1 SyntaxError
  2 ReferenceError
  3 TypeError
  4 RangeError
  5 URIError 
*/


/* 
  ReferenceError

  when refer a variable that doesn't exist 
*/

try {

  console.log(x)
  
} catch (error) {
  console.error(error)
  // > ReferenceError: x is not defined.
}


/*
  SyntaxError

  It makes compile error
  try/catch could not handle this error.
*/

try {

  // console.log(2022));
  // > app crashed

} catch (error) {
  console.error(error)
}

  
/*
  TypeError 

  A variable or parameter is not valid type.
*/

try {

  setInterval(null, 1000);

} catch (error) {
  console.error(error)
  // > TypeError: callback must be a function. Received null.
}

/*
  RangeError

  value is out of allowed range.
*/

try {

  let pi = Math.PI;

  console.log(pi.toPrecision(200)) 

} catch (error) {
  console.error(error)
  // > toPrecision() argument must be between 1 and 100
}  


/*
  URIError

  Passed invalid args to encodeURI() or decodeURI() 
*/

console.log(decodeURI('%')); 
// > URIError: URI malformed


/* 
  Exceptions

  Generate error if it's need
*/

try {
  let age = 15;

  console.log('a student:', 'Guinness, please');

  if (age < 18) {
    throw 'Too young to buy an alcohol';
  }

  // not executed
  console.log('staff:', 'Here are Guinness');

} catch (error) {
  console.error(error)
}