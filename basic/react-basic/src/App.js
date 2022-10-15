import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export default App;

// Declarative VS Imperative
// function App() {
//   const [items, setItems] = useState([
//     Math.random()
//   ]);


//   function handleClick() {
//     setItems([...items, Math.random()])
//   }

//   return (
//     <>
//       <h2>Declarative</h2>
//       <ul>
//         {items.map(item => <li key={item}>{item}</li>)}
//       </ul>
//       <button onClick={handleClick}>Add</button>
//     </>
//   )
// }

// # JSX Syntax
// A Syntax extension to JavaScript
// Declarative like HTML
// BABEL compile JSX to JavaScript Object.

// function App() {
//   return <h1>Hello React</h1>
// }

// Without JSX
// function App() {
//   const h1 = React.createElement('h1', 'null', 'Hello React');
//   return h1;
// }

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
// DOM에 별도의 노드를 추가하지 않고 자식을 그룹화 할 수 있다
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

// ### JSX inline style attribute
// pass the style object to style attribute

// function App() {
//   return (
//     <>
//       <h1>JSX inline Styles</h1>
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
//       <div>{"Baz".valueOf()}</div>
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
//     color: "#ddd"
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

// ### JSX Condition
// Logical operator, Ternary operator
// && (AND): expr1 && expr2
// || (OR): expr1 || expr2
// ! (NOT): !expr
// Ternary: condition ? expr if true : expr if false

// function App() {

//   // &&
//   console.log(true && 1); // 1
//   console.log(1 && 0); // 0
//   console.log(0 && 1); // 0
//   console.log(0 && false); // 0

//   // ||
//   console.log(1 || true); // 1
//   console.log(1 || 0); // 1
//   console.log(0 || 1); // 1
//   console.log(false || 0); // 0

//   return (
//     <>
//       <h2>JSX condition</h2>
//       <div>{true && "Foo"}</div>
//       <div>{false || "Bar"}</div>
//       <div>{!true ? "" : "Baz"}</div>
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
// const beers = [
//   {name: "Heineken", origin: "Netherlands"},
//   {name: "Guinness", origin: "Ireland"},
//   {name: "Asahi", origin: "Japan"}
// ]

// function App() {

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

// # COMPONENTS
// independent and reusable pieces to build completex UIs.
// 2 types of components: function components, class components

// ### Component Basic
// Components must starts with Uppercase letter.
// function components is basically function
// function App() {
//   // expression, code
//   console.log("App Loaded!");

//   // return VirtualDOM
//   return <h1>App</h1>
// }

/// ### Components Composition
// function Foo() {
//   return <li>Foo</li>
// }
// function Bar() {
//   return <li>Bar</li>
// }
// function Baz() {
//   return <li>Baz</li>
// }

// function App() {

//   return (
//     <ul>
//       <Foo />
//       <Bar />
//       <Baz />
//     </ul>  
//   )
// }

// Q. Components composition 
// function DutchBeer() {
//   return (
//     <tr>
//       <td>Heineken</td>
//       <td>Netherlands</td>
//       <td>Yes</td>
//     </tr>
//   )
// }

// function IrishBeer() {
//   return (
//     <tr>
//       <td>Guinness</td>
//       <td>Ireland</td>
//       <td>No</td>
//     </tr>  
//   )
// }

// function JapaneseBeer() {
//   return (
//     <tr>
//       <td>Asahi</td>
//       <td>Japan</td>
//       <td>Yes</td>
//     </tr>  
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Beers</h1>
//       <table>        
//         <thead>
//           <tr>
//             <th>Brand</th>
//             <th>Origin</th>
//             <th>Available</th>
//           </tr>
//         </thead>
//         <tbody>
//           <DutchBeer />
//           <IrishBeer />
//           <JapaneseBeer />
//         </tbody>
//       </table>
//     </>  
//   )
// }

// ### props
// parameters to pass components

// Basic
// function C(props) {
//   console.log(props);

//   const foo = props.foo;
//   const bar = props.bar;
//   const baz = props.baz;

//   return (
//     <>
//       <li>{foo}</li>  
//       <li>{bar}</li>  
//       <li>{baz}</li>
//     </>
//   )
// }

// function App() {

//   return (
//     <ul>
//       <C foo="Foo" bar="Bar" baz="Baz" />
//     </ul>  
//   )
// }

// Q. Basic props
// function Beer(props) {
//   const name = props.name;
//   const origin = props.origin;
//   const available = props.available;

//   return (
//     <ul>
//       <li>Name: {name}</li>
//       <li>Origin: {origin}</li>
//       <li>Available: {available ? "Yes" : "No"}</li>
//     </ul>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Beers</h1>
//       <Beer
//         name="Guinness"
//         origin="Ireland"
//         available={false}
//       />
//     </>
//   )
// }

// Object props
// function C(props) {
//   console.log(props);

//   const o = props.o;

//   return (
//     <ul>
//       <li>{o.prop1}</li>
//       <li>{o.prop2}</li>
//       <li>{o.prop3}</li>
//     </ul>  
//   )
// }

// const o = {prop1: "Foo", prop2: "Bar", prop3: "Baz"}

// function App() {

//   return (
//     <>
//       <h1>App</h1>
//       <C o={o} />  
//     </>
//   )
// }

// Q. Object props
// function Beer(props) {
//   const beer = props.beer;

//   return (
//     <ul>
//       <li>Name: {beer.name}</li>
//       <li>Origin: {beer.origin}</li>
//       <li>Available: {beer.available ? "Yes" : "No"}</li>
//     </ul>  
//   )
// }

// const irishBeer = {name: "Guinness", origin: "Ireland", available: false};

// function App() {

//   return (
//     <>
//       <h1>Beers</h1>
//       <Beer beer={irishBeer} />  
//     </>
//   )
// }

// ### Component reusage
// const arr = ["Foo", "Bar", "Baz"];

// function C(props) {
//   const item = props.item;

//   return <li>{item}</li>
// }

// function App() {

//   const list = arr.map((item, index) => (
//     <C key={index} item={item} />  
//   ))

//   return (
//     <ul>
//       {list}
//     </ul>  
//   )
// }

// Q. Reuse components.
// const beers = [
//   {name: "Heineken", origin: "Netherlands"},
//   {name: "Guinness", origin: "Ireland"},
//   {name: "Kloud", origin: "S.Korea"},
// ]

// function Beer(props) {
//   const beer = props.beer;

//   return <li>{beer.name}, {beer.origin}</li>
// }

// function App() {

//   const list = beers.map((beer, index) => (
//     <Beer 
//       key={index} 
//       beer={beer} 
//     />  
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <ul>
//         {list}
//       </ul>
//     </>  
//   )
// }

// ### children props
