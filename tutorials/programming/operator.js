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

// Arithmetic operator
var add = 1 + 1
var subtract = 2 - 1
var divide = 1 / 2
var multiply = 1 * 2

console.log("1 + 1 =", add);
// > 2
console.log("2 - 1 =", subtract);
// > 1
console.log("1 / 2 =", divide);
// > 0.5
console.log("1 * 2 =", multiply)
// > 2


// + with String
var s = "hello" +  " world";

console.log(s);

var s = "hello " + 2024

console.log(s);
// > hello 2024
console.log(typeof s)
// > string


//  Increment and decrement operator
var i = 1;

i++;

console.log(i)
// > 2


// Exponentiation operator
var exp = 2 ** 7

console.log(exp)
// > 128


// Modulus (Devision remainder) operator
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
  5 gt operator
  > 
  6 gte operator
  >= 
  7 lt operator
  < 
  8 lte operator
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
  2 || (OR)
  3 ! (NOT)
*/


/*
&& (AND)
expr 1 && expr 2 

return true when both expr1 and expr2 are true. 
*/


console.log(1 > 0 && 1 < 2) 
// > true


/* 
|| (OR)
expr 1 || expr 2 

return true when one of them is true or both is true 
*/

console.log(1 > 0 || 1 > 2) 
// > true


/* 
! (NOT)

!expr 
*/


console.log(!(1 > 0)) 
// > false


// NOT with not boolean type
console.log("not null:", !null)
// > true
console.log("not undefined:", !undefined)
// > true
console.log("not 0:", !0);
// > true
console.log("not number:", !2);
// > false
console.log("not negative number:", !-2);
// > false
console.log("not emptry string:", !"");
// > true
console.log("not string:", !"foo");
// > false


/*
  Type operator
  
  return type of variables
*/

var foo = "bar";

console.log(typeof foo); 
// > string