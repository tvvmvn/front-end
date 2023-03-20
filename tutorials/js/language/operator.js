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

console.log('add:', add);
// > 2


//  Increment and decrement operator
var i = 1;
i++;
console.log('increment:', i)
// > 2


//  Exponentiation 
var exp = 2 ** 7
console.log('exponentiation:', exp)
// > 128


// Modulus(Devision remainder)
var mod = 5 % 2;
console.log('modulus:', mod)
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
var foo = 'bar'
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
console.log('equal:', 2023 == 2023) 
// > true
console.log('equal:', 2023 == '2023' ) 
// > true
console.log('equal:', null == undefined) 
// > true


// not equal operation
console.log('not equal:', 2023 != 2023) 
// > false
console.log('not equal:', 2023 != '2023') 
// > false
console.log('not equal:', null != undefined) 
//  > false


// strict equal operation
console.log('strict equal:', 2023 === 2023); 
// > true
console.log('strict equal:', 2023 === '2023'); 
// > false
console.log('strict equal:', null === undefined); 
// > false


// strict not equal operation
console.log('strict not equal:', 2023 !== 2023) 
// > false
console.log('strict not equal:', 2023 !== '2023') 
// > true
console.log('strict not equal:', null !== undefined) 
// > true


// greater than
console.log('greater than:', 1 > 0); 
// > true



/*
  4 Logical operator
  perform logical operation

  - Logical AND operator
  expr 1 && expr 2 
  
  - Logical OR operator
  expr 1 || expr 2 

  - Logical NOT operator
  !expr 
*/


// Logical AND operator
console.log('Both expression are true:', 1 > 0 && 1 < 2) 
// > true

// Logical OR operator
console.log('One of expression is true:', 1 > 0 || 1 > 2) 
// > true

// Logical NOT operator
console.log('Not this expression', !(1 > 0)) 
// > false


// Logical NOT operator to data type not in boolean
console.log('NOT null:', !null)
// > true

console.log('NOT undefined:', !undefined)
// > true

console.log('NOT zero', !0);
// > true

console.log('NOT empty string', !"");
// > true



/*
  5 Type operator
  return type of argument

  - typeof
  - instanceof
*/


var foo = 'bar';

console.log('type of foo variables:', typeof foo); 
// > string