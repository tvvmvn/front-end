/* 
  * Asychronous operations 
  It is used to prevent blocking 
  e.g) when fetching resources from a server.

  1 Synchronous operations
  2 Asynchronous operations
*/


/*
  Synchronous operation
  
  code is executed in order 
*/

function f() {
  console.log("Operation 1");
}

f();
console.log("Operation 2");
// > operations 1
// > operations 2


/*
  Asynchronous operation

  Faster operation is executed ahead
*/

// Pretending that it takes 1s to fetch data from server.
function fetchData(callback) {
  setTimeout(() => {
    callback(null, "duck");
  }, 1000);
}

fetchData(function (err, data) {
  if (err) {
    throw err;
  }

  console.log("Data from server:", data);
});

console.log("Next operations");
// > next operations
// > Data from sever: duck











