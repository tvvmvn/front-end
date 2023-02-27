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