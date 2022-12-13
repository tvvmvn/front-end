/*
  *** Function ***
  a block of code excuted only when it is invoked.

  1 declare function
    > function declaration
    > function expression and arrow function
  2 Hoisting
  3 Global variable and local variable
  4 return keyword
  5 parameter
  6 callback
*/

// 1 declare function
// > function declaration

// function f() {
//   console.log("foo")
// }
// f()

// > function expression
// assign anonymous function to variable
// const f = function () {
//   console.log("foo")
// }
// f()

// > arrow function
// const f = () => {
//   console.log("foo")
// }
// f();

// 2 Hoisting

// # works on function declaration
// f()
// function f() {
//   console.log("foo")
// }

// f()
// const f = () => {
//   console.log('foo')
// }

// 3 Global and local(function) variables

// > global variables
// declaration outside function
// const foo = 'bar'

// function f() {
//   console.log(foo)
// }
// f()

// > local variable
// function f() {
//   // declaration inside function
//   const foo = 'bar'
// }
// f()

// console.log(foo);

// 4 function parameter

// function add(x, y) {
//   console.log(x + y);
// }

// add(1, 2);

// 5 'return' keyword on function
// function add(x, y) {
//   return x + y;
// }

// const r = add(1, 2);
// console.log(r);

// function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     return 'argument must be number type';
//   }
//   // not executed
//   return x + y;
// }

// let r = add(1, null)
// console.log(r);

/*
  6 callback
  function that is parameters of other function
*/

// function f(callback) {
//   let r = callback()
//   console.log(r)
// }

// function cb() {
//   return "foo"
// }

// f(cb);

// # anonymous function as callback
// function f(callback) {
//   let r = callback()
//   console.log(r);
// }

// f(function () {
//   return "foo"
// })

// # Clock with callback
// setInterval(callback, ms)

// function getTime() {
//   let time = new Date().toLocaleTimeString();
//   console.log(time)
// }
// setInterval(getTime, 1000);

/* 
  Q. Function
*/

// Q1. Create function to tell whether a person is adult or not according to arguments.
// function also has to have condition that is only accepting number type argument.

// function isAdult(age) {
//   if (typeof age !== 'number') {
//     return 'argument must be number type'
//   }

//   if (age >= 18) {
//     return 'He/she is Adult'
//   } else {
//     return 'He/she is not adult'
//   }
// }

// let r = isAdult(20)
// console.log(r)
