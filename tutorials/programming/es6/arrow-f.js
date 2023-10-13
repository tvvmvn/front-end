/*
  Arrow function

  simpler syntax for anoymous function

  1. arrow function as callback
  2. declaration with arrow function
  3. short usage
*/


// # arrow function as callback


function f() {
  var foo = "bar";
  cb(foo);
}

// anonymous function as callback
f(function (data) {
  console.log(data)
})

// arrow function as callback
f((data) => {
  console.log(data);
})


// # declaration with arrow function 


var f = function () {
  console.log("foo");
}

var f = () => {
  console.log("foo");
}

var f = () => console.log("foo")


// # short usage


// return
var f = () => console.log("foo");

// no bracket 
var f = data => console.log(data);

