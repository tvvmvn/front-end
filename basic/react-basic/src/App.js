import React, {useState, useEffect, useRef, useContext, createContext} from 'react';
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

//   const prop1 = props.prop1;

//   return <li>{prop1}</li>  
// }

// function App() {
//   return (
//     <>
//       <h1>App</h1>
//       <ul>
//         <C prop1="Foo" />
//         <C prop1="Bar" />
//         <C prop1="Baz" />
//       </ul>  
//     </>
//   )
// }

// Q. Basic props
// function Beer(props) {
//   const name = props.name;
//   const origin = props.origin;

//   return <li>{name}, {origin}</li>
// }

// function App() {
//   return (
//     <>
//       <h1>Beers</h1>
//       <ul>
//         <Beer name="Heineken" origin="Netherlands" />
//         <Beer name="Guinness" origin="Ireland" />
//         <Beer name="Asahi" origin="Japan" />
//       </ul>
//     </>
//   )
// }

// Object props
// function C(props) {
//   console.log(props);

//   const o = props.o;

//   return (
//     <ul>
//       <li>Prop1: {o.prop1}</li>
//       <li>Prop2: {o.prop2}</li>
//       <li>Prop3: {o.prop3}</li>
//     </ul>  
//   )
// }

// const o = {prop1: "Foo", prop2: "Bar", prop3: "Baz"}

// function App() {
//   return (
//     <>
//       <h1>O</h1>
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
//       <h1>Beer</h1>
//       <Beer beer={irishBeer} />
//     </>  
//   )
// }

// Q. Component loop
// const beers = [
//   {name: "Heineken", origin: "Netherlands"},
//   {name: "Guinness", origin: "Ireland"},
//   {name: "Asahi", origin: "Japan"},
// ]

// function Beer(props) {

//   const beer = props.beer;

//   return <li>{beer.name}, {beer.origin}</li>
// }

// function App() {

//   const list = beers.map((beer, index) => (
//     <Beer key={index} beer={beer} />  
//   ));

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
// function C(props) {
//   const children = props.children;
//   return (
//     <fieldset>
//       <legend>C</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Foo() {
//   return <div>Foo</div>
// }

// function App() {
//   return (
//     <>
//       <h1>App</h1>
//       <C>
//         <Foo />
//       </C>
//     </>  
//   )
// }

// Q. children props 
// function Beer(props) {
//   const children = props.children;
//   return (
//     <div style={{borderTop: "1px solid"}}>
//       {children}
//     </div>  
//   )
// }

// function DutchBeer() {
//   return (
//     <>
//       <h3>Heineken</h3>
//       <p>Dutch beer</p>
//     </>
//   )
// }

// function IrishBeer() {
//   return (
//     <>
//       <h3>Guinness</h3>
//       <p>Irish beer</p>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Beers</h1>
//       <Beer>
//         <DutchBeer />
//       </Beer>
//       <Beer>
//         <IrishBeer />
//       </Beer>
//     </>
//   )
// }

// ### Nested children props

// function Foo(props) {
//   const children = props.children;

//   return (
//     <fieldset>
//       <legend>Foo</legend>
//       {children}
//     </fieldset>
//   )
// }
// function Bar(props) {
//   const children = props.children;

//   return (
//     <fieldset>
//       <legend>Bar</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Baz() {
//   return <div>Baz</div>
// }

// function App() {
//   return (
//     <Foo>
//       <Bar>
//         <Baz />
//       </Bar>
//     </Foo>  
//   )
// }

// children
// function Foo() {
//   return <li>Foo</li>
// }
// function Bar() {
//   return <li>Bar</li>
// }
// function Baz() {
//   return <li>Baz</li>
// }
// function C(props) {
//   const children = props.children;
//   return <ul>{children}</ul>
// }
// function App() {
  
//   return (
//     <>
//       <h1>App</h1>
//       <C>
//         <Foo />
//         <Bar />
//         <Baz />
//       </C>
//     </>  
//   )
// }

// Q. Build component tree as children props
// function Beers(props) {
//   const children = props.children;
//   return (
//     <fieldset>
//       <legend>Beers</legend>
//       {children}
//     </fieldset>
//   )
// }

// function EuropeanBeers(props) {
//   const children = props.children;
//   return (
//     <fieldset>
//       <legend>European beers</legend>
//       <ul>
//         {children}
//       </ul>
//     </fieldset>
//   )
// }

// function AsianBeers(props) {
//   const children = props.children;
//   return (
//     <fieldset>
//       <legend>Asian beers</legend>
//       <ul>
//         {children}
//       </ul>
//     </fieldset>
//   )
// } 

// function DutchBeer() {
//   return <li>Heineken</li>
// }

// function IrishBeer() {
//   return <li>Guinness</li>
// }

// function JapaneseBeer() {
//   return <li>Asahi</li>
// }

// function KoreanBeer() {
//   return <li>Kloud</li>
// }
  
// function App() {
//   return (
//     <Beers>
//       <EuropeanBeers>
//         <DutchBeer />
//         <IrishBeer />
//       </EuropeanBeers>
//       <AsianBeers>
//         <JapaneseBeer />
//         <KoreanBeer />
//       </AsianBeers>
//     </Beers>
//   )
// }

// ### pass props to children 

// const FooContext = createContext();

// function Foo(props) {
//   const children = props.children;

//   // local scope
//   const foo = "FOO";

//   return (
//     <fieldset>
//       <legend>Foo</legend>
//       <FooContext.Provider value={foo}>
//         {children}
//       </FooContext.Provider>
//     </fieldset>  
//   )
// }

// function Bar(props) {
//   const children = props.children;
//   return (
//     <fieldset>
//       <legend>Bar</legend>
//       {children}
//     </fieldset>  
//   )
// }

// function Baz() {
//   const foo = useContext(FooContext);

//   return <div>{foo}</div>
// }

// function App() {
//   return (
//     <Foo>
//       <Bar>
//         <Baz />
//       </Bar>
//     </Foo>  
//   )
// }

// Q. Beers context
// const BeersContext = createContext();

// function Beers({children}) {

//   const availability = {
//     guinness: false,
//     asahi: true,
//     kloud: true
//   }

//   return (
//     <>
//       <h1>Beers &#127866;</h1>
//       <BeersContext.Provider value={availability}>
//         {children}
//       </BeersContext.Provider>
//     </> 
//   )
// }

// function EuropeanBeers({children}) {
//   return (
//     <div>
//       <h2>European beers</h2>
//       {children}
//     </div>
//   )
// }

// function IrishBeer() {
//   const availability = useContext(BeersContext);

//   return (
//     <div>
//       <h3>GUINNESS</h3>
//       <div>Available: {availability.guinness ? "Yes" : "No"}</div>
//     </div>  
//   )
// }

// function AsianBeers({children}) {
//   return (
//     <div>
//       <h2>Asian beers</h2>
//       {children}
//     </div>  
//   )
// }

// function JapaneseBeer() {
//   const availability = useContext(BeersContext);

//   return (
//     <div>
//       <h3>ASAHI</h3>
//       <div>Available: {availability.asahi ? "Yes" : "No"}</div>
//     </div>  
//   )
// }

// function KoreanBeer() {
//   const availability = useContext(BeersContext);

//   return (
//     <div>
//       <h3>KLOUD</h3>
//       <div>Available: {availability.kloud ? "Yes" : "No"}</div>
//     </div>  
//   )
// }

// function App() {
//   return (
//     <Beers>
//       <EuropeanBeers>
//         <IrishBeer />
//       </EuropeanBeers>
//       <AsianBeers>
//         <JapaneseBeer />
//         <KoreanBeer />
//       </AsianBeers>
//     </Beers>
//   )
// }

// # Event
// attribute: onEventName={callback}

// ### click event
// function App() {
//   function handleClick(e) {
//     console.log(e.target);
//   }

//   return (
//     <>
//       <h1>click event</h1>
//       <button onClick={handleClick}>Button</button>
//     </>  
//   )
// }

// function App() {
//   function handleClick(foo) {
//     console.log(foo);
//   }

//   return (
//     <>
//       <h1>click event</h1>
//       <button onClick={() => handleClick("Foo")}>Button</button>
//     </>  
//   )
// }

// function App() {
//   function handleClick(x) {
//     console.log(x)
//   }
//   return (
//     <>
//       <h1>Accordion</h1>
//       <button onClick={() => handleClick("Foo")}>Foo</button>
//       <button onClick={() => handleClick("Bar")}>Bar</button>
//       <button onClick={() => handleClick("Baz")}>Baz</button>
//     </>  
//   )
// }

// ### change event
// function App() {
//   function handleChange(e) {
//     console.log(e.target.value);
//   }

//   return (
//     <>
//       <h1>change</h1>
//       <input type="text" onChange={handleChange} />
//     </>  
//   )
// }

// Q. multiple change event
// function App() {

//   function handleChange(e) {
//     const name = e.target.name;
//     const value = e.target.value;

//     console.log(name, value)
//   }

//   return (
//     <form>
//       <h1>Login</h1>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input 
//           type="text" 
//           id="username"
//           name="username"       
//           autoComplete="off"
//           onChange={handleChange} 
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input 
//           type="password" 
//           id="password"
//           name="password" 
//           autoComplete="off"
//           onChange={handleChange} 
//           />
//       </div>
//     </form>  
//   )
// }

// ### submit event
// function App() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Form submitted");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Form</h1> 
//       <p>...</p>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// # DOM UPDATE
// function App() {
//   // const [state, setState] = useState(initialValue);
//   // state: a variable in Component
//   // setState: a method that updates state.
//   // initialValue: initial value of state.
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(1)}>
//         Button
//       </button>
//     </>  
//   )
// }

// DOM Update without state Hook.
// function App() {
//   let count = 0;

//   function handleClick() {
//     count = 1;
//     console.log(count);
//   }

//   // DOM을 업데이트하기 위해서는 VirtualDOM을 다시 return해야 한다
//   // VirtualDOM을 다시 return하기 위해서는 App컴포넌트를 다시 실행해야 한다
//   // setState는 App컴포넌트를 다시 실행한다
//   // DOM이 업데이트된다.

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Button</button>
//     </>  
//   )
// }

// function App() {
//   console.log("executed");
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Add
//       </button>
//     </>  
//   )
// }

// Q. Subscribe Button
function App() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <>
      <h1>Subscribe</h1>
      <button onClick={() => setSubscribe(!subscribe)}>
        {!subscribe ? "Subscribe" : "Subscribed"}
      </button>
    </>  
  )
}

// function App() {
//   const [arr, setArr] = useState([]);

//   function handleClick(e) {
//     const newItem = Math.random();
//     setArr([...arr, newItem]);
//   }

//   const list = arr.map((item, index) => (
//     <li key={index}>{item}</li>  
//   ))
  
//   return (
//     <>
//       <h1>List</h1>
//       <button onClick={handleClick}>
//         Add
//       </button>
//       <ul>
//         {list}
//       </ul>
//     </>  
//   )
// }