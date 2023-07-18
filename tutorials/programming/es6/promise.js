/* 
  * Promise object *
  represents status whether success or failure and 
  results of asynchronous operations.
  It is used to improve readability for asynchronous operations. 

  1 Structure of promise
  1 Realworld examples
  2 async/await
*/


/*
  Structure of promise

  1 Creating Promise instance
  pass callback that has two parameters to contructor. 

  - fist parameter(resolve): invoked when success
  - second parameter(rejected): invoked wheh failure

  2 Promise status
  - fullfilled: success of operations
  - rejected: failure of operations
  - pending: wait for end of operations

  3 Promise method
  - Promise.then(): handling data when success
  - Promise.catch(): handling error when failed
  - Promise.finally(): handling final operations (not relatable with success or failure)
*/

const promise = new Promise((res, rej) => {
  res({ foo: 'bar'}); // success
}) 

promise
  .then((value) => { // success
    console.log(value)
  })
  .catch((error) => { // failed
    console.error(error);
  })


/*
  2 Realworld examples

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

// > data from server: { foo: 'bar' }


/*
  async / await

  wait for Promise object returning its results.
  improve readablility of Promise Operations.
  error handling in catch block
*/


function fetchData() {
  const promise = new Promise((res, rej) => {
    res({ foo: 'bar' })
  })

  return promise;
}

async function f() {
  try {

    const data = await fetchData(); // wait for results

    console.log("data from server:", data);

  } catch (err) {
    console.error(err)
  }
}

// > data from server: { foo: 'bar' }