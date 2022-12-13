/* 
  *** Array ***

  data type which can hold more than one value;

  1 Access Array

  2 Array method
  > Array.push()
  > Array.pop()
  > Array.splice()

  3 Loop array
*/

// 1 Access Array
// let arr = ['foo', 'bar', 'baz'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.length);

// 2 Array Method

// > arr.push(newItem)
// let arr = ['foo', 'bar'];
// arr.push('baz');

// console.log(arr);

// > arr.pop()
// let arr = ['foo', 'bar', 'baz'];
// arr.pop();

// console.log(arr);

// > arr.splice(start, (count))
// let arr = ['foo', 'bar', 'baz'];
// arr.splice(1, 2);
// console.log(arr);

// 3 Loop through an array
// let arr = ['foo', 'bar', 'baz'];

// for (let i=0; i<arr.length; i++) {
//   // perform specific operation on each item of array.
//   console.log(arr[i].toUpperCase())
// }

/*
  Q. Array
*/

// Q1. Change this array to include only first 3 items.
// const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
// alphabets.splice(3)

// console.log(alphabets)

// Q2. sum on each item multiplied by 10
// let arr = [1, 2, 3];
// let sum = 0;

// for (let i=0; i<arr.length; i++) {
//   sum += (arr[i] * 10)
// }

// console.log(sum)

