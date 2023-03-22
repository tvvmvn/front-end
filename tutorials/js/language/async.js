/* 

  *** Asychronous operations ***
  to prevent blocking 
  such as fetching resources from a server.
  asynchronous function perform this operation

  1 synchronous operations
  2 asynchronous operations

*/


/*
  1 Synchronous operation
  
  executed in order (it is invoked)
*/

function f() {
  console.log('some operations');
}


f();
console.log("next operations");
// > some operations
// > next operations


/*
  2 Asynchronous operation

  executed as it's faster
*/


// pretending that it takes 1's to fetch data from server.
function fetchData(callback) {
  let data = { foo: 'bar' }
  
  setTimeout(() => {
    callback(null, data);
  }, 1000);
}


fetchData(function (error, data) {
  if (error) {
    return console.error(error);
  }

  console.log('data from server:', data);
});

console.log("next operations");

// > next operations
// > { foo: 'bar' }











