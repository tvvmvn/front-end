import React from 'react';

export default function JSX() {

  return (
    <>
      <h1>JSX</h1>
      <Content />
    </>  
  )
}


/*
  What is JSX
  
  Stands for JavaScript extension 
  A Syntax extension to JavaScript
  used for create virtual DOM

  1 What is JSX 
  2 JSX Syntax
  3 print JavaScript result in JSX
  4 Condition in JSX
  5 Loop in JSX
*/


/*
  1 What is JSX
*/

// function Content() {
//   const h1 = React.createElement('p', {}, 'Hello React');

//   return h1;
// }

// function Content() {
//   return <p>Hello React</p>
// }


/*
  2 JSX Syntax

    - React Fragment
    - element attribute
    - inline style
*/


// function Content() {
//   return (
//     <div>
//       <h3>React Fragment</h3>
//       <ul>
//         <li>Foo</li>
//         <li>bar</li>
//         <li>baz</li>
//       </ul>
//     </div>  
//   )
// }


// function Content() {
//   return (
//     <>
//       <h3>JSX attribute</h3>
//       <ul>
//         <li>
//           <a href="https://google.com" target="_blank">Foo</a>
//         </li>
//         <li>
//           <img src="/" alt="Bar" />
//         </li>
//         <li>
//           <input type="text" placeholder="Baz" autoComplete="off" />
//         </li>
//       </ul>
//     </>  
//   )
// }


// function Content() {
//   return (
//     <>
//       <h3>JSX inline styles</h3>

//       <ul style={{border: "1px solid"}}>
//         <li style={{textDecoration: "underline"}}>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>  
//   )
// }


// function Content() {

//   const st = {
//     textDecoration: "line-through",
//     color: "#f00"
//   };

//   return (
//     <>
//       <h3>Q. List beers using a variable</h3>
//       <ul>
//         <li style={st}>Guinness, Ireland</li>
//         <li>Heineken, Netherlands</li>
//         <li>Budwiser, USA</li>
//       </ul>
//     </>  
//   )
// }


/*
  3 print result in JSX
*/

// function Content() {

//   let cat = {
//     name: 'Kitty',
//     age: 2,
//     home: null,
//     sound: function () {
//       return 'meow'
//     }
//   }

//   return (
//     <>
//       <h3>{cat.name}</h3>
//       <ul>
//         <li>Name: {cat.name}</li>
//         <li>Age: {cat.age}</li>
//         <li>Home: {cat.home}</li>
//         <li>Sound: {cat.sound()}</li>
//       </ul>
//     </>  
//   )
// }


/*
  4 Conditional statement in JSX
  Logical Operator and Ternary

  && (AND)
  || (OR)
  ! (NOT)
  ?(Ternary)
*/


// function Content() {

//   return (
//     <>
//       <h3>JSX condition</h3>
//       <p>Condition 1 &amp;&amp;(AND) Condition 2</p>
//       <ul>
//         <li>{'lol' && 'Foo'}</li>
//         <li>{false && 'Bar'}</li>
//         <li>{"lol" && false}</li>
//       </ul>
//     </>  
//   )
// }


// function Content() {

//   return (
//     <>
//       <h3>JSX condition</h3>
//       <p>|| (OR)</p>
      
//       <ul>
//         <li>{'lol' || 'Foo'}</li>
//         <li>{false || 'Bar'}</li>
//         <li>{"lol" || false}</li>
//       </ul>
//     </>  
//   )
// }


// function Content() {

//   return (
//     <>
//       <h3>JSX condition</h3>
//       <p>!(NOT) and ?(Ternary)</p>
      
//       <ul>
//         <li>{!'Foo'}</li>
//         <li>{true ? 'Bar' : ''}</li>
//         <li>{false ? '' : 'Baz'}</li>
//       </ul>
//     </>  
//   )
// }


/*
  5 Loop in JSX
*/

// function Content() {
//   const arr = ["Foo", "Bar", "Baz"];

//   return (
//     <>
//       <h2>Loop in JSX</h2>
//       <ul>
//         {arr.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   )
// }


// function Content() {
//   const beers = [
//     {name: "Heineken", origin: "Netherlands"},
//     {name: "Guinness", origin: "Ireland"},
//     {name: "Asahi", origin: "Japan"}
//   ]
  
//   const list = beers.map((beer, index) => (
//     <li key={index}>{beer.name}, {beer.origin}</li>
//   ))

//   return (
//     <>
//       <h2>Q. list beers using variables</h2>
//       <ul>
//         {list}
//       </ul>
//     </>
//   )
// }
