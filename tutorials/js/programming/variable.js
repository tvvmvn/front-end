/* 
  *** variables ***
  a container that store values
  
  1 basic usage
  2 scope 
*/


// 1 basic usage

// declare and define
var foo = "bar";

console.log(foo);
// > bar


// declare and define
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
  2 type of variable 

  global variables
  local variables
*/


// 1 global variable
// declared outside function. accessible from anywhere in source code

var varInGlobal = true;

console.log(varInGlobal);
// > true;


// 2 local variable
// declared inside function. only accessible in function

function f() {
  var varInFunction = true;

  console.log(varInFunction)
  // > true  
}

console.log(varInFunction)
// > ReferenceError
