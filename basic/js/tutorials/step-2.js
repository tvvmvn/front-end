
/* 
  *** Class ***
  Templates for JavaScript Objects.
  declaring name must start with uppercase letter.
*/


// ### Create an instance
// class Cat {
//   // a special method that invoked right after instance is created.
//   // it cannot return something.
//   // it is used to set initial property of instance
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// // instance
// const cat1 = new Cat("Kitty", 2);
// const cat2 = new Cat("Alfredo", 3);

// console.log(cat1)
// console.log(cat1 instanceof Cat)
// console.log(cat1.name)
// console.log(cat1.age)

// ### class property and method
// class MapoCat { 
//   constructor(name) {
//     this.name = name;
//   }
//   // class property
//   home = "Mapo-gu";
//   // class method
//   sound() {
//     return "meow";
//   }
// }

// // create MapoCat instance
// const cat = new MapoCat("Kitty");

// console.log(cat);
// console.log(cat.home); // inherited
// console.log(cat.sound()) // inherited

// Q. Create template that instantiate maltize which ...
// class SamsandongMaltez {
//   constructor(name) {
//     this.name = name;
//   }
//   color = "white";
//   sound() {
//     return "Bow wow";
//   }
// }

// Q. Create another template that own method with arguments
// class Cat {
//   constructor (name) {
//     this.name = name;
//   }
//   sound(a) {
//     return a;
//   }
// }

// const cat = new Cat("Kitty")
// console.log(cat.sound("meow"))

// ### Static property and method
// utility to Class's instance
// instance could not access static property and method

// class Cat {
//   constructor(name, months) {
//     this.name = name;
//     this.months = months;
//   }
//   // static property
//   static description = "considered full-grown at 18 months of age.";
  
//   // static method
//   static isAdult(cat) {
//     if (cat.months < 18) {
//       return "Baby cat"
//     } else {
//       return "Adult cat"
//     }
//   }
// }

// const cat = new Cat();
// Error
// console.log(cat.prop1)
// console.log(cat.method1())

// // ok
// const cat = new Cat("Kitty", 12);
// console.log(Cat.description);
// console.log(Cat.isAdult(cat));

// Q. class with static method only
// class Calculator {
//   static add(a, b) {
//     return a + b
//   }
//   static subtract(a, b) {
//     return a - b
//   }
//   static multiply(a, b) {
//     return a * b
//   }
//   static divide(a, b) {
//     return a / b
//   }
// }

// console.log(Calculator.add(1,2))

// # JavaScript Predefined class
// Text processing: String
// Number and Date: Number, Math, Date
// Indexed collections: Array
// Error objects: Error, SyntaxError, ReferenceError, ... 
// Others: Promise, JSON

// # Create predefined class's instance
// Every data is object in JavaScript
// class is a template for creating object, so instance is object.
// Object is not always seen as {key: value}

// const foo = new String("bar"); // foo is instance(object).
// const foo = "bar" // create instance using literal notation
// console.log(foo) // "bar"

// const num = new Number(2);
// const num = 2 // literal notation
// console.log(num);
// const date = new Date()
// console.log(date)

// const bool = new Boolean(true);
// const bool = true; // literal notation

// const arr = new Array("foo", "bar", "baz");
// const arr = ["foo", "bar", "baz"]; // literal notation
// console.log(arr)

// const o = new Object({foo: "bar"})
// const o = {foo: "bar"} // literal notation
// console.log(o)

// const date = new Date();
// console.log(date);

// const pi = Math.PI; // static method of Math class
// console.log(pi);

// const err = new Error("Something's broken!"); // class for all errors.
// console.log(err.name) // equal to class' name.
// console.log(err.message) // argument

// function f(data) { // user defined function
//   if (typeof data !== "string") {
//     // Create custom error using predefined class's instance
//     throw new TypeError("argument must be string type")
//   }
//   console.log("argument:",data)
// }

// try {  
//   f(2);
// } catch (err) {
//   console.error(err.name, err.message)
// }

// Q. Create custom error using built-in RangeError class's instance
// try {
//   const age = 15;

//   if(age<18) {
//     const err = new RangeError("age must be larger than 18");
//     throw err;
//   }
// } catch (err) {
//   console.error(err);
// }

// # Some properties and methods of predefined class's instance

// ### String
// const foo = "bar";
// console.log(foo.length)
// console.log(foo.toUpperCase())
// console.log(foo.split("a"))
// console.log(foo.replace('r', 'z'))

// ### Number
// const year = 2022;
// console.log(year.toString(2)) 
// console.log(year.toLocaleString())
// console.log(year.toPrecision(10))
// console.log(Number.isNaN(year)) 

// ### Math
// console.log(Math.random())
// console.log(Math.PI);
// console.log(Math.pow(2,7))
// console.log(Math.round(0.5))
// console.log(Math.ceil(0.5))
// console.log(Math.floor(0.5))
// console.log(Math.sqrt(16))
// console.log(Math.max(2, 3))
// console.log(Math.min(2, 3))

// ### Date
// const date = new Date();
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

// ### Array
// push(): push new item at last 
// const arr = ["foo", "bar"];
// arr.push("baz")
// console.log(arr);

// pop(): drop the last item
// const arr = ["foo", "bar", "baz"];
// arr.pop()
// console.log(arr)

// slice(): slice(start, end), end is optional
// const arr = ["foo", "bar", "baz"];
// const r = arr.slice(1,2); 
// console.log(r);

//  arr.sort(): sort the array
// const arr = ["foo", "bar", "baz"];
// console.log(arr.sort());
// const arr = [20, 10, 30];
// arr.sort(function (a, b) { 
//   return a - b;
// })
// console.log(arr)

// concat(): concatenate two array
// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// Q. Create a new array using slice method
// const arr = [10, 20, 30, 40]

// join(seperator): returns an array as a string
// seperator: optional. defult is comma.
// does not change the original array
// const arr = ["foo", "bar", "baz"]
// const r = arr.join(); 
// console.log(r);

// const arr = ["foo", "bar", "baz"]
// const r = arr.join(" "); 
// console.log(r);

// map(callback): return an new array
// const arr = ["foo", "bar", "baz"];
// const r = arr.map(function (value, index, array) {
//   return value.toUpperCase();
// });
// console.log(r)

// filter(callback): return an new array in condition
// const arr = ["foo", "bar", "baz"];
// const r = arr.filter(function (value, index) {
//   if (value.charAt(0) === "b") {
//     return value;
//   }
// })
// console.log(r);

// ### Object ({key: value})
// Object.keys(): return an array of object keys
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"}
// const r = Object.keys(o);
// console.log(r);

// Object.entiries(): return an array in [key, value] item
// const r = Object.entries(o);
// console.log(r)

// Q. Create an array from both beer's origins and European beers
// const beers = [
//   { name: "Heineken", origin: "Netherlands" },
//   { name: "Kloud", origin: "S.Korea" },
//   { name: "Guinness", origin: "Ireland" },
//   { name: "Asahi", origin: "Japan" },
// ]

// const origins = beers.map(beer => {
//   return beer.origin;
// })
// console.log("World Beers from", origins)

// const europeanBeers = beers.filter(beer => {
//   if (beer.origin === "Netherlands" || beer.origin === "Ireland") {
//     return beer;
//   }
// })
// console.log("Premium beers such as", europeanBeers);

/* 
  *** Destructring assignment ***
  Unpack values from arrays into distint variables.
  Unpack properties from objects into distinct variables.
*/

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


/* 
  *** Asychronous operations in JavaScript ***
  handle potential blocking operations, 
  such as fetching resources from a server.
  implemented by asynchronous function
*/

// Synchronous function: excuted when is is invoked 
// function f(callback) {
//   callback()
// }

// f(() => {
//   console.log("foo")
// })
// console.log("bar")

// Asynchronous function: excuted at last
// function f(callback) {
//   setTimeout(() => {
//     callback()
//   }, 0)
// }

// f(() => {
//   console.log("foo")
// })
// console.log("bar")

// ### real world example (fetch data from server)
// Let's check the architecture of function to fetching and handling data.

// function fetchData(callback) {
//   const o = {foo: "bar"}

//   setTimeout(() => {
//     callback(o)
//   }, 1000)
// }

// // assuming a server response in 1 seconds.
// fetchData((data) => { // handling data in callback
//   console.log("data:", data)
// })
// console.log("next operations")

// ### Error handling in fetch process
// function fetchData(id, callback) {
//   if (!id) {
//     const err = new Error("id is required")
    
//     setTimeout(() => {
//       callback(err, null)
//     }, 1000)
//     return;
//   }
  
//   const o = {foo: "bar"};

//   setTimeout(() => {
//     callback(null, o)
//   }, 1000)
// }

// // try/catch do not works in asynchronous operations, so write code instead like this:
// fetchData(null, (err, data) => { // handling data and error in callback
//   try {
//     if (err) {
//       throw err;
//     }
//     console.log("data:", data)
//   } catch (err) {
//     console.error(err);
//   }
// })

// Q. Pass an id to fetch data successfully.


/* 
  *** Promise object ***
  Promise object represents the eventual completion or failure 
  of an asynchronous operation and its resulting values.
  to improve readability for asynchronous operations. 
*/

// ### Architecture

// Create promise instance using class
// const o = new Promise((res, rej) => {
//   // res: resolved(fullfilled)
//   // completion of an asynchronous operation
//   res("foo")

//   // rej: rejected
//   // failure of an asynchronous operation
//   // rej("bar")
// })
// console.log(o);

// Create promise instance using async function
// async function f() {
//   // fullfilled
//   // return "foo"

//   // rejected
//   // throw "foo";
// }
// console.log(f())

// ### Real world example 
// async function fetchData() {
//   const o = {foo: "bar"}
//   return o;  
// }

// fetchData()
// .then(data => { // handling data 
//   console.log(data)
// })
// console.log("next operations")

// ### Error handling 
// async function fetchData(id) {
//   if (!id) {
//     const err = new Error("id is required")
//     throw err;
//   }

//   const o = {foo: "bar"}
//   return o;
// }

// fetchData(null)
// .then(data => { // handling data
//   console.log(data)
// })
// .catch(err => { // handling error
//   console.error(err)
// }) 

// ### async/await

// f()
// async function f() {
//   try {
//     const data = await fetchData(null);
    
//     // handling data
//     console.log(data);
//   } catch (err) {
//     // handling error
//     console.error(err)
//   }
// }


/* 
  *** JSON ***
  JavaScript Object Notation (표기법)
  text format to store and transfer JavaScript object
*/

// const o = {foo: "bar"}
// const json = '{"foo": "bar"}'
// console.log(o)
// console.log(json)

// const o = {foo: "bar"}
// const r = JSON.stringify(o);
// console.log(r)

// const json = '{"foo": "bar"}'
// const r = JSON.parse(json);
// console.log(r)

// Array parsing
// const arr = '[{"prop1": "foo"}, {"prop2": "bar"}]'
// const r = JSON.parse(arr)
// console.log(r)