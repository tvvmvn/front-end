/* 
  * Array
  data type which can hold more than one value;

  1 Access Array
  2 Array method
  3 Loop array
*/


/* 
  1 Access array 
*/

// String array
var arr = ["foo", "bar", "baz"];

// access array
console.log(arr[0]);
// > foo

console.log(arr[1]);
// > bar

console.log(arr[2]);
// > bar

console.log(arr.length);
// > 3


/* 
  Array methods 
  perform specific operations to Array.

  1 push
  2 pop
  3 concat
  4 sort

  references
*/


// push(newItem1, newItem2, ...)
var arr = ["foo", "bar"];

arr.push("baz");

console.log(arr);
// > foo, bar, baz


// pop()
var arr = ["foo", "bar", "baz"];

arr.pop();

console.log(arr);
// > foo bar


// Array1.concat(Array2, Array3, ...) 
var arr1 = ["foo", "bar"];
var arr2 = ["baz", "duck"] 

var r = arr1.concat(arr2); 

console.log(r);
// > foo, bar, baz, duck


// Array.sort();
var arr = ["foo", "bar", "baz"];

arr.sort();

console.log(arr);
// > bar, baz, foo


/*
  Loop array

  to perform operation to array.
*/

// Perform specific operation on each item
var arr = ["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
  console.log(arr[i].toUpperCase());
}
// > FOO / BAR / BAZ


// Filtering an array
var arr = ["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
  if (arr[i][0] === "b") {
    console.log(arr[i]);
  }
}
// > bar / baz


/* 
  Q.1 Array method

  Add new beer to beer list.
*/

var beers = ["Guinness", "Heineken"];
var americanBeer = "Budwiser";

beers.push(americanBeer);

console.log(beers)
// > [Guinness, Heineken, Budwiser]


/* 
  Q.2 Array loop

  print adult ages
*/

var ages = [12, 19, 23, 30];

for (var i=0; i<arr.length; i++) {
  if (arr[i] >= 18) {
    console.log(arr[i]);
  }
}
