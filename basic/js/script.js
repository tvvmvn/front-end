// ** JavaScript Lecture

// # JavaScript 1

// # Basic
// make comments, using console

// # Data type
// string, number, boolean, undefined, null

// # Operator
// Arithmetic, Assignment, Comparison, Logical

// # Variable
// var how to use

// # Condition
// if if/else, if/elseif/else

// # Loop
// for loop

// # Object and Array

// # Function and Method

// differences between them

// Basic Method with inheritance from prototype object
// > String: toUpperCase, toLowerCase, length, Number
// > Number: toString
// > Array: length, push, pop, incluces ..., sort, forEach, map, filter, find

// Function
// function declaration and expression
// Hoisting and return keyword
// callback and anonymous function

// # Test
// make array with uppercase letter. 
// make function returning adult or children with age parameter typed string or number.
// get the cars array only on sale.

// # JavaScript DOM Basic

// # Selector
// Differences between NodeList and HTMLCollection
// getElementById, getElementsByClassName (HTMLCollection)
// querySelector, querySelectorAll (NodeList)
// parentElement, nextElementSibling, children, childNodes
// firstChild, firstElementChild, lastChild

// # Attribute
// setAttribute, getAttribute, accessing attribute(input.value ...)
// style, classList(add, remove, toggle)

// # Print
// innerHTML, textContent, createElement, appendChild

// # Event 
// addEventListener and onclick, this, e.target
// load, click, scroll, resize, ...

// # Callback
// function myFunction(cb) {
//   console.log(1)
//   cb(2)
// }

// function myCallback(data) {
//   console.log(data)
// }

// myFunction(myCallback)


// # JavaScript 2

// # ES6
// variables and scope: var/let/const and scope(global/local/function)
// arrow function: function declaration and expression, arrow function, hoisting
// other syntax: destructing/spread operator, ternary
// Asynchronous: Promise and Callback

// # Data store and transport: Cookie/LocalStorage/JSON
// JSON - JavaScript Object Notation (string)
// LocalStorage - Better than cookie (safer and more capacity to 5MB)
// Store and send data
// JSON.stringify() and JSON.parse()




// # Callback and Promise

// What is Async and Sync 

// setTimeout(() => {
//   console.log(1)
// }, 0)

// console.log(2)

// setTimeout(() => {
//   console.log(1)
//   console.log(2)
// })

// function fetchData() {
//   setTimeout(() => {
//     const users = ['bunny', 'cat', 'bird'];
//     return users;
//   })
// }

// const data = fetchData()

// console.log(data)

// function fetchData(cb) {
//   setTimeout(() => {
//     const users = ['bunny', 'cat', 'bird'];
//     cb(users)
//   })
// }

// fetchData((data) => console.log(data))

// Promise object 
// callback as parameter
// const fetchData = new Promise(res => {
//   // Async 
//   setTimeout(() => {
//     const users = ['bunny', 'cat', 'bird'];
//     res(users)
//   })
// })

// Prototype - Class

// [ state => result ]
// pending => undefine
// fullfilled => a result value
// rejected => an error object

// fetchData.then(data => console.log(data))

// # Error handling
// function fetchData(cb) {
//   setTimeout(() => {
//     const users = { username: 'bunny' };
//     const error = { message: 'user not found' };
//     cb(error, users)
//   })
// }

// fetchData((err, data) => {
//   if (err) {
//     return console.error(err)
//   }
//   console.log(data)
// })

// const fetchData = new Promise((res, rej) => {
//   setTimeout(() => {
//     const user = { username: 'bunny' }
//     const error = { message: 'user not found' }
//     rej(error)
//   })
// })

// fetchData.then(res => console.log(res), err => console.error(err))
// fetchData.then(res => console.log(res)).catch(err => console.error(err))

// Async and Await

// const fetchData = new Promise(res =>  {
//   setTimeout(() => {
//     const user = { username: 'bunny' }
//     res(user)
//   })
// })

// f()
// async function f() {
//   const user = await fetchData

//   console.log(user)
// }

// Callback and Promise Chain

// function first() {
//   setTimeout(() => {
//     console.log(1)
//   }, 400)
// }
// function second() {
//   setTimeout(() => {
//     console.log(2)
//   }, 200)
// }
// function third() {
//   setTimeout(() => {
//     console.log(3)
//   }, 400)
// }
// function fourth() {
//   setTimeout(() => {
//     console.log(4)
//   }, 300)
// }

// first()
// second()
// third()
// fourth()


// function first(cb) {
//   setTimeout(() => {
//     console.log(1)
//     cb()
//   }, 400)
// }
// function second(cb) {
//   setTimeout(() => {
//     console.log(2)
//     cb()
//   }, 200)
// }
// function third(cb) {
//   setTimeout(() => {
//     console.log(3)
//     cb()
//   }, 400)
// }
// function fourth() {
//   setTimeout(() => {
//     console.log(4)
//   }, 300)
// }

// first(() => second(() => third(fourth)))

// function first() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 400)
//   })
// }
// function second() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(2)
//       res()
//     }, 200)
//   })
// }
// function third() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(3)
//       res()
//     }, 400)
//   })
// }
// function fourth() {
//   setTimeout(() => {
//     console.log(4)
//   }, 300)
// }

// first()
// .then(second)
// .then(third)
// .then(fourth)

// function first() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 400)
//   })
// }
// function second() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(2)
//       res()
//     }, 200)
//   })
// }
// function third() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(3)
//       res()
//     }, 400)
//   })
// }
// function fourth() {
//   setTimeout(() => {
//     console.log(4)
//   }, 300)
// }

// f()
// async function f() {
//   await first()
//   await second()
//   await third()
//   fourth()
// }

