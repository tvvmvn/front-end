// console.log('Hello JavaScript!');

/*
  *** DATA TYPE *** 
  String, Number, Boolean, Null, Undefined, BigInt, Symbol
*/

/* 
  1 String (문자열)
  a sequence of characters. inside single or double quotes '', ""
*/

// console.log('foo') 
// console.log("foo") 
// console.log(typeof 'foo')
// console.log('foo bar')
// console.log("")
// console.log("2022")

// # access each single characters
// var foo = 'bar';
// console.log(foo[0])
// console.log(foo[1])
// console.log(foo[2])
// console.log(foo.length);

/*
  2 Number
  it represent number between -(2^1024) and +(2^1024)
  its value can be integer, decimals, NaN(Not a number), +Infinity, -Inifinity
  
  ref
  double precision floating point number
*/

// console.log(2022)
// console.log(typeof 2022)
// console.log(3.14)
// console.log(0)
// console.log(-2)
// console.log(2-'foo');
// console.log(-Number.MAX_VALUE);
// console.log(Number.MAX_VALUE);

/*
  3 Boolean
  represent true or false
*/

// console.log(true) 
// console.log(false)
// console.log(typeof true)
// console.log(1>0)

/*
  4 Null
  to represent 'empty', invalid' 
*/

// console.log(null); 
// console.log(typeof null);
// var foo = null;
// console.log(foo);
// var homeForstreectCats = null;

/*
  5 Undefined
  when variables is not defined
*/ 

// console.log(undefined)
// var x;
// console.log(x); 
// console.log(typeof x); 

/*
  6 BigInt
  represent integer outside safe integer  -(2^53-1) ~ +(2^53-1)
  약 -9,000조 ~ 9,000조
*/

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER) 
// console.log(9999999999999999) // Number type
// console.log(9999999999999999n) // BigInt
// console.log(typeof 9999999999999999n) 

/*
  7 Symbol (ES6)
  represent unique hidden identifier
*/

// const x = {id: 'foo'}

// let id = Symbol("id");
// x[id] = 'bar';

// console.log(x)
// console.log(x.id)


/*
  Q. Data type

  1 Range of type Number
            [?]                   [?]
  -Infinity <---------- 0 ----------> +Infinity

  2 Range of Safe integer 
              [?]                   [?]
  Big integer <---------- 0 ----------> Big integer

  3 Data type representing invalid, empty

  4 Data type representing not defined
*/


/*
  *** OPERATOR ***
  1 Arithmetic operator
  2 Assignment operator
  3 Comparison operator
  4 Logical operator
  5 Type operator
  6 Bitwise operator
*/

/*
  1 Arithmetic operator
  +, -, *, /, 
  ++(Increment), --(Decrement)
  **(Exponentiation), %(Modulus, Division remainder)
*/

// > four arithmetic operation
// console.log(1 + 1);
// console.log('foo' + ' bar')
// console.log(1 + 'foo')
// console.log(2*2)
// console.log(3/2)

// > Increment and decrement
// var x = 1;
// x++;
// console.log(x)
// var x = 1;
// x--;
// console.log(x);

// > Exponentiation and Modulus(Devision remainder)
// console.log(2**7)
// console.log(5%2)

/*
  2 Assignment operator
  =, +=, -=, * =, /=, %=, **=
*/

// > =
// var foo = 'bar'
// console.log(foo)

// > +=
// var x = 0;
// x += 1; // x = x + 1
// console.log(x)

// > *=
// var x = 1;
// x *= 2;
// console.log(x)

/*
  3 Comparison operator

  ==, ===, !=, !==
  >, <, >=, <=
*/

// > == (equal operator)
// equal to

// console.log(1 == 1)
// console.log(1 == 0)
// console.log(2022 == '2022')

// > === (strict equal operator)
// equal value and equal type

// console.log(1 === 1)
// console.log(2022 === '2022')

// > != 
// not equal

// console.log(1 != '1')
// console.log(1 != 1)

// > !==
// not equal value or not equal type

// console.log(1 !== '1')

// > <, <=
// console.log(2 < 2)
// console.log(2 <= 2)

/*
  4 Logical operator
  perform logical operation

  condition 1 && condition 2 (AND)
  condition 1 || condition 2 (OR) 
  !condition (NOT)
*/

// > condition 1 && condition 2 (AND)
// console.log(2>0 && 2>1)

// > condition 1 || condition 2 (OR)
// console.log(2>0 || 2<1)

// > !condition (NOT)
// console.log(!(1>0))
// console.log(!"")
// console.log(!undefined)
// console.log(!null)

/*
  5 Type operator
  return type of argument

  typeof
  instanceof
*/

// console.log(typeof 'foo')
// console.log(typeof 2022)

/*
  6 Bitwise operator

  &, |, ~, ^, <<, >>, >>>
*/

/*
  Q. OPERATOR
*/

// # You click likes button
// var likes = 999
// // likes++; 
// console.log(likes)

// # change it to statements using += operator
// var beers = 'Heineken(Netherlands)';
// beers = beers + ' Guinness(Ireland)'
// console.log(beers)

// # Teenager: a person aged between 13 and 19 years'
// var age = 15;
// // he is teenager
// console.log(age >= 13 && age <= 19)

/*
  *** CONDITION ***
  
  1 if condition
  2 switch 
  3 ? (ternary)
*/

/*
  1 if condition

  if (condition) {
    a block of code
    excuted if condition is true
  }
*/

// > if
// if (1 > 0) {
//   console.log("foo")
// }

// if (1 > 2) {
//   console.log("foo")
// }

// > if/else
// if (1 > 2) {
//   console.log("foo")
// } else {
//   console.log("bar")
// }

// > if/elseif/else
// var year = 2022;

// if (year === 2021) {
//   console.log("Last year")
// } else if (year === 2022) {
//   console.log("This year")
// } else if (year === 2023) {
//   console.log('Next year')
// } else {
//   console.log(".")
// }

// # condition in not boolean type
// if (true) {
//   console.log('foo');
// }

// if ('foo') {
//   console.log('bar')
// }

// if ("") { // false
//   console.log("foo")
// }

// if (null) { // false
//   console.log("foo")
// }

// if (undefined) { // false
//   console.log("bar")
// }

/*
  2 Switch
  strict equal comparison 
*/

// var year = 2022;

// switch(year) {
//   case 2021:
//     console.log('Last year');
//     break;
//   case 2022:
//     console.log('This year');
//     x = 2
//     break;
//   case 2023:
//     console.log('Next year');
//     x = 3
//     break;
//   default:
//     console.log('.');
// }

/* 
  ? (ternary)
  shorten condition statement

  condition ? value1 : value2
  if condition is true, return value 1 
  if condition is false, return value2
*/

// var year = 2022;
// console.log(year === 2022 ? 'This year' : 'Not this year');

/*
  Q. Condition
*/

// Q1. Make condition that tells he is teenager or not according to variables

// var johnAge = 20;
// if (johnAge > 13 && johnAge < 19) {
//   console.log("He is teenager")
// } else {
//   console.log("He is not Teenager")
// }

// Q2. Make condition that tells whether he/she is adult or not according to variables
// (ternary)

// var johnAge = 20;
var r = johnAge >= 18 ? 'He is adult' : 'He is not adult';
// console.log(r)

/*
  *** LOOP ***
  
  1 For loop
  2 While loop
*/

// 1 For
// # print numbers between 0 and 3
// for (var i=0; i<3; i++) {
//   console.log(i);
// }

// # sum on 1 - 10
// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum += i;
// }

// console.log(sum)

// # loop throuth string
// var foo = 'bar';

// for (var i=0; i<3; i++) {
//   console.log(foo[i])
// }

// # break and continue
// for (var i=0; i<=10; i++) {
//   if (i===5) {
//     break;
//   }
//   console.log(i)
// }

// for (var i=0; i<=10; i++) {
//   if (i===5) {
//     continue;
//   }
//   console.log(i)
// }

// 2 While

// # print numbers between 0 and 3
// let i = 0;

// while(i < 3) {
//   console.log(i)
//   i++;
// }

/* 
  Q. Loop
*/

// Q1. print alphabets from a to c
// var alphabets = 'abcdefg'

// for (var i=0; i<3; i++) {
//   console.log(alphabets[i])
// }

// Q2. sum numbers of 10, 20, 30, ... 100 
// var sum = 0;
// for (var i=1; i<=10; i++) {
//   sum += i*10
// }
// console.log(sum)

// var sum = 0;
// for (var i=10; i<=100; i+=10) {
//   sum += i
// }
// console.log(sum)


/* 
  *** variables and constant ***
  both are container that have values
  
  1 var (variables)
  2 let (variables)
  3 const (constant)
*/

// 1 var
// var foo = "bar";

// var foo = 'bar'
// foo = "baz";

// var foo;
// foo = "bar";

// var foo = "bar"
// var foo = "baz"

// 2 let
// let foo = 'var'

// let foo = 'bar'
// foo = 'baz'

// let foo;
// foo = 'bar'

// let foo = 'bar'
// let foo = 'baz'

// 3 const 
// const foo = 'bar'

// # let and const has block scope
// {
//   var foo = 'Foo'
//   let bar = 'Bar'
//   const baz = 'Baz'

//   console.log(foo, bar, baz)
// }

// console.log(foo)

/*
  *** Function ***
  a block of code excuted only when it is invoked.

  1 declare function
    > function declaration
    > function expression and arrow function
  2 Hoisting
  3 Global variable and local variable
  4 return keyword
  5 parameter
  6 callback
*/

// 1 declare function
// > function declaration

// function f() {
//   console.log("foo")
// }
// f()

// > function expression
// assign anonymous function to variable
// const f = function () {
//   console.log("foo")
// }
// f()

// > arrow function
// const f = () => {
//   console.log("foo")
// }
// f();

// 2 Hoisting

// # works on function declaration
// f()
// function f() {
//   console.log("foo")
// }

// f()
// const f = () => {
//   console.log('foo')
// }

// 3 Global and local(function) variables

// > global variables
// declaration outside function
// const foo = 'bar'

// function f() {
//   console.log(foo)
// }
// f()

// > local variable
// function f() {
//   // declaration inside function
//   const foo = 'bar'
// }
// f()

// console.log(foo);

// 4 'return' keyword on function

// > when return value
// function f() {
//   return 'foo'
// }

// const r = f();
// console.log(r);

// function f() {
//   return 'foo'
//   console.log('...')
// }

// const r = f();
// console.log(r);

// > when stop execution
// function f() {
//   console.log('foo')
//   return;
//   console.log('...')
// }
// f();

// 5 function parameter

// function add(x, y) {
//   return x + y;
// }
// let r = add(1, 2);
// console.log(r)

/* 
  Q. Function
*/

// function isAdult(age) {
//   if (age >= 18) {
//     return 'He/she is Adult'
//   } else {
//     return 'He/she is not adult'
//   }
// }

// let r = isAdult(20)
// console.log(r)


// 6 callback
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


/* 
  *** Error and Error Handling ***
*/

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

/* 
  *** Array ***

  an state which can hold more than one value;
  [value1, value2, ...]
  index - order of specific value in array
*/

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

/* 
  # Object
  관련된 데이터와 함수의 집합이다
  { key: value, ...}
*/

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




























