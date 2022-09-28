// ### JavaScript

// # DATA TYPE
// - Number, BigInt, Boolean, Null, Undefined, String, Symbol

// ### Number
// double precision floating point number
// value: integer, decimals, NaN(Not a number), -Infinity, +Inifinity

// console.log(typeof 3)
// console.log(typeof 3.14)
// console.log(typeof NaN)
// console.log(typeof -Infinity)
// console.log(typeof +Infinity)
// console.log(100 / "hello");
// console.log("hello" - 1)
// console.log(2/0)
// console.log(-2/0)
// console.log(Math.PI)

// ### BigInt
// Outside safe integer -(2^53) ~ 2^53-1
// check with isSafeInteger

// ### Boolean
// - value: true or false
// console.log(typeof true) 
// console.log(typeof false)

// ### Null
// - value: null
// var x = null;
// console.log(typeof x); 

// ### Undefined
// - value: undefined
// var x;
// console.log(typeof x); 
// var x = undefined;
// console.log(typeof x)

// ### String (문자열)
// - value: character
// console.log(typeof "hello") 
// console.log(typeof 'hello') 
// console.log(typeof "")
// console.log(typeof "2022")
// console.log("I'm foo")
// console.log('I am "foo"')
// const foo = "bar";
// const char = foo[0]
// console.log(foo[0])

// ### Symbol
// const x = {}

// let id = Symbol("id");
// x[id] = 123;

// console.log(x)
// console.log(x.id)

// # OPERATOR
// - Assignment, Arithmetic, Comparison, Logical, Type, Bitwise

// ### Assignment operator
// - =, +=, -=, *=, /=, %=, **=
// var x = 1
// console.log(x)
// var x = 1;
// x += 2;
// console.log(x)

// ### Arithmetic operator
// - +, -, *, /, ++, --, **(Exponentiation), %(Modulus)
// console.log(1 + 2);
// console.log("foo " + "bar");
// console.log(2**8)
// console.log(9%2)
// var x = 0;
// x++;
// console.log(x)
// var x = 1;
// x--;
// console.log(x);

// ### Comparison operator
// returns boolean
// - ==, ===, !=, !==, >, <, >=, <=, ?

// console.log(1 == 1)
// console.log(1 == "1")
// console.log(0 == false)
// console.log(1 == true)
// console.log(null == undefined)
// console.log("" == false)
// console.log("" == 0)

// console.log(1 === "1")
// console.log(0 === false)
// console.log(null === undefined)

// console.log(1 != "1")
// console.log(0 != true)

// console.log(1 !== "1")
// console.log(0 !== false)

// ### Logical operator
// returns boolean
// &&, ||, !

// var x = 1>0 && 1<2;
// console.log(x)

// var x = 1>0 || 1<-1
// console.log(x)

// console.log(!true) // with boolean type
// console.log(!"")
// console.log(!undefined)
// console.log(!null)

// ### Type operator
// - typeof, instanceof
// console.log(typeof 0)

// ### Bitwise operator
// - &, |, ~, ^, <<, >>, >>>

// # CONDITION

// ### if/else/elseif
// if (1 > 0) {
//   console.log("foo")
// }

// if (1 > 2) {
//   console.log("foo")
// }

// if (1 > 0) {
//   console.log("foo")
// } else {
//   console.log("bar")
// }

// if (1 > 0) {
//   console.log("foo")
// } else if (1 > 2) {
//   console.log("bar")
// } else {
//   console.log("baz")
// }

// not in boolean type in condition 

// if ("") {
//   console.log("foo")
// }

// if (!"") {
//   console.log("bar")
// }

// if (null) {
//   console.log("foo")
// }

// var foo;

// if (foo) {
//   console.log("bar")
// }


// ### Switch
// strict comparison

// let result;

// switch(3) {
//   case 1:
//     result = "foo";
//     break;
//   case 2:
//     result = "bar";
//     break;
//   case 3:
//     result = "baz";
//     break;
//   default:
//     result = null;
// }

// console.log(result)

// # LOOP

// ### For
// let sum = 0;

// for (let i=1; i<=10; i++) {
//   sum += i;
// }

// console.log(sum);

// break
// for (let i=0; i<=10; i++) {
//   if (i===5) {
//     break;
//   }
//   console.log(i)
// }

// continue
// for (let i=1; i<=10; i++) {
//   if (i===5) {
//     continue;
//   }
//   console.log(i)
// }

// ### While
// let sum = 0;

// let i = 1;
// while(i <= 10) {
//   sum += i;
//   i++;
// }

// console.log(sum);

// Q. print only even value
// for (let i=2; i<=10; i++) {
//   if (i%2 === 0) {
//     console.log(i)
//   }
// }
// for (let i=2; i<=10; i+=2) {
//   console.log(i);
// }

// # FUNCTION
// a block of code excuted only when it is invoked.

// ### declare function
// function declaration
// function expression
// arrow function

// function declaration
// function f() {
//   // definition
//   console.log("foo")
// }
// f()

// function expression
// const f = function() {
//   console.log("foo")
// }
// f()

// arrow function
// const f = () => {
//   console.log("foo")
// }

// ### hoisting
// only on function declaration
// f()
// function f() {
//   console.log("foo")
// }

// ### return keyword
// function f() {
//   console.log("foo")
//   return;
//   console.log("bar")
// }

// f()

// function f() {
//   return console.log("foo");
//   console.log("bar")
// }

// f();

// ### function parameter(argument)

// f("foo");
// function f(data) {
//   console.log("argument: " + data);
// }

// function f(a, b) {
//   return a + b;
// }

// let r = f(1, 2);

// console.log(r);

// Q.
// function add(a, b) {}
// function substract(a, b) {}
// function multiply(a, b) {}
// function divide(a, b) {}

// ### callback
// function as parameter

// function f1(callback) {
//   let r = callback()
//   console.log(r)
// }

// function f2() {
//   return "foo"
// }

// f1(f2);

// anonymous function as callback
// function f(callback) {
//   let r = callback()
//   console.log(r);
// }

// f(function () {
//   return "foo"
// })

// access local variable using callback
// function f1(callback) {
//   const foo = "bar";
//   callback(foo);
// }

// function f2(data) {
//   console.log(data)
// }

// f1(f2);

// Q. Make a clock using following:
// setTimeout(callback, ms)
// let time = new Date().toLocaleTimeString()

// # VARIABLE BASIC
// declare and define variable
// var, let, const

// ### var
// var foo = "bar";
// console.log(foo)

// var foo;
// foo = "bar";
// console.log(foo);

// var foo;
// foo = "bar";
// foo = "baz";
// console.log(foo)

// var foo = "bar"
// var foo = "baz"
// console.log(foo)

// ### let and const

// # VARIABLE SCOPE
// global scope: outside block or function
// block scope: confition, loop
// function(local) scope: inside function

// ### global scope
// const foo = "bar";

// // inside function
// function f() {
//   console.log(foo)
// }
// f()


// // block (condition, loop)
// { console.log(foo) }

// // outside function or block
// console.log(foo)

// ### variable as function scope
// function f() {
//   let foo = "bar"
// }

// console.log(foo)

// ### variable as block scope
// {
//   var foo = "foo";
//   let bar = "bar";
//   const baz = "baz"
// }

// console.log(foo)
// console.log(bar)
// console.log(baz)

// # FUNCTION SCOPE
// global scope: outside block or function
// block scope: confition, loop
// function(local) scope: inside function

// Global scope
// function f() {}

// console.log(f)

// { console.log(f) }

// function x() {
//   console.log(f)
// }
// x()

// Local Scope
// function f1() {
//   function f2() {}
// }
// console.log(f2)

// Block scope
// { function f() {} }
// console.log(f)

// # Array
// an state which can hold more than one value;
// [value1, value2, ...]
// index - order of specific value in array

// ### Access Array
// let arr = [10, 20, 30];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);

// ### Update Array
// let arr = ["foo", 20, "baz"];

// // update
// arr[1] = "bar";
// // add
// arr[3] = 40;

// console.log(arr);

// ### Loop through array
// let arr = ["foo", "bar", "baz"];

// for (let i=0; i<arr.length; i++) {
//   console.log(arr[i])
// }

// Q. Create an array including number 1-10
// let arr = [];

// for (let i=0; i<10; i++) {
//   arr[i] = i+1;
// }
// console.log(arr);

// # Object
// 관련된 데이터와 함수의 집합이다
// { key: value, ...}

// Access Object
// const cat = { 
//   // property
//   name: "Kitty",
//   age: 2,
//   home: null,
//   // method: value is function
//   sound: function () {
//     return "meow";
//   }
// }

// // cat object
// console.log(cat);
// // cat's name property
// console.log(cat.name);
// // cat's age property
// console.log(cat["age"]);
// // cat's undefined property
// console.log(cat.color);
// // cat's sound method
// console.log(cat.sound());

// Update object
// const cat = { // key: value
//   name: "Kitty",
//   age: 2,
//   home: null,
//   // method: value is function
//   sound: function () {
//     return "meow";
//   }
// }

// // delete
// delete cat.age;
// // update
// cat.home = "Mapo-gu";
// // add
// cat.color = "Mixed";
// console.log(cat);

// Q. Create calculator function 
// function calc(a, b) {
//   return {
//     add: a + b,
//     substract: a - b,
//     multiply: a * b,
//     divide: a / b
//   }
// }

// let r = calc(1,2);
// console.log(r);

// # Error and Error Handling

// ### Most basic
// app crashed
// f()
// console.log("not executed")

// try {
//   // code
//   f()
// } catch (err) {
//   // exception
//   console.error(err)
// }

// ### Compile error
// try {
//   // SyntaxError
//   // SyntaxError cause compile error(parse-time error).
//   // f());
// } catch (err) {
//   console.error(err)
// }

// ### Standard Error object
// properties: name, message and stack
// type:
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError 

// Error object's properties
// try {
//   f()
// } catch (err) {
//   console.error("name:", err.name) // ReferencError
//   console.error("message:", err.message) 
//   console.error("stack:", err.stack)
// }

// RangeError
// A value is not in the set of range of allowed values
// try {
//   const pi = Math.PI;

//   console.log(pi) // 15 after floaing point.
//   // precision: 정밀도
//   console.log(pi.toPrecision(100)) // 48 after floating point.

// } catch (err) {
//   console.error(err)
// }

// ReferenceError
// when a variable that doesn't exist is referenced
// try {
//   console.log(x);
// } catch (err) {
//   console.log(err)
// }

// SyntaxError
// occurs compile error
// try {
//   console.log(2022))
// } catch (err) {
//   console.error(err)
// }

// TypeError 
// when a value is not of the expected type
// try {
//   // setTimeout(callback, ms)
//   setTimeout(null, 1000);
// } catch (err) {
//   console.error(err)
// }

// URIError
// encodeURI or decodeURI
// try {
//   decodeURI("%"); // URI malformed (abnormally formed)
// } catch (err) {
//   console.error(err)
// }

// ### Create Custom Error with custom error object
// try {
//   const foo = "baz";

//   if (foo !== "bar") {
    
//     // Created custom error object
//     const err = { 
//       name: "CustomError", 
//       message: "value must be bar" 
//     }

//     // throw custom error object
//     throw err;
//   }

//   console.log("this code is not executed")
// } catch (err) {
//   console.error("name:", err.name);
//   console.error("message:", err.message);
// }

// ### finally
// try {
//   console.log("foo")
// } catch (err) {
//   console.error(err)
// } finally {
//   // excutes whether exception or not
//   console.log(".")
// }

// Q. when 15 years old girl are trying to buy a alcohol.
// try {
//   const age = 15;

//   console.log("15 years old girl are trying to buy a alcohol.")

//   if (age < 18) {
//     throw "Error!"
//   }

//   console.log("A girl bought alcohol successfully.");
// } catch (err) {
//   console.error(err)
// }

// # Class 
// Templates for JavaScript Objects.
// declaring name must start with uppercase letter.

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

// # Destructring assignment
// Unpack values from arrays into distint variables.
// Unpack properties from objects into distinct variables.

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

// # Spread syntax
// use: ...
// make values of an array to copy easily.
// make properties of an object to copy easily.

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

// # Asychronous operations in JavaScript
// handle potential blocking operations, 
// such as fetching resources from a server.
// implemented by asynchronous function

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

// # Promise object
// Promise object represents the eventual completion or failure 
// of an asynchronous operation and its resulting values.
// to improve readability for asynchronous operations. 

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

// # JSON
// JavaScript Object Notation (표기법)
// text format to store and transfer JavaScript object

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























