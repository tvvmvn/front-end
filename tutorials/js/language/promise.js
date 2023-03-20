/* 
  *** Promise object ***
  represents status whether success or failure and results 
  of asynchronous operations.
  It is used to improve readability for asynchronous operations. 

  1 promise examples
  2 async/await
*/


// 1 promise examples

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
  .catch(err => {
    console.error(err)
  })

console.log("next operations");
// > next operations
// > data from server: { foo: 'bar' }


// 2 async/await

function fetchData() {
  const promise = new Promise((res, rej) => {
    res({ foo: 'bar' })
  })

  return promise;
}

f();

async function f() {
  try {
    
    const data = await fetchData();

    console.log(data);

    console.log('next operations');

  } catch (err) {
    console.error(err)
  }
}