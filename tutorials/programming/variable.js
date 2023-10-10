/* 
  Variables 
  container then store value
  
  1 Basic usage
  2 Types of variable (according to scope)
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
  Types of variable

  1 Global variable
  2 Local variable
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
  Only accessible in function that a variable is declared
*/


function f() {
  var varInFunction = true;
  
  console.log(varInFunction)
  // > true  
}

console.log(varInFunction)
// > reference error

f();