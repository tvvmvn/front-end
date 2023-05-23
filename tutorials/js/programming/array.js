/* 
  *** Array ***

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

// update
arr[2] = "BAZ"

console.log(arr[2]);
// > Baz

// add
arr[3] = "lol"
console.log(arr[3]);
// > duck



/* 
  2 Array methods 
  perform specific operations to Array.

  Array.push()
  Array.pop()
  Array.concat()
  Array.sort()

  W3Schools references
*/


// Array.push(newItem1, newItem2, ...)
var arr = ["foo", "bar"];

arr.push("baz");

console.log(arr);
// > foo, bar, baz


// Array.pop()
var arr = ["foo", "bar", "baz"];

arr.pop();

console.log(arr);
// > foo bar


// Array1.concat(Array2)
var arr1 = ["foo", "bar"];
var arr2 = ["baz", "lol"]

var r = arr1.concat(arr2);

console.log(r);
// > foo, bar, baz


// Array.sort();
var arr = ["foo", "bar", "baz"];

arr.sort();

console.log(arr);
// > bar, baz, foo



/*
  Loop through array

  perform operation to array.
*/


// perform specific operation on each item
var arr = ["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
  console.log(arr[i].toUpperCase());
}


// filtering an array
var arr = ["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
  if (arr[i][0] === "bar") {
    console.log(arr[i]);
  }
}


/*
  Q. Array
*/


// 1 Array method
// Add new beers to european beers.
var beers = ["Guinness", "Heineken"];
var americanBeer = "Budwiser";

beers.push(americanBeer);

console.log(beers)
// > [Guinness, Heineken, Budwiser]



// 2 Array loop
// print adult ages
var ages = [12, 19, 23, 30];

for (var i=0; i<arr.length; i++) {
  if (arr[i] >= 18) {
    console.log(arr[i]);
  }
}
