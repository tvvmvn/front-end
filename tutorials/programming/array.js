/* 
  * Array
  data type which can hold more than one value

  1 basic usage
  2 Array method
  3 Loop array
*/


/* 
  1 basic usage

  1) access item
  2) update item
  3) get the number of item
*/


// access item

var arr = [10, 20, 30];

console.log(arr[0]);
// > 10
console.log(arr[1]);
// > 20
console.log(arr[2]);
// > 30


// update item

var arr = [10, 20, 30];

arr[2] = 40;

console.log(arr)
// > 10 20 40


// get the number of items
var arr = [10, 20, 30];

console.log(arr.length);
// > 3


/* 
  Array methods 
  perform specific operations to Array.

  1 push
  2 pop
  3 concat
  4 sort
*/


// push(newItem1, newItem2, ...)
var arr = [10, 20];

var newItem = 30;

arr.push(newItem);

console.log(arr);
// > 10, 20, 30


// pop()
var arr = [10, 20, 30];

arr.pop();

console.log(arr);
// > 10, 20


// array1.concat(array1, array2, ...) 
var arr1 = [10, 20];
var arr2 = [30, 40] 

var r = arr1.concat(arr2); 

console.log(r);
// > 10, 20, 30, 40


// Array.sort();
var arr = [10, 30, 20];

arr.sort();

console.log(arr);
// > 10, 20, 30


/*
  Loop array

  to perform operation to array.
*/


// change each item
var arr = [10, 20, 30];

for (var i=0; i<arr.length; i++) {
  console.log(arr[i] * 10);
}
// > 100 
// > 200
// > 300


// filtering an array
var ages = [12, 19, 23, 30];

for (var i=0; i<arr.length; i++) {
  if (arr[i] >= 18) {
    console.log(arr[i]);
  }
}


/* 
Q1. Add new beer to list and print them.
*/
 

var beers = ["Guinness", "Heineken"];
var americanBeer = "Budwiser";

beers.push(americanBeer);

console.log(beers)
// > Guinness, Heineken, Budwiser


/* 
Q2. print items starts with b
*/


var arr = ["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
  if (arr[i][0] === "b") {
    console.log(arr[i]);
  }
}
// > bar
// > baz

