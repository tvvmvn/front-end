/*
  *** ES6 (2015) ***
  Major change

  1 What's new
  > Symbol
  > Ternary
  > let, const
  > arrow function
  > Array.map() √
  > destructring √
  > spread operator √
  > Class
  > Promise
*/


/*
   *** Array.map() ***
*/

// const arr = ['foo', 'bar', 'baz'];

// const r = arr.map(function (item, index, array) {
//   return item.toUpperCase()
// })
// console.log(r);


/*
  *** Destructring assignment ***
  assign item/properties of array/object to variables with simpler syntax

  1 Array
  2 Object
*/


// 1 Array
// const arr = ['foo', 'bar', 'baz'];

// const foo = arr[0]
// const bar = arr[1]
// const baz = arr[2]
// console.log(foo)

// const [foo, bar, baz] = arr;
// console.log(foo)

// 2 Object
// const o = {foo: 'foo', bar: 'bar', baz: 'baz'}

// const foo = o.foo;
// const bar = o.bar;
// const baz = o.baz;
// console.log(foo)

// const {foo, bar, baz} = o;
// console.log(foo);

// # parameters
// const o = {foo: "foo", bar: "bar", baz: "baz"}

// f(o)

// function f(props) {
//   const foo = props.foo;
//   const bar = props.bar;
//   const baz = props.baz;

//   console.log(foo)
// }

// function f({foo, bar, baz}) {
//   console.log(foo)
// }

/*
  Q. Destructring assignment
*/

// Q1. Each item to variables
// const beers = [
//   { name: "Guinness", origin: "Ireland" },
//   { name: "Heineken", origin: "Netherlands" },
//   { name: "Budwiser", origin: "U.S" },
// ]

// const [irishBeer, dutchBeer, americanBeer] = beers;
// console.log(irishBeer);

// Q2. Each property to variable
// const irishBeer = {name: 'Guinness', origin: 'Ireland', available: false}

// const {name, origin, available} = irishBeer;
// console.log(name);

// Q3. parameter as destructing assignment
// const irishBeer = {name: "Guinness", origin: "Ireland", available: true}

// f(irishBeer)

// function f({name, origin, available}) {
//   console.log(name, origin)
// }


/* 
  *** Spread syntax ***
  make items/properties of array/object to copy easily.

  1 Array
  2 Object
*/

// 1 Array
// Array.push()
// const arr = ["foo", "bar"];
// const newItem = "baz"

// const r = [...arr, newItem]
// console.log(r)

// Array.concat()
// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const r = [...arr1, ...arr2];
// console.log(r)

/// 2 Object

// add property
// const o = {foo: "foo", bar: "bar"}
// const r = {...o, baz: "baz"};
// console.log(r)

// update property
// const o = {foo: "foo", bar: "bar", baz: "baz"};
// const r = {...o, bar: null}
// console.log(r);


/*
  Q. Spread syntax
*/

// Q. Add new beer
// const beers = [
//   { name: "Guinness", origin: "Ireland" },
//   { name: "Heineken", origin: "Netherlands" },
//   { name: "Kloud", origin: "S.Korea" },
// ]

// const japaneseBeer = { name: "Asahi", origin: "Japan" };

// const updatedBeers = [...beers, japaneseBeer];
// console.log(updatedBeers);

// Q. Irish beer is now available.
// const irishBeer = {name: "Heineken", origin: "Netherlands", available: false }
// const updatedIrishBeer = {...irishBeer, available: true};

// console.log(updatedIrishBeer);
