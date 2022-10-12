import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export default App;

// Declarative VS Imperative
function App() {
  const [items, setItems] = useState([
    Math.random()
  ]);


  function handleClick() {
    setItems([...items, Math.random()])
  }

  return (
    <>
      <h2>Declarative</h2>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

// # JSX
// A Syntax extension to JavaScript
// Declarative like HTML
// BABEL compile JSX to JavaScript Object.

// function App() {
//   return <h1>Hello React</h1>
// }

// # Without JSX
// function App() {
//   const h1 = React.createElement('h1', 'null', 'Hello React');
//   return h1;
// }

// # JSX Syntax

// ### JSX elements must be wrapped in one element.
// function App() {
//   return (
//     <div>
//       <h2>Wrapping Elements</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </div>  
//   )
// }

// function App() {
//   return (
//     <div>Foo</div>
//     <div>Bar</div>
//     <div>Baz</div>
//   )
// }

// ### React.Fragment
// function App() {

//   return (
//     <React.Fragment>
//       <h2>React Fragment</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </React.Fragment>
//   )
// }

// function App() {
//   return (
//     <>
//       <h2>React fragment with empty tag</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </>  
//   )
// }

// ### JSX Self-closing elements
// function App() {
//   return (
//     <>
//       <h2>JSX Self-closing elements</h2>
//       <ul>
//         <li>Foo</li>
//         <li><img src="/" alt="Bar" /></li>
//         <li><input type="text" placeholder="Baz" /></li>
//       </ul>
//     </>  
//   )
// }

// ### JSX Attribute
// function App() {
//   return (
//     <>
//       <h2>JSX attribute</h2>
//       <ul>
//         <li><a href="https://google.com" target="_blank">Foo</a></li>
//         <li><img src="/" alt="Bar" /></li>
//         <li><input type="text" placeholder="Baz" autoComplete="off" /></li>
//       </ul>
//     </>  
//   )
// }

// ### JSX inline style
// pass the style object to style attribute

// function App() {
//   return (
//     <>
//       <h1>JSX Styles</h1>
//       <ul style={{border: "1px solid"}}>
//         <li style={{textDecoration: "underline"}}>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>  
//   )
// }

// ### write expressions in JSX
// function App() {
//   const foo = "Foo";
//   return (
//     <>
//       <h2>Write expressions in JSX</h2>
//       <div>{foo}</div>
//       <div>{"Ba" + "r"}</div>
//       <div>{new String("Baz").valueOf()}</div>
//     </>
//   )
// }

// ### JSX Condition
// Logical && (AND): expr1 && expr2
// Logical || (OR): expr1 || expr2
// Ternary: condition ? expr if true : expr if false

// function App() {
//   return (
//     <>
//       <h2>Logical &amp;&amp; (AND)</h2>
//       <div>{true && "Foo"}</div>
//       <div>{!"" && "Bar"}</div>
//       <div>{2 && "Bar"}</div>
//     </>  
//   )
// }

// function App() {
//   return (
//     <>
//       <h2>Logical || (OR)</h2>
//       <div>{false || "Foo"}</div>
//       <div>{"" || "Bar"}</div>
//       <div>{0 || "Baz"}</div>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <h2>Ternary</h2>
//       <div>{true ? "Foo" : "Bar"}</div>  
//     </>
//   )
// }

// ### Loop in JSX
// function App() {
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

// function App() {
//   const arr = ["Foo", "Bar", "Baz"];

//   const list = arr.map((item, index) => (
//     <li key={index}>{item}</li>  
//   ))

//   return (
//     <>
//       <h2>Loop in JSX</h2>
//       <ul>
//         {list}
//       </ul>
//     </>
//   )
// }

// Q. Complete DOM with JS Object.
// function App() {
//   const dutchBeer = "Heineken";
//   const irishBeer = "Guinness";
//   const japaneseBeer = "Asahi";

//   const soldOut = {
//     textDecoration: "line-through",
//   };

//   return (
//     <>
//       <h2>Beers</h2>
//       <ul>
//         <li>{dutchBeer}</li>
//         <li style={soldOut}>{irishBeer}</li>
//         <li>{japaneseBeer}</li>
//       </ul>
//     </>  
//   )
// }

// function App() {
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
//       <h2>Beers</h2>
//       <ul>
//         {list}
//       </ul>
//     </>
//   )
// }