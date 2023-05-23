/*
  *** Function ***
  a block of code excuted only when it is invoked.

  1 declare function
  2 Hoisting
  3 parameter
  4 return keyword
  5 callback
*/



/*
  declare function

  1 function declaration
  2 function expression
*/


// function declaration
function f() {
  console.log("foo")
}

f() 
// > foo


// function expression
var f = function () {
  console.log("foo")
}

f()
// > foo


/* 
  2 Hoisting (게양)

  function declaration is hoisted 
*/

f()

function f() {
  console.log("foo");
}


/*
  3 function parameter and argument 
*/

function add(x, y) {
  console.log('addition result:', x + y);
}

add(1, 2);
// > addition result: 3


/* 
  4 return 
*/

function add(x, y) {
  return x + y;
}

var r = add(1, 2);

console.log('add result:', r);
// > add result: 3



/*
  5 callback
  function argument
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


// realworld example
function getTime() {
  let time = new Date().toLocaleTimeString();
  console.log(time)
}

// setInterval(callback, ms)
// execute callback in every ms
setInterval(getTime, 1000);


/*
  Q. declare function tells that whether he/she is an adult or not
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
