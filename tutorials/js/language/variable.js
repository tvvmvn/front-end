/* 

  *** variables and constant ***
  container that have values
  
  1 variables
  var let

  2 constant
  const

  3 scope of variables/contant
*/


/* var */


// declare and define
var foo = "bar";

// > foo: bar


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

// redeclare
var foo = 'bar';
var foo = 'baz';

console.log(foo);
// > baz



/* let */


// declare and define
let foo = "bar";

console.log(foo) 
// > bar


// declare and define
let foo = 'bar'
// redefine
foo = "baz"; 

console.log(foo) 
// > baz


// declare 
let foo; 
// define
foo = "bar";

console.log(foo)
// > bar


// redeclare
let foo = 'bar';
let foo = 'baz';

console.log(foo);
// > error



/* const */

// foo is always bar
const foo = 'bar'

console.log(foo) 
// > bar



/*
  scope of variables/constant

  1 global scope
  2 block scope
  3 local scope
*/


// 1 global scope
// declared outside function or block
var varInGlobal = true;


// 2 local (function) scope
// declared inside function
function f() {
  var varInFunction = true;
}


// 3 block scope
{
  var varInBlock = true;
  let letInBlock = true;
  const constInBlock = true;
} 

console.log(varInBlock)
// > true
console.log(letInBlock);
// > undefined
console.log(constInBlock);
// > undefined