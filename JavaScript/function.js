/*
  *** Function ***

  a block of code excuted only when it is invoked.

  1 declare function

  2 Hoisting

  5 parameter

  4 return keyword
  
  6 callback
*/



/*
  function definition

  1 function declaration
  2 function expression
  3 arrow function
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


// arrow function

var f = () => {
  console.log("foo")
}

f();
// > foo


// 2 Hoisting (게양)

f()

function f() {
  console.log("foo");
}


/* function parameter */

function add(x, y) {
  console.log('addition result:', x + y);
}

add(1, 2);
// > addition result: 3


function add(x, y) {
  return x + y;
}

var r = add(1, 2);

console.log('add result:', r);
// > add result: 3



/*
  6 callback
  function that is parameters of other function
*/


function f(callback) {
  let r = callback()
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


