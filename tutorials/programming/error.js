/* 
  * Error and Error Handling
  
  1 What is error
  2 Error structure
  3 Error handling
  4 Types of errors
  5 Custom error
*/


/* 
  What is error

  Error stops executing program.  
  Error must be handled
*/

console.log(foo) 
// > app crashed


/* 
  Error structure

  1 name
  2 message
  3 stack
*/

console.log(foo)
// name: ReferenceError
// message: foo is not defind
// stack: details


/* 
  Error handling 
  
  try and catch 
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
  try / catch could not handle this error.
*/
 
 try {
  
  // console.log(2022));
  
} catch (error) {
  console.error(error)
  // > SyntaxError: Unexpected token ')'
}

  
/*
  TypeError 

  An argument is not valid type.
*/

try {

  setInterval(null, 1000);

} catch (error) {
  console.error(error)
  // > TypeError: callback must be a function. Received null.
}

/* 
  Custom error

  Generate error if it's need
*/

try {
  var age = 15;

  console.log('a student:', 'Guinness, please');

  if (age < 18) {
    throw 'Too young to buy an alcohol';
  }

  // not executed
  console.log('staff:', 'Here are Guinness');

} catch (error) {
  console.error(error);
}