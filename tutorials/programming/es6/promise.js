/* 
  * Promise object *
  represents status whether success or failure and 
  results of asynchronous operations.
  It is used to improve readability for asynchronous operations. 

  1 structure of promise
  1 realworld examples
  2 async/await
*/


/*
  1 structure of promise

  - Creating Promise instance
  pass callback that has two parameters to contructor. 

  fist parameter(resolve): invoked when success
  second parameter(rejected): invoked wheh failure

  - promise status
  fullfilled: success of operations
  rejected: failure of operations
  pending: wait for end of operations

  - promise method
  Promise.then(): handling data when success
  Promise.catch(): handling error when failed
  Promise.finally(): handling a block executed whether success or failure
*/

const promise = new Promise((res, rej) => {
  res({ foo: 'bar'}); // success
}) 

promise
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.error(error);
  })


/*
  2 realworld examples

  fetching data from server
*/ 


function fetchData() {
  const promise = new Promise((res, rej) => {
    res({ foo: 'bar' });
  })

  return promise;
}

fetchData()
  .then(data => { 
    console.log('data from server:', data);
  })
  .catch(error => {
    console.error(error)
  })

console.log("next operations");
// > next operations
// > data from server: { foo: 'bar' }


/*
  async / await

  wait for promise returning it results.
  improve readablility of promise.
  handling error in try/catch
*/


function fetchData() {
  const promise = new Promise((res, rej) => {
    res({ foo: 'bar' })
  })

  return promise;
}

async function f() {
  try {

    // ...
    
    const data = await fetchData(); // wait for results

    console.log(data);

  } catch (err) {
    console.error(err)
  }
}

f();
console.log('next operations');
// > next operations
// > data from server: { foo: 'bar' }