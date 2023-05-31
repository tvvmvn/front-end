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
  console.log("foo");
}

f();
console.log("bar");
// > some operations
// > next operations


/*
  2 Asynchronous operation

  execute faster one at first.
*/

// pretending that it takes 1s to fetch data from server.
function fetchData(callback) {
  let data = { foo: "bar" }
  
  setTimeout(() => {
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log("data from server:", data);
});

console.log("next operations");

// > next operations
// > { foo: "bar" }











