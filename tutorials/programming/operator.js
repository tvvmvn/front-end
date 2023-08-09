/*
  *** OPERATOR ***
  
  1 Arithmetic operator
  2 Assignment operator
  3 Comparison operator
  4 Logical operator
  5 Type operator
*/


/*
  Arithmetic operator

  1 4-Rules
  +, -, *, / 
  2 increment operator
  ++ 
  3 decrement operator
  -- 
  4 exponentiation operator
  ** 
  5 modulus operator
  % 
*/

// Arithmetic 4 Rules
var add = 1 + 1
var subtract = 2 - 1
var divide = 1 / 2
var multiply = 1 * 2

console.log("add:", add);
// > 2
console.log("substract:", subtract);
// > 1
console.log("divide:", divide);
// > 0.5
console.log("multiply", multiply)
// > 2


//  Increment and decrement operator
var i = 1;
i++;
console.log(i)
// > 2


// Exponentiation 
var exp = 2 ** 7
console.log(exp)
// > 128


// Modulus (Devision remainder)
var mod = 5 % 2;
console.log(mod)
// > 1


/*
  Assignment operator

  1 Variables assignment operator
  = 
  2 Addition assignment operator
  += 
  3 Substraction assignment operator
  -= 
  4 Multiply assignment operator
  *=
  5 Division assignment operator
  /=
  6 Wxponentiation assignment operator
  **=
  7 Moduls assignment operator
  %= 
*/

// Variable assignment operator
var foo = "bar"

console.log(foo) 
// > bar


// Addition assignment operator
var n = 1;

// n = n + 1
n += 1; 

console.log(n) 
// > 2


/*
  Comparison operator

  1 Equal operator
  == 
  2 Not equal operator
  != 
  3 Strict equal operator
  ===
  4 Strict not equal operator
  !==
  5 Greather than operator
  > 
  6 Greather than or equal operator
  >= 
  7 Less than operator
  < 
  8 Less than or equal operator
  <=
*/

// Equal operation
console.log(1 == 2);
// > false
console.log("foo" == "bar");
// > false
console.log(2023 == "2023" ) 
// > true
console.log(null == undefined) 
// > true


// Strict equal operation
console.log(1 === 2); 
// > false
console.log("foo" === "bar");
// > false
console.log(2023 === "2023"); 
// > false
console.log(null === undefined); 
// > false


// Not equal operation
console.log(1 != 2) 
// > true
console.log("foo" != "bar");
// > true
console.log(2023 != "2023") 
// > false
console.log(null != undefined) 
// > false


// Strict not equal operation
console.log(1 !== 2) 
// > true
console.log("foo" !== "bar");
// > true
console.log(2023 !== "2023") 
// > true
console.log(null !== undefined) 
// > true


/*
  Logical operator

  1 && (AND)
  expr 1 && expr 2 
  2 || (OR)
  expr 1 || expr 2 
  3 ! (NOT)
  !expr 
*/

// AND
console.log(1 > 0 && 1 < 2) 
// > true


// OR
console.log(1 > 0 || 1 > 2) 
// > true


// NOT
console.log(!(1 > 0)) 
// > false

// NOT in not boolean type
console.log(!null)
// > true
console.log(!undefined)
// > true
console.log(!0);
// > true
console.log(!2023);
// > false
console.log(!"");
// > true
console.log(!"foo");
// > false


/*
  Type operator
  return type of variables
*/

var foo = "bar";

console.log(typeof foo); 
// > string