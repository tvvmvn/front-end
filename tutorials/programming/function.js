/*
  * Function
  a block of code excuted only when it is invoked.

  1 function declaration
  2 Hoisting
  3 Parameter and argument
  4 return 
  5 Callback
*/


/*
  function declaration 
*/

// declaration
function f() {
  console.log("foo")
}

// invoke
f() 
// > foo


/* 
  2 Hoisting (게양)

  function declaration is hoisted 
*/

// invoke
f()

// declaration
function f() {
  console.log("foo");
}


/*
Function parameter and argument 

1 parameters: char that represent argument in function
2 arguments: passing value to function
*/

function add(x, y) { // parameters: x, y
  console.log('result:', x + y);
}

add(1, 2); // arguments: 1, 2
// > addition result: 3


/* 
  return 

  function can return operation result.
*/

function add(x, y) {
  return x + y;
}

var r = add(1, 2);

console.log('result:', r);
// > add result: 3


/*
  Callback

  function arguments
*/

function f(callback) {
  let r = callback();

  console.log(r)
}

function cb() {
  return "foo"
}

f(cb);
// > foo


// Realworld example of callback
function getTime() {
  let time = new Date().toLocaleTimeString();
  console.log(time)
}

// setInterval(callback, ms)
// execute callback in every ms
setInterval(getTime, 1000);


/*
  Q. declare function that prints whether he/she is an adult or not
  according to age argument.
*/

function isAdult(age) {

  if (typeof age !== 'number') {
    console.log('argument type must be a number');
    return; // stop function
  }

  if (age >= 18) {
    console.log('He/she is an adult');
  } else {
    console.log('He/she is not adult');
  }
}

isAdult(20);
