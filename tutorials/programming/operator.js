/*
  *** OPERATOR ***
  
  1 Arithmetic operator
  2 Assignment operator
  3 Comparison operator
  4 Logical operator
  5 Type operator
*/


/*
  1 Arithmetic operator

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


// four arithmetic operation
var add = 1 + 1
var subtract = 2 - 1
var divide = 1 / 2
var multiply = 1 * 1

console.log(add);
// > 2


//  Increment and decrement operator
var i = 1;
i++;
console.log(i)
// > 2


//  Exponentiation 
var exp = 2 ** 7
console.log(exp)
// > 128


// Modulus(Devision remainder)
var mod = 5 % 2;
console.log(mod)
// > 1


/*
  2 Assignment operator

  variables assignment operator
  = 
  addition assignment operator
  += 
  substraction assignment operator
  -= 
  multiply assignment operator
  *=
  division assignment operator
  /=
  exponentiation assignment operator
  **=
  moduls assignment operator
  %= 
*/

// variable assignment operator
var foo = "bar"
console.log(foo) // bar


// addition assignment operator
var longVariablesName = 1;

//  longVariablesName = longVariablesName + 1, good for long variables name
longVariablesName += 1; 

console.log(longVariablesName) 
// > 2


/*
  3 Comparison operator

  equal operator
  == 
  not equal operator
  != 

  strict equal operator
  ===
  strict not equal operator
  !==

  greather than operator
  > 
  greather than or equal operator
  >= 

  less than operator
  < 
  less than or equal operator
  <=
*/


// equal operation
console.log(1 == 2);
// > false
console.log("foo" == "bar");
// > false
console.log(2023 == "2023" ) 
// > true
console.log(null == undefined) 
// > true


// not equal operation
console.log(1 != 2) 
// > true
console.log("foo" != "bar");
// > true
console.log(2023 != "2023") 
// > false
console.log(null != undefined) 
// > false


// strict equal operation
console.log(1 === 2); 
// > false
console.log("foo" === "bar");
// > false
console.log(2023 === "2023"); 
// > false
console.log(null === undefined); 
// > false


// strict not equal operation
console.log(1 !== 2) 
// > true
console.log("foo" !== "bar");
// > true
console.log(2023 !== "2023") 
// > true
console.log(null !== undefined) 
// > true


/*
  4 Logical operator
  perform logical operation

  - && (AND)
  expr 1 && expr 2 
  
  - || (OR)
  expr 1 || expr 2 

  - ! (NOT)
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
  5 Type operator
  return type of argument
*/

var foo = "bar";

console.log(typeof foo); 
// > string