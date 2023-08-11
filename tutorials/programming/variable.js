/* 
  Variables 
  store value
  
  1 Basic usage
  2 Global variable and local variable
*/


/*
Basic usage
*/

// declare and define
var foo = "bar";

console.log(foo);
// > bar


// declare and redefine
var foo = 'bar'
// redefine
foo = "baz"; 

console.log(foo) 
// > baz


// declare 
var foo; 
// define
foo = "bar";

console.log(foo) 
// > bar


/*
  Global variables and local variables
*/


/*
  Global variable
  
  Declared outside function. 
  Accessible from anywhere in source code
*/


var varInGlobal = true;

console.log(varInGlobal);
// > true;


/*
  Local variable
  
  Declared inside function. 
  Only accessible in that function
*/

function f() {
  var varInFunction = true;
  
  console.log(varInFunction)
  // > true  
}

f()

console.log(varInFunction)
// > ReferenceError
