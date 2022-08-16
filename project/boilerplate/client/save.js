  // const entries = new Map([
  //   ['foo', 'bar'],
  //   ['baz', 42]
  // ]);
  
  // const obj = Object.fromEntries(entries); // Object.fromEntries(iterable)
  
  // console.log(obj);
  // expected output: Object { foo: "bar", baz: 42 }

  // var fruits = new Map([['foo', 'bar'],['baz', 42]])
  // var fruits = ['apple', 'banana', 'mango']
  // var bigFruits = fruits.map(fruit => [fruit, 0])
  // console.log(bigFruits) // bigFruits is iterable (it's an array)

  // ...
  
  // var url = '/posts/hello-123/comments'
  
  // var path = '/posts/:id/comments'
  // const pathToRegex = (path) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$'); 
  // var patt = pathToRegex(path) 
  // console.log(path)
  // console.log(patt)

  // var x = url.match(patt)
  // console.log(x)

  // console.log('...')

  // var y = Array.from(path.matchAll(/:(\w+)/g)) // Array.from(object)
  // console.log(y)
  // const keys = y.map(result => result[1]);
  // console.log(keys)
  // const values = x.slice(1) // array.slice()
  // console.log(values)
  // var iterable = keys.map((key, i) => [key, values[i]])
  // console.log(iterable)

  // console.log('...')

  // var result = Object.fromEntries(iterable) // Object.fromEntries(iterable)
  // console.log(result)

  // ...


  // var response = fetch(`http://localhost:3000/articles`)

  // var obj = response.then(obj => obj.json())

  // console.log(obj)

  // new Promise(res => {
  //   setTimeout(() => {
  //     console.log(1)
  //     res()
  //   }, 1000)
  // })
  // .then(() => {
  //   return new Promise(res => {
  //     setTimeout(() => {
  //       console.log(2)
  //       res()
  //     }, 1000)
  //   })
  // })
  // .then(() => {
  //   setTimeout(() => {
  //     console.log(3)
  //     res()
  //   }, 1000)
  // })
  

  // console.log(something) // Uncaught (in promise) ReferenceError  
  // try {
  //   console.log(something)

  // } catch (error) { // Caught error
  //   console.error('Error! ', error)
  // }

  
  // // Function declarion with normal function
  // const f1 = function() { return 'hello world' }
  // // Function declaration with arrow function (shortest √)
  // const f2 = () => 'hello world'
  // // Function expression
  // function f3() { return 'hello world' }

  // cannot access 'myFunction' before initialization
  // myFunction()
  // const myFunction = () => console.log('hello world')

  // var x = 0
  // const y; // Missing initializer in const declaration
  // // let y; // ok

  // if (x===0) {
  //   y = 'hello'
  // } else {
  //   y = 'world'
  // }

  // console.log(y)

  // { // block
  //   let l = 0 // error
  //   const c = 4 // error
  //   var v = 6 // ok
  // }

  // console.log(l)
  // console.log(c)
  // console.log(v)
  
  // try {
  //   var user = 'cat'

  //   if (user !== 'bunny') {
  //     throw "Bad!" // to create a custom error => catch("Bad!"), string 
  //     // The exception can be a JavaScript String, Number, Boolean, Object
  //   }

  // } catch (err) { // throw an exception (throw an error)
  //   console.error('error name! ', err.name)
  //   // error name - EvalError, RangerError, ReferenceError, SyntaxError, TypeError, URIError
  //   console.error('error message! ', err.message)
  //   console.error('error! ', err)
  // } finally {
  //   console.log('The end')
  // }

  // try {
  //   console.log(user) // worked
  //   throw 'Bad!' // not worked
  // } catch (err) {
  //   console.error(err)
  // }

  // x = 3.14

  // console.log(x)

  // Chrome Debugging Tools - console
  

  