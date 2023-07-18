/* 

  *** Asychronous operations ***
  It is used to prevent blocking in execution.
  e.g) fetching resources from a server.

  1 synchronous operations
  2 asynchronous operations
*/


/*
  1 Synchronous operation
  
  executed in order 
*/

function f() {
  console.log("operation 1");
}

f();
console.log("operation 2");
// > operations 1
// > operations 2


/*
  2 Asynchronous operation

  execute faster one at first.
*/

// pretending that it takes 1s to fetch data from server.
function fetchData(callback) {
  let data = { foo: "bar" }
  
  setTimeout(() => {
    callback(null, data);
  }, 1000);
}

fetchData(function (err, data) {
  if (err) {
    throw err;
  }

  console.log("data from server:", data);
});

console.log("next operations");

// > next operations
// > { foo: "bar" }











