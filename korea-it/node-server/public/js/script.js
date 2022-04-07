//  4/8 Friday, 4/11 Monday


// # Fetch API
// fetch('https://dapi.kakao.com/v2/search/image?query=카리나', {
//   headers: { 'Authorization': 'KakaoAK d5a49f32e43c184c2823a05cdaf8c841' }
// }).then(res => res.json()).then(json => {
//   console.log(json)
//   console.log(json.documents[0].image_url)
// })


// # Error Handling
// try {
//   console.log(x) // ReferenceError: x is not defined

//   f()
//   function f() {
//     console.log(x) // ReferenceError: x is not defined
//   }

//   let x;

//   if (x === undefined) {
//     throw('Are you kidding?') // Custom error message
//     // console.log(x) // not works
//   } else {
//     console.log('.');
//   }

//   let x;

//   if (typeof x === 'undefined') {
//     throw('Are you kidding?')
//     // console.log(x) // not works
//   } else {
//     console.log('.');
//   }


//   f()

//   function f() {
//     var x = 0;

//     if (x < 1) {
//       throw "too small"
//     } else {
//       console.log('.')
//     }
//   }
// } catch (err) {
//   console.error(err)
// }


// # Callback and Promise

// # Before new Promise
// prototype object of hello => String()
// var hello = new String('hello') // create instance from String constructor
// console.log(String) // constructor
// console.log(hello) // instance

// console.log(String.prototype) // prototype of constructor
// console.log(hello.__proto__) // prototype object of 'hello'
// console.log(Promise.prototype) // {then: ƒ, catch: ƒ, ...}


// function User(username) {
//   this.username = username

//   this.hello = () => {
//     return 'hello'
//   }
// }

// // 척 보기엔 이상합니다. 함수에 불과한 생성자에 멤버를 정의한다니요?
// // 함수 역시 객체의 하나입니다.
// User.prototype.bye = () => { // bye
//   return 'bye'
// }

// var user = new User('bunny')
// console.log(user)
// console.log(User.prototype) // {bye: ƒ, constructor: ƒ}
// console.log(User.prototype.hello) // undefined
// console.log(user.bye()) // accessible
// console.log(user.__proto__) // {bye: ƒ, constructor: ƒ}


// # Basic
// function myFunction(cb) {
//   console.log(1)
//   cb()
// }

// myFunction(() => {
//   console.log(2)
// })

// function myFunction() {
//   return new Promise((res, rej) => {
//     console.log(1)
//     res()
//   })
// }

// myFunction().then(() => {
//   console.log(2)
// })


// # Error Handling
// function myFunction(result, err) {
//   var DATA = 1; // e.g) DATA from Server.

//   if (DATA > 0) {
//     result()
//   } else {
//     err()
//   }
// }

// myFunction(() => console.log('Good'), () => console.log('Bad'))


// function myFunction() {
//   return new Promise((res, rej) => {

//     var DATA = 1 // e.g) DATA from Server

//     if (DATA > 0) {
//       res()
//     } else {
//       rej()
//     }
//   })
// }

// myFunction().then(() => console.log('Good'), () => console.log('Bad'))


// # Callback Hell
// function first(cb) {
//   console.log(1)
//   cb()
// }

// function second(cb) {
//   console.log(2)
//   cb()
// }

// function third(cb) {
//   console.log(3)
//   cb()
// }

// function fourth() {
//   console.log(4)
// }

// first(() => {
//   second(() => {
//     third(fourth)
//   })
// })


// # What about Promise
// function first() {
//   return new Promise(res => {
//     console.log(1)
//     res()
//   })
// }

// function second() {
//   return new Promise(res => {
//     console.log(2)
//     res()
//   })
// }

// function third() {
//   return new Promise(res => {
//     console.log(3)
//     res()
//   })
// }

// function fourth() {
//   console.log(4)
// }

// first().then(second).then(third).then(fourth)


// # Callback and Promise with Asynchronous 

// Synchronous
// function myFunction(cb) {
//   console.log(1)
//   cb()
// }

// myFunction(() => {
//   console.log(2)
// })

// f()
// function f() {
  // console.log(1)
  // console.log(2)
// }

// setTimeout(() => { // Asynchronous function
//   console.log(1)
// }, 0)

// console.log(2)

// setTimeout(() => {
//   Synchronous inside callback of Asynchronous function
//   console.log(1)
//   console.log(2) 
// }, 0)


// function myFunction() { // Asynchrous function
//   setTimeout(() => {
//     console.log(1)
//   }, 0)
// }

// function f() {
//   console.log(2)
// }

// myFunction()
// f()


// function myFunction(cb) { // Asynchrous function
//   setTimeout(() => {
//     console.log(1)
//     cb()
//   }, 0)
// }

// function f() {
//   console.log(2)
// }

// myFunction(f) // Callback

// function myFunction() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 0)
//   })
// }

// myFunction().then(() => console.log(2))

// # Callback Hell with Asynchronous
// function first(cb) {
//   setTimeout(() => {
//     console.log(1)
//     cb()
//   }, 0)
// }

// function second(cb) {
//   setTimeout(() => {
//     console.log(2)
//     cb()
//   }, 0)
// }

// function third(cb) {
//   setTimeout(() => {
//     console.log(3)
//     cb()
//   }, 0)
// }

// function fourth(cb) {
//   setTimeout(() => {
//     console.log(4)
//   }, 0)
// }

// first(() => {
//   second(() => {
//     third(fourth)
//   })
// })

// # NOT THIS WAY 
// function first() {
//   return setTimeout(() => {
//     return new Promise(res => {
//       console.log(1)
//       res()
//     })
//   })
// }

// first().then(() => console.log(2))

// function first() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 0)
//   })
// }

// function second() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log(2)
//       res()
//     }, 0)
//   })
// }

// function third() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log(3)
//       res()
//     }, 0)
//   })
// }

// function fourth() {
//   console.log(4)
// }

// first().then(second).then(third).then(fourth)


// # Callback and Promise with parameters

// function first(cb) {
//   console.log(1)
//   cb(2)
// }

// first((d) => {
//   console.log(d)
// })

// function first(cb) {
//   console.log(1)
//   cb('input')
// }

// function second(d) {
//   console.log(2)
//   console.log(d)
// }

// first((d) => {
//   second(d)
// })


// function first(cb) {
//   console.log(1)
//   cb('DATA')
// }

// function second(data, cb) {
//   console.log(2)
//   cb(data)
// }

// function third(data, cb) {
//   console.log(3)
//   cb(data)
// }

// function fourth(data) {
//   console.log(4)
//   console.log(data)
// }

// first((d) => {
//   second(d, () => {
//     third(d, () => {
//       fourth(d)
//     })
//   })
// })

// function first() {
//   return new Promise(res => {
//     console.log(1)
//     res('DATA')
//   })
// }

// first().then(d => {
//   console.log(d)
// })

// function first() {
//   return new Promise(res => {
//     console.log(1)
//     res('DATA')
//   })
// }

// function second(d) {
//   console.log(d)
// }

// first().then((d) => second(d))

// function first() {
//   return new Promise(res => {
//     console.log(1)
//     res('DATA')
//   })
// }

// function second(data) {
//   return new Promise(res => {
//     console.log(2)
//     res(data)
//   })
// }

// function third(data) {
//   return new Promise(res => {
//     console.log(3)
//     res(data)
//   })
// }

// function fourth(data) {
//   console.log(4)
//   console.log(data)
// }

// first()
// .then(d => second(d))
// .then(d => third(d))
// .then(d => fourth(d))

// # Promise catch 

// function first() {
//   return new Promise((res, rej) => {
//     rej('error >_<')
//   })
// }

// first().then((val) => console.log(val), (err) => console.error(err))
// first().then(val => console.log(val)) // Uncaught (in promise) error >_<
// first().then(val => console.log(val)).catch(err => console.error(err)) // error >_<


// # Async / Await

// async function return Promise
// async function f() {
//   console.log(1)
//   return;
// }

// f().then(() => console.log(2))

// async function f() {
//   console.log(1)
//   return 2 
// }

// console.log(f())

// f().then((d) => console.log(d))

// # Check asynchronous
// function first() {
//   setTimeout(() => {
//     console.log(1)
//   }, 1000)
// }

// function second() {
//   setTimeout(() => {
//     console.log(2)
//   }, 0)
// }

// first()
// second()

// # Async function
// async function first() {
//   console.log(1)
//   return;
// }
// async function second() {
//   console.log(2)
//   return;
// }
// async function third() {
//   console.log(3)
//   return;
// }
// async function fourth() {
//   console.log(4)
// }
// functions above return Promise Object.
// first().then(second).then(third).then(fourth)










