// ### JavaScript

// # DATA TYPE
// - Number, BigInt, Boolean, Null, Undefined, String, Symbol

// ### Number
// - value: a number with or without decimals, NaN(Not a number), -Infinity, +Inifinity
// console.log(typeof 3)
// console.log(typeof 3.14)
// console.log(typeof NaN)
// console.log(typeof -Infinity)
// console.log(typeof +Infinity)
// console.log(100 / "hello");
// console.log("hello" - 1)
// console.log(2/0)
// console.log(-2/0)

// ### BigInt
// - -(2^53 - 1) ~ (2^53 - 1), 9000조
// MAX SAFE INTEGER

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

// ### String
// - value: character
// console.log(typeof "hello") 
// console.log(typeof 'hello') 
// console.log(typeof "")
// console.log(typeof "2022")

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
// const arr = ["foo", "bar"];
// arr.push("baz")
// console.log(arr);

// const arr = ["foo", "bar", "baz"];
// arr.pop()
// console.log(arr)

// const arr = ["foo", "bar", "baz"];
// const r = arr.slice(1,2); // slice(start, end), end is optional
// console.log(r);

// const arr = ["foo", "bar", "baz"];
// console.log(arr.sort());
// const arr = [20, 10, 30];
// arr.sort(function (a, b) { 
//   return a - b;
// })
// console.log(arr)

// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// Array.map: return a new array
// const arr = ["foo", "bar", "baz"];
// const r = arr.map(function (value, index, array) {
//   return value.toUpperCase()
// });
// console.log(r)

// filter
// const arr = ["foo", "bar", "baz"];
// const r = arr.filter(function (value, index) {
//   if (value === "foo") {
//     return value;
//   }
// })
// console.log(r)

// ### Object
// const o = {prop1: "foo", prop2: "bar"}
// const r = Object.keys(o);
// console.log(r)

// Q. Create a new array using slice method
  
// Q. map
// const arr = [1.2, 1.4, 1.6, 1.8]

// const r = arr.map(value => {
//   return Math.ceil(value)
// })
// console.log(r);

// Q. filter

// Q. array with object













