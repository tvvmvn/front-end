/* 
  *** Asychronous operations ***
  handle potential blocking operations, 
  such as fetching resources from a server.
*/

// Synchronous function: excuted when is is invoked 
// function f(callback) {
//   callback()
// }

// f(() => {
//   console.log("foo")
// })
// console.log("bar")

// Asynchronous function: excuted at last
// function f(callback) {
//   setTimeout(() => {
//     callback()
//   }, 0)
// }

// f(() => {
//   console.log("foo")
// })
// console.log("bar")

// ### real world example (fetch data from server)
// Let's check the architecture of function to fetching and handling data.

// function fetchData(callback) {
//   const o = {foo: "bar"}

//   setTimeout(() => {
//     callback(o)
//   }, 1000)
// }

// // assuming a server response in 1 seconds.
// fetchData((data) => { // handling data in callback
//   console.log("data:", data)
// })
// console.log("next operations")

// ### Error handling in fetch process
// function fetchData(id, callback) {
//   if (!id) {
//     const err = new Error("id is required")
    
//     setTimeout(() => {
//       callback(err, null)
//     }, 1000)
//     return;
//   }
  
//   const o = {foo: "bar"};

//   setTimeout(() => {
//     callback(null, o)
//   }, 1000)
// }

// // try/catch do not works in asynchronous operations, so write code instead like this:
// fetchData(null, (err, data) => { // handling data and error in callback
//   try {
//     if (err) {
//       throw err;
//     }
//     console.log("data:", data)
//   } catch (err) {
//     console.error(err);
//   }
// })

// Q. Pass an id to fetch data successfully.


/* 
  *** Promise object ***
  Promise object represents the eventual completion or failure 
  of an asynchronous operation and its resulting values.
  to improve readability for asynchronous operations. 
*/

// ### Architecture

// Create promise instance using class
// const o = new Promise((res, rej) => {
//   // res: resolved(fullfilled)
//   // completion of an asynchronous operation
//   res("foo")

//   // rej: rejected
//   // failure of an asynchronous operation
//   // rej("bar")
// })
// console.log(o);

// Create promise instance using async function
// async function f() {
//   // fullfilled
//   // return "foo"

//   // rejected
//   // throw "foo";
// }
// console.log(f())

// ### Real world example 
// async function fetchData() {
//   const o = {foo: "bar"}
//   return o;  
// }

// fetchData()
// .then(data => { // handling data 
//   console.log(data)
// })
// console.log("next operations")

// ### Error handling 
// async function fetchData(id) {
//   if (!id) {
//     const err = new Error("id is required")
//     throw err;
//   }

//   const o = {foo: "bar"}
//   return o;
// }

// fetchData(null)
// .then(data => { // handling data
//   console.log(data)
// })
// .catch(err => { // handling error
//   console.error(err)
// }) 

// ### async/await

// f()
// async function f() {
//   try {
//     const data = await fetchData(null);
    
//     // handling data
//     console.log(data);
//   } catch (err) {
//     // handling error
//     console.error(err)
//   }
// }


