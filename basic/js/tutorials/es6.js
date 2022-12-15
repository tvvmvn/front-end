/*
  *** ES6 (2015) ***
  Major change

  1 What's new
  > let, const
  > arrow function
  > Array.map() √
  > destructring √
  > spread operator √
  > Class
  > Promise
  > Symbol
  > Ternary

  *** Destructring assignment ***
  Unpack values from arrays into distint variables.
  Unpack properties from objects into distinct variables.
*/

// # map
// const beers = [
//   {name: 'Guinness', origin: 'Ireland', available: false},
//   {name: 'Heineken', origin: 'Netherlands', available: true},
//   {name: 'Budwiser', origin: 'USA', available: true},
// ]

// const updatedBeers = beers.map(function (beer) {
//   if (beer.name==='Guinness') {
//     beer.available = true;
//     return beer;
//   }
//   return beer;
// })

// console.log(updatedBeers);

// ### Array
// unpack values from arrays into distint variables.

// const arr = ["foo", "bar", "baz"];

// const item0 = arr[0]
// const item1 = arr[1]
// const item2 = arr[2]

// console.log(item0)
// console.log(item1)
// console.log(item2)

// -
// const arr = ["foo", "bar", "baz"];
// const [item0, item1, item2] = arr;

// console.log(item0)
// console.log(item1)
// console.log(item2)

// Q. declare variables from destructing assignment from function's result.
// function calculator(x, y) {
//   return [x+y, x-y, x*y, x/y]
// }

// const [add, subtract, multiply, divide] = calculator(1,2)

// console.log("add", add)
// console.log("subtract", subtract)
// console.log("multiply", multiply)
// console.log("divide", divide)

// - Destruct array from object items
// const beers = [
//   { name: "Heineken", origin: "Netherlands" },
//   { name: "Kloud", origin: "S.Korea" },
//   { name: "Guinness", origin: "Ireland" },
//   { name: "Asahi", origin: "Japan" },
// ]

// const [DeutchBeer, KoreanBeer, IrishBeer, JapaneseBeer]
// = beers;

// console.log(IrishBeer);

// ### Object
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// const prop1 = o.prop1;
// const prop2 = o.prop2;
// const prop3 = o.prop3;

// console.log(prop1)
// console.log(prop2)
// console.log(prop3)

// -
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};
// const {prop1, prop2, prop3} = o;

// console.log(prop1)
// console.log(prop2)
// console.log(prop3)

// Destruct object in function 
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"}

// f(o)
// function f(props) {
//   const prop1 = props.prop1;
//   const prop2 = props.prop2;
//   const prop3 = props.prop3;

//   console.log(prop1)
//   console.log(prop2)
//   console.log(prop3)
// }

// -
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"}

// f(o)
// function f({prop1, prop2, prop3}) {
//   // Simpler syntax
//   console.log(prop1)
//   console.log(prop2)
//   console.log(prop3)
// }

// Q. Declare function that print following text out to destructing object:
// Guiness is originated in the brewery at Ireland.
// const irishBeer = { name: "Guinness", origin: "Ireland" }

// f(irishBeer)
// function f({ name, origin }) {
//   console.log(name + " is originated in the brewery at " + origin)
// }


/* 
  *** Spread syntax ***
  use: ...
  make values of an array to copy easily.
  make properties of an object to copy easily.
*/

// ### Array
// push()
// const arr = ["foo", "bar"];
// const r = [...arr, "baz"]
// console.log(r)

// concat()
// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const r = [...arr1, ...arr2];
// console.log(r)

// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const r = [...arr2, ...arr1]
// console.log(r)

// slice()
// const arr = ["foo", "bar", "baz"];
// // Rest element must be last element
// const [item0, ...rest] = arr;
// // console.log(rest)

// Q. Add the french beers using spread syntax
// const beers = [
//   { name: "Heineken", origin: "Netherlands" },
//   { name: "Kloud", origin: "S.Korea" },
//   { name: "Guinness", origin: "Ireland" },
// ]

// const japaneseBeer = { name: "Asahi", origin: "Japan" };

// console.log([...beers, japaneseBeer]);

/// ### Object

// update 
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};
// const r = {...o, prop2: "."}
// console.log(r);

// add
// const o = {prop1: "foo", prop2: "bar"}
// const r = {...o, prop3: "baz"};
// console.log(r)

// Q. add property to existing object using Spread syntax
// const dutchBeer = {name: "Heineken", origin: "Netherlands" }
// const r = {...dutchBeer, available: true}
// console.log(r)

// Q. Now all beers is available thanks to new delivery.
// const beers = [
//   { name: "Heineken", origin: "Netherlands", available: false },
//   { name: "Kloud", origin: "S.Korea", available: true },
//   { name: "Guinness", origin: "Ireland", available: false },
// ]

// const r = beers.map(beer => {
//   return {...beer, available: true}
// })
// console.log(r)