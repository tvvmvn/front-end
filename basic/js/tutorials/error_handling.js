/* 
  *** Error and Error Handling ***
  
  1 What is error

  2 Error handling
  > try/catch

  3 Types of errors
  > ReferenceError
  > SyntaxError
  > TypeError
  > RangeError
  > URIError 
  > Errors

  4 Custom errors
*/

/* 
  1 What is error
  error stop executing program.  
  error must be handled
*/

// console.log(foo)

// 2 Error handling
// try {

//   // # try code
//   console.log(foo)

// } catch (err) {
//   // # error handling in catch block
//   console.error(err)
// }

// # finally
// try {

//   console.log(foo)

// } catch (err) {
//   console.error(err)
// } finally {
//   // finally block is executed in error or not
//   console.log('.')
// }

// 3 Types of errors
// > ReferenceError
// when a variable that doesn't exist is referenced
// try {
//   console.log(x);
// } catch (err) {
//   console.log(err)
// }

// > SyntaxError
// Syntax is wrong. It makes compile error
// compile error: compiler couldn't understand your code.
// catch block cannot handle compile error

// try {

//   console.log(2022));

// } catch (err) {
//   console.error(err)
// }

// > TypeError 
// when a variable or parameter is not valid type.
// try {
//   setInterval(null, 1000);
// } catch (err) {
//   console.error(err)
// }

// > RangeError
// A value is not in the set of range of allowed values
// try {
//   const pi = Math.PI;

//   console.log(pi.toPrecision(100)) // 49 digits

// } catch (err) {
//   console.error(err)
// }

// > URIError
// encodeURI() or decodeURI() are passed invalid parameters.
// try {
//   console.log(decodeURI('%')); 
// } catch (err) {
//   console.error(err)
// }

// 4 Custom Error
// try {
//   let age = 15;

//   console.log('Guinness, please');

//   if (age < 18) {
//     // throw custom error
//     throw 'Too young to buy an alcohol'
//   }

//   // not executed
//   console.log('Here are Guinness')

// } catch (err) {
//   console.error('error:', err)
// }