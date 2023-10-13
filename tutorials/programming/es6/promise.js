/* 
  * Promise object *
  represents status whether success or failure and results 
  of asynchronous operations.
  It is used to improve readability for asynchronous operations. 

  1 Structure of promise
  2 Realworld examples
  3 async / await
*/


/*
  Structure of Promise

  1 Promise instance
  callback has two parameters - resolve and rejected

  1) resolve
  invoked when success

  2) rejected
  invoked wheh failure


  2 Promise status
  1) fullfilled
  success of operations
  
  2) rejected
  failure of operations

  3) pending
  wait for end of operations


  3 Promise method
  1) Promise.then()
  process data when success

  2) Promise.catch()
  process error when failed

  3) Promise.finally()
  process final operations that executed not relavant with success or failure
*/


// instance 
const promise = new Promise((res, rej) => {
  res({ foo: "bar"}); // success
}) 

// usage
promise
  .then((value) => { // success
    console.log(value)
  })
  .catch((error) => { // failed
    console.error(error);
  })


/*
  2 Realworld examples

  when fetching data from server
*/ 


// request data to server
function fetchData() {
  const promise = new Promise((res, rej) => {
    res("duck"); // success
  })

  return promise;
}

fetchData()
  .then(data => { 
    console.log("data from server:", data);
  })
  .catch(error => {
    console.error(error)
  })

// > data from server: duck


/*
  async / await

  Wait for Promise object returning its results.
  improve readablility of Promise
  error handling in try/catch
*/


function fetchData() {
  const promise = new Promise((res, rej) => {
    res("duck")
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

// > data from server: duck