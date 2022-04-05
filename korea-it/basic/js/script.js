// Helper 
// function createElement(node) {
//   try {
//     if (node === false) {
//       node = '';
//     }

//     if (typeof node === 'string') {
//       return document.createTextNode(node);
//     }

//     const $el = document.createElement(node.type);

//     Object.keys(node.props).map(prop => {
//       if (prop.match(/^on/)) {
//         $el.addEventListener(prop.slice(2).toLocaleLowerCase(), node.props[prop]) 
//       } else if (typeof node.props[prop] === 'boolean') {
//         if (node.props[prop]) {
//           $el.setAttribute(prop, '')
//         } 
//       } else {
//         $el.setAttribute(prop, node.props[prop]);
//       }
//     })
    
//     node.children.map(c => {
//       $el.appendChild(createElement(c))
//     })

//     return $el;
    
//   } catch (err) {
//     console.error(err);
//   }
// }

// type(prototype)
// operator
// object 
// variable
// function methods
// loop
// window
// events


// document.getElementById('root').innerHTML = 'hello world'
// console.log('hello world');


// var car;

// undefined (declared, so not an error)
// console.log(car);

// Uncaught RederenceError: avante is not defined
// console.log(avante)

// ReferenceError: avante is not defined
// try {
//   console.log(avante)
// } catch (err) {
//   console.log(err)
// }

// var str = ''

// // empty string
// console.log(str)

// // string
// console.log(typeof str)

// var str =  'apple'
// var num = 1;
// var boolean = true;
// var ud = undefined;

// console.log(str)
// console.log(num)
// console.log(boolean)
// console.log(ud)

// var bl = "true"

// // true
// console.log(bl)
// // string
// console.log(typeof bl)


// ** DATA TYPE
// string
// number
// boolean
// date
// null
// undefined

// ** Operator
// Arithmetic operator
// +, ++, -, --, >, <, /, *, 

// Assignment operator
// =, +=, -=, *=, /=

// function doSomething() {
//   console.log('hello')
// }

// // window.doSomething()
// window.alert()


// examples using object, array, for, if …

// # before this…
// selector
// html dom
// event

// document.getElementById('root').innerHTML = 
// `
// <div>
//   <h1>Heading</h1>
//   <p class="a">paragraph 1</p>
//   <p class="a">paragraph 2</p>
//   <p class="b">paragraph 3</p>
// </div>
// `

// document.getElementById()
// document.querySelector()
// document.querySelectorAll()

// var x = document.getElementsByClassName('a') // HTMLCollection(count)
// var y = document.querySelectorAll('.a') // NodeList(count)

// console.log(x)
// console.log(y)

// // x.forEach(el => {
// //   console.log(el)
// // })

// y.forEach(el => {
//   console.log(el)
// })

// console.log(x[0])
// console.log(y[0])

// console.log(x.length)
// console.log(y.length)

// var b = document.getElementsByClassName('b')
// console.log(b) // HTMLCollection[p.b]
// console.log(b.innerHTML) // undefined
// console.log(b[0].innerHTML)

// console.log(String)

// function User(username) {
//   this.username = username
// }

// var user = new User('bunny')

// console.log(user)

// var user = 'bunny'

// function user() {
//   return 'cat'
// }


// console.log(user)
// console.log(user()) // error, function name and variable name must not be different

// function createUser(username) {
//   return username;
// }

// var user = createUser('bunny')

// console.log(user)

// function User(username) {
//   console.log(this)
//   this.username = username
// }
// var user = new User('bunny')
// // var user = new User()
// console.log(user)

// class User {
//   constructor(username) {
//     this.username = username
//   }
// }

// function User(username) {
//   // property
//   this.username = username

//   // method
//   this.greeting = function () {
//     return 'hello'
//   }
// }

// console.log(new User('bunny'))
// console.log(new User('bunny').greeting())

// window.addEventListener(event, function)

// console.log(document.body.children);
// console.log(document.body.children.length)
// console.log(document.body.children[0])

// for (i=0; i<document.body.children.length; i++) {
//   console.log(document.body.children[i])
// }

// for (children of document.body.children) {
//   console.log(children)
// }

// document.body.children.forEach(c => {
//   console.log(c)
// })

// document.body.childNodes.forEach(c => {
//   console.log(c)
// })


// const DATA = [
//   { id: 'todo-0', name: 'Eat', completed: true },
//   { id: 'todo-1', name: 'Sleep', completed: false },
//   { id: 'todo-2', name: 'Repeat', completed: false },
// ]

// document.getElementById('root').appendChild(
//   createElement(Todo({ tasks: DATA })) 
// )

// function Todo(props) {
//   const tasks = props.tasks;

//   const deleteTask = (id) => {
//     const remainingTasks = tasks.filter(task => {
//       if (id !== task.id) {
//         return task;
//       }
//     })

//     console.log(remainingTasks)

//     document.getElementById('root').replaceChildren(
//       createElement(Todo({ tasks: remainingTasks }))
//     )
//   }

//   const taskList = tasks.map(task => {
//     return { type: 'li', props: { 'id': task.id }, children: [
//       { type: 'span', props: {}, children: [task.name] },
//       { type: 'span', props: { 'onClick': () => deleteTask(task.id) }, children: ['[x]'] },
//     ] }
//   })

//   const todo = {
//     type: 'ul', 
//     props: {},
//     children: taskList
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = new FormData(e.target).get('todo')
//     const newTask = { id: 'todo-' + Math.random(), name: name, completed: false }
//     tasks.push(newTask)

//     document.getElementById('root').replaceChildren(
//       createElement(Todo({ tasks }))
//     )
//   }

//   const form = {
//     type: 'form', 
//     props: { 'onSubmit': handleSubmit }, 
//     children: [
//       { type: 'h1', props: {}, children: ['Todo List'] },
//       { type: 'input', props: { 'type': 'text', 'name': 'todo', 'autocomplete': 'off', 'required': 'true' }, children: [] },
//       { type: 'button', props: {}, children: ['Add'] },
//     ] 
//   }

//   return {
//     type: 'div',
//     props: {},
//     children: [
//       form, todo
//     ]
//   }
// }

// const numbers = [1,3,5,7,9]

// // not works.
// // const result = numbers.forEach(n => {
// //   if (n > 3) {
// //     return  n;
// //   }
// // })

// const result = numbers.filter(n => {
//   if (n > 3) {
//     return n;
//   }
// })

// console.log(result)


// document.getElementById('root').appendChild(createElement(App()));

// function App(w) {
//   const DATA = ['Apple', 'Banana', 'Mango', 'Strawberry', 'Orange']
  
//   const handleChange = (e) => {
//     document.getElementById('root').replaceChildren(
//       createElement(App(e.target.value))
//     )
//   }

//   var fruits;

//   if (w === undefined) {
//     fruits = DATA;
//     w = ""
//   } else {
//     fruits = DATA.filter(fruit => {
//       if (fruit.match(new RegExp(w, 'i'))) {
//         return fruit
//       }
//     })
//   }

//   const Form = {
//     type: 'form', props: {}, children: [
//       { type: 'h1', props: {}, children: ['Search'] },
//       { type: 'input', props: { 'onKeyup': handleChange, 'value': w } , children: [] },
//     ]
//   }

//   const fruitList = fruits.map(fruit => {
//     return { type: 'li', props: {}, children: [fruit] }
//   })

//   const Fruits = {
//     type: 'ul',
//     props: {},
//     children: fruitList
//   }

//   const Element = {
//     type: 'div',
//     props: {},
//     children: [
//       Form, Fruits
//     ]
//   }
  
//   return Element;
// }

// const element = {
//   type: 'h1',
//   props: { 'id': 'hello' },
//   children: ['hello world']
// }

// document.getElementById('root').appendChild(createElement(element))

// document.getElementById('hello').classList.add('apple')
// document.getElementById('hello').classList.add('banana')

// console.log(document.getElementById('hello').classList)
// console.log(document.getElementById('hello').className)


// const fruits = ['apple', 'banana', 'mango'];

// fruits.forEach(function (fruit) {
//   console.log(fruit)
// })

// console.log(Array)

// Array.prototype.pizza = function (cb) {
//   for (i=0; i<this.length; i++) { // 'this' binding to 'Array'
//     cb(this[i].toUpperCase())
//   }
// }

// fruits.pizza(function(fruit) {
//   console.log(fruit)
// })

// function User(username) {
//   this.username = username
// }

// User.prototype.age = 1;
// User.prototype.sound = function () {
//   console.log(this) // this => User(Owner of this method)
//   return 'aaaaa'
// }

// const user = new User('bunny')

// console.log(user)
// console.log(user.age)
// console.log(user.sound())


// const dataFunction = (i) => {
//   const DATA = [
//     { id: '', name: '', source: '../../img/bunny.jpeg' },
//     { id: '', name: '', source: '../../img/cat.jpeg' },
//     { id: '', name: '', source: '../../img/bird.jpeg' },
//   ]

//   DATA.map(data => {
//     data.name = '';
//   })

//   DATA[i].name = 'active';
  
//   return DATA;
// }

// var index = 0;

// document.getElementById('root').appendChild(createElement(App({ images: dataFunction(index) })))

// function App(props) {

//   const images = props.images

//   const nextSlide = (n) => {
//     index = index + n
//     document.getElementById('root').replaceChildren(
//       createElement(App({ images: dataFunction(index) }))
//     )
//   }

//   const imageList = images.map(image => {
//     return { type: 'img', props: { 'class': image.name,  'src': image.source }, children: [] }
//   })

//   const isPrev = index === 0 ? false : true
//   const isNext = index === images.length-1 ? false : true
  
//   const prevBtn = { type: 'button', props: { 'onClick': () => nextSlide(-1) }, children: ['prev'] }
//   const nextBtn = { type: 'button', props: { 'onClick': () => nextSlide(1) }, children: ['next'] }

//   const element = {
//     type: 'div',
//     props: { 'class': 'wrap' },
//     children: [
//       { type: 'div', props: { 'class': 'container' }, children: imageList },
//       { type: 'div', props: { 'id': 'tmp' }, children: [
//         isPrev && prevBtn,
//         isNext && nextBtn,
//       ] }
//     ]
//   }

//   // console.log(isPrev && prevBtn) // false
//   // console.log(isNext && nextBtn) // nextBtn
  
//   return element;
// }

// console.log(document.getElementById('tmp').childNodes)


// function myFunction(cb) {
//   cb('event!')
// }


// window.myFunction(function (e) {
//   console.log(e)
// })

// function myFunction(d) {
//   console.log(d)
// }


// window.addEventListener('DOMContentLoaded', function (e) {
//   e.preventDefault();

//   myFunction(1)
// })

// function myFunction(e) {
//   console.log(e)
//   console.log(1);
// }

// const myFunction = function(e) {
//   console.log(e)
// }

// window.addEventListener('DOMContentLoaded', myFunction)

// function myFunction(d) {
//   console.log(d)
// }

// window.addEventListener('DOMContentLoaded', function (e) {
//   console.log(e)
//   myFunction('hello');
// });

// function tick() {
//   const element = {
//     type: 'div',
//     props: { 'id': 'content', 'class': 'content' },
//     children: [
//       { type: 'h1', props: {}, children: ['Hello, world!'] },
//       { type: 'h2', props: {}, children: [`It is ${new Date().toLocaleTimeString()}.`] }
//     ]
//   }

//   document.getElementById('root').appendChild(createElement(element))
//   // console.log(document.getElementById('root').children) 
// }

// setInterval(tick, 1000);

// tick();

// createObject(document.getElementById('root'))

// function createObject(element) {

//   if (element.childElementCount===0) {
//     if (element.textContent) {
//       console.log(element.textContent);
//     }
//     return;
//   }

//   for (i=0; i<element.childElementCount; i++) {
//     console.log(element.children[i])

//     console.log(element.children[i].tagName)
//     console.log(element.children[i].getAttributeNames())

//     createObject(element.children[i])
//   }
// }

// console.log(document.getElementById('root').textContent)

// console.log(document.querySelector('h1'))
// console.log(document.querySelector('h1').children)
// console.log(document.querySelector('h1').textContent)
// console.log(document.querySelector('h1').textNode)
// console.log(document.querySelector('h1').childElementCount)


// 4/4 Tuesday


// class/prototype
// var, let, const
// arraw function

// try and catch
// getter/setter
// promise async/await
// regex

// ajax/fetch
// cookie


// Global Scope
// declared outside any function have global scope
//  - var, let, const

// Function(Local) Scope 
// - var, let, const

// Block Scope 
// - let, const


// var fruit = 'apple'
// console.log(fruit)

// var fruit;
// fruit = 'apple'
// console.log(fruit)

// var fruit = 'apple'
// var fruit = 'mango'

// console.log(fruit)

// not recommended
// var fruit = 'apple'
// fruit = 'banana'
// console.log(fruit)


// var person;
// var age = 20

// if (age > 0) {
//   person = 'adult'
// } else {
//   person = 'kids'
// }

// console.log(person)


// "use strict"

// for (i=0; i<5; i++) {
//   console.log(i)
// }

// let fruit;
// fruit = 'apple'
// console.log(fruit)

// let fruit = 'apple'
// let fruit = 'mango'

// console.log(fruit) // error(Identifier 'fruit' has already been declared)

// let fruit = 'apple'
// fruit = 'mango'

// console.log(fruit)


// let person;
// let age = 20

// if (age > 18) {
//   person = 'adult'
// } else {
//   person = 'kids'
// }

// console.log(person)

// const fruit = 'apple'
// fruit = 'orange' // assignment to constant variable

// const fruit = 'apple' 
// const fruit = 'mango' // Identifier 'fruit' has already been delclared

// console.log(fruit)

// const fruit; // Missing initializer in const declaration.


// ** Global Scope

// var fruit = 'apple' // Global Scope

// f()

// function f() {
//   console.log(fruit)
// }

// let fruit = 'apple' // Global Scope

// f()

// function f() {
//   console.log(fruit)
// }

// const fruit = 'apple' // Global Scope

// f()

// function f() {
//   console.log(fruit)
// }


// ** Function Scope (Local Scope)

// f()

// function f() {
//   var fruit = 'apple' // function scope
//   let fruit = 'apple' // function scope
//   const fruit = 'apple' // function scopre
// }

// console.log(fruit) // Not accesible


// var fruit = 'apple'
// let fruit = 'apple';
// const fruit = 'apple';

// f()

// function f() {
//   // var fruit = 'banana'
//   // let fruit = 'banana'
//   const fruit = 'banana'
//   console.log(fruit) // var, let, const - banana
// }

// console.log(fruit) // apple


// {
//   var v = 'v'
//   let l = 'let'
//   const c = 'const'
// }

// for, if, ...
// differ from Function Scope!

// console.log(v)
// console.log(l) // l is not defined
// console.log(c) // c is not defined


// let person;
// let age = 20;

// if (age > 18) {
//   person = 'adult'
// } else {
//   person = 'kids'
// }

// console.log(person) // works


// let age = 20;

// if (age > 18) {
//   let person = 'adult'
// } else {
//   let person = 'kids'
// }

// console.log(person) // not works


// const person;
// let age = 20;

// if (age > 18) {
//   person = 'adult'
// } else {
//   person = 'kids'
// }

// console.log(person) // not works (Missing initialzier in const declaration)

// let result = 0;

// for (i=0; i<5; i++) {
//   result += i
// }

// console.log(result)


// for (i=0; i<5; i++) {
//   let result = i;
// }

// console.log(result);

// f()


// ** Function Declaration and Function Expression
// Arrow function to shorten F.E


// function declaration
// function f() {
//   console.log('hello')
// }

// function expression (not hoisted)
// var f = function () {
//   console.log('hello')
// }

// f() // f is not a function
// console.log(f) // undefined


// // arrow function (not hoisted)
// var f = () => { 
//   console.log('hello')
// }

// var f = (d) => {
//   console.log(d)
// }

// var f = d => {
//   console.log(d)
// }

// var f = d => console.log(d) // has only one statement, brace is removable

// f('hello')

// var f = d => d + 1

// console.log(f(0))


// Prototype and Class
// Inheritance

// var fruit = 'apple'
// fruit.toUpperCase();

// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }
// console.log(person.fullName());

// console.log(fruit.__proto__)

// var num = 0;

// console.log(num.toString())

// console.log(num.__proto__)

// var date = new Date()
// console.log(date.toDateString());
// console.log(date.__proto__)

// var fruit = 'apple'
// console.log(fruit.__proto__) // String (prototype object)
// console.log(fruit.__proto__.__proto__) // Object (prototype object)


// console.log(new String('apple').toUpperCase())


// function User(username) {
//   this.username = username
//   this.bigName = function () {
//     return this.username.toUpperCase()
//   }
// }
// // function UserBusiness(location) {}

// var user = new User('bunny')

// console.log(user)
// console.log(user.bigName())

// Getter and Setter



