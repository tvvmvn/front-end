/* 
  *** Asychronous operations ***
  to handle blocking 
  such as fetching resources from a server.

  1 synchronous operations
  2 asynchronous operations
  3 realworld example
*/


// 1 Synchronous operation
// excuted when is is invoked 

// function f() {
//   console.log('foo')
// }

// f()
// console.log("bar")


// 2 Asynchronous function
// excuted at last ? 실행이 되고 결과가 도착하면 리턴한다?

// function f() {
//   setTimeout(() => {
//     console.log('foo')
//   }, 0)
// }

// f()
// console.log("bar");

// # error handling in asynchronous function 
// function f() {
//   setTimeout(() => {
//     console.log(x)
//   }, 0)
// }

// try {
//   f()
//   console.log('bar')
// } catch (err) {
//   console.error(err)
// }


// 3 real world example (fetch data from server)

// function fetchData(callback) {
//   let data = {foo: 'bar'}
  
//   setTimeout(() => {
//     callback(null, data)
//   }, 1000)
// }

// fetchData(function (err, data) {
//   try {
//     if (err) {
//       throw err;  
//     }

//     console.log('data from server:', data)
  
//   } catch (err) {
//     console.error(err)
//   }
// });

// console.log("next operations");


/* 
  *** Promise object ***
  represents status whether success or failure and results 
  of asynchronous operations.
  It is used to improve readability for asynchronous operations. 

  1 architecture
  2 realworld example
  3 async/await
*/

// 1 Architecture

// const o = new Promise((res, rej) => {
//   // success of an asynchronous operation
//   // res("foo")

//   // failure of an asynchronous operation
//   // rej("bar")
// })

// console.log(o);


// 2 Real world example 
// function fetchData() {
//   const promise = new Promise((res, rej) => {
//     res({foo: 'bar'})
//   })

//   return promise;
// }

// fetchData()
// .then(data => { 
//   console.log(data)
// })
// .catch(err => {
//   console.error(err)
// })

// console.log("next operations")


// 3 async/await

// f()
// async function f() {
//   try {
//     // to use many promises
//     const data = await fetchData();
//     console.log(data);

//     console.log('next operations');

//   } catch (err) {
//     console.error(err)
//   }
// }


