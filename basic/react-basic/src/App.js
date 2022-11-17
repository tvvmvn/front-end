import React, {useState, useEffect, useRef, useContext, createContext, Children} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";
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

// function props
// function App() {
//   const [count, setCount] = useState(0)

//   function f(e) {
//     console.log(".")
//   }

//   return (
//     <>
//       <h1>App</h1>
//       <Foo f={f} />
//     </>  
//   )
// }

// function Foo(props) {
//   console.log(props)

//   return (
//     <h3>Foo</h3>
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
// add attribute on element that trigger event:
// onEventName={eventHandler}

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

// # Manage DOM 
// function App() {
//   // const [state, setState] = useState(initialValue);
//   // state: a variable in Component
//   // setState: a method that updates state.
//   // initialValue: initial value of state.
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   )
// }

// DOM Update without state Hook.
// function App() {
//   let count = 0;

//   // DOM을 업데이트하기 위해서는 VirtualDOM을 다시 return해야 한다
//   // VirtualDOM을 다시 return하기 위해서는 App컴포넌트를 다시 실행해야 한다
//   // setState는 App컴포넌트를 다시 실행한다
//   // DOM이 업데이트된다.
//   function handleClick(e) {
//     count++;
//   }

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>Add</button>
//     </>  
//   )
// }

// function App() {
//   const initialTime = new Date().toLocaleTimeString();
//   const [time, setTime] = useState(initialTime);

//   setTimeout(() => {
//     const updatedTime = new Date().toLocaleTimeString();
//     setTime(updatedTime);
//   }, 1000)

//   return (
//     <>
//       <h1>Clock</h1>
//       <p>{time}</p>
//     </>  
//   )
// }

// Q. Count
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>  
//   )
// }

// Q. Subscribe
// function App() {
//   const [subscribe, setSubscribe] = useState(false);

//   return (
//     <>
//       <h1>Subscribe</h1>
//       <button onClick={() => setSubscribe(!subscribe)}>
//         {!subscribe ? "Subscribe" : "Subscribed"}
//       </button>
//     </>  
//   )
// }

// Q. Subscribe with Subscribers
// function App() {
//   const [subscribe, setSubscribe] = useState(false);
//   const [subscribers, setSubscribers] = useState(0);

//   function handleClick(subscribe) {
//     if (subscribe) {
//       setSubscribe(false);
//       setSubscribers(subscribers - 1)
//     } else {
//       setSubscribe(true);
//       setSubscribers(subscribers + 1)
//     }
//   }

//   return (
//     <>
//       <h1>Subscribe</h1>
//       <p>Subscriber: {subscribers}</p>
//       <button onClick={() => handleClick(subscribe)}>
//         {!subscribe ? "Subscribe" : "Subscribed"}
//       </button>
//     </>  
//   )
// }

// # Form handling
// function App() {
//   const [username, setUsername] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Hi,", username);
//     setUsername("");
//   }

//   function handleChange(e) {
//     const value = e.target.value;
//     const username = value.trim();
//     setUsername(username);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Login</h1>
//       <input 
//         type="text" 
//         onChange={handleChange} 
//         placeholder="Username"
//         value={username}
//       />
//       <button 
//         type="submit"
//         disabled={!username}
//       >
//         Submit
//       </button>
//     </form>  
//   )
// }

// Q. Password toggle
// function App() {
//   const [type, setType] = useState("password");

//   function handleClick() {
//     if (type==="password") {
//       setType("text")
//     } else {
//       setType("password")
//     }
//   }

//   return (
//     <form>
//       <h1>Login</h1>
//       <input 
//         type={type} 
//         placeholder="Password" 
//       />
//       <button 
//         type="button" 
//         onClick={handleClick}
//       >
//         {type==="password" ? "Show" : "Hide"}
//       </button>
//     </form>  
//   )
// }

// function App() {
//   const [beers, setBeers] = useState([]);

//   function handleChange(e) {
//     const name = e.target.value;

//     if (!name) {
//       setBeers([]);
//       return;
//     }

//     const DATA = [
//       {id: "b1", name: "Heineken"},
//       {id: "b2", name: "Guinness"},
//       {id: "b3", name: "Kloud"},
//       {id: "b4", name: "Asahi"},
//     ];

//     const updatedBeers = DATA.filter(beer => {
//       if (beer.name.startsWith(name)) {
//         return beer;
//       }
//     })

//     setBeers(updatedBeers);
//   }

//   const beerList = beers.map((beer, index) => (
//     <li key={index}>{beer.name}</li>  
//   ))

//   return (
//     <>
//       <h1>Live Search</h1>
//       <input 
//         type="text" 
//         onChange={handleChange} 
//         placeholder="Search"
//       />
//       <ul>
//         {beerList}
//       </ul>
//     </>  
//   )
// }

// # Drawer
// function App() {
//   const [active, setActive] = useState(false);

//   const style = {
//     position: "fixed",
//     bottom: "0",
//     left: "0",
//     width: "100%",
//     // dynamic style
//     maxHeight: active ? "100px" : "0",
//     backgroundColor: "#eee",
//     transition: "0.2s",
//   }

//   const drawer = (
//     <div style={style} onClick={() => setActive(false)}>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </div>
//   )

//   return (
//     <>
//       <h1>Drawer</h1>
//       <button 
//         onClick={() => setActive(true)}
//       >
//         Button
//       </button>
//       {drawer}
//     </>  
//   )
// }

// Q. Side bar
// function App() {
//   const [active, setActive] = useState(false);

//   const style = {
//     sideBar: {
//       position: "fixed", 
//       backgroundColor: "#fff", 
//       top: "0", 
//       left: active ? "0" : "-200px", 
//       zIndex: "1", 
//       width: "200px", 
//       height: "100%", 
//       transition: "0.2s"
//     },
//     overlay: {
//       position: "fixed",
//       top: "0",
//       left: "0",
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(0 0 0 / 0.2)",
//       display: active ? "block" : "none"
//     }
//   }

//   return (
//     <>
//       <h1>Navigation</h1>
//       <button
//         onClick={() => setActive(true)}
//       >
//         Button
//       </button>
//       {/* Navigation */}
//       <nav style={style.sideBar}>
//         <ul>
//           <li>list item</li>
//           <li>list item</li>
//           <li>list item</li>
//         </ul>
//       </nav>
//       {/* Overlay */}
//       <div
//         style={style.overlay}
//         onClick={() => setActive(false)}
//       >
//       </div>
//     </>  
//   )
// }

// # Carousel
// function App() {
//   const [index, setIndex] = useState(0);

//   console.log(index);

//   const images = ["foo.jpg", "bar.jpg", "baz.jpg"];

//   const container = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "#ddd",
//     display: "inline-flex",
//     transform: `translateX(-${index*100}px)`,
//     transition: "0.2s"
//   }

//   const item = {
//     width: "100%",
//     height: "100%",
//     border: "1px dashed",
//     flexShrink: "0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   }

//   const list = images.map(image => (
//     <div key={image} style={item}>
//       {image}
//     </div>
//   ))

//   return (
//     <>
//       <h1>Carousel</h1>

//       {/* Images */}
//       <div className="">
//         <h3>Images</h3>
//         <div className="container" style={container}>
//           {list}
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="">
//         <h3>Navigation</h3>
//         <button 
//           onClick={() => setIndex(index - 1)}
//           style={{visibility: index===0 && "hidden"}}
//           >
//             Prev
//           </button>
//         <button 
//           onClick={() => setIndex(index + 1)}
//           style={{visibility: index===2 && "hidden"}}
//           >
//             Next
//           </button>
//       </div>

//       {/* Indicator */}
//       <div className="">
//         <h3>Indicator</h3>
//         <div>
//           {images.map((image, dot) => (
//             <span 
//               key={dot} 
//               style={{color: dot===index && "red"}}
//             >
//               *
//             </span>  
//           ))}
//         </div>
//       </div>
//     </>  
//   )
// }

// # Router
// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>  
//   )
// }

// function Post() {
//   const params = useParams();
//   const postId = params.postId;

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>  
//   )
// }

// function Contact() {
//   return <h1>Contact</h1>
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul> 
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/post/:postId" element={<Post />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>  
//   )
// }

// # Router with auth
// AuthProvider maintain user(state).
// user is accessible from AuthProvider's children.
// Post is protected page (authorization is required).
// login update user state.
// Authorization completed.

// const AuthContext = createContext();

// function AuthProvider({children}) {
//   // user is accessible from its children.
//   const [user, setUser] = useState(null);

//   function signIn(username) {
//     setUser(username);
//   }

//   function signOut() {
//     setUser(null)
//   }

//   const value = {user, signIn, signOut};

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>  
//   )
// }

// function Post() {
//   const params = useParams();
//   const postId = params.postId;

//   const auth = useContext(AuthContext);
  
//   if (!auth.user) {
//     return <p>Unauthorized</p>
//   }

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>  
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// function Login() {
//   const auth = useContext(AuthContext);
//   const [username, setUsername] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     auth.signIn(username);
//   }

//   const loginTemplate = (
//     <form onSubmit={handleSubmit}>
//       <h1>Sign in</h1>
//       <input type="text" onChange={(e) => setUsername(e.target.value)} />
//       <button type="submit">Submit</button>
//     </form>
//   )

//   const logoutTemplate = (
//     <div>
//       <h1>Sign out</h1>
//       <p>{auth.user}</p>
//       <button onClick={auth.signOut}>Submit</button>
//     </div>
//   )

//   return auth.user ? logoutTemplate : loginTemplate;
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul> 
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="login">Login</Link>
//           </li>
//         </ul>
//       </nav>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="post/:postId" element={<Post />} />
//           <Route path="login" element={<Login />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AuthProvider>
//     </Router>  
//   )
// }

// # fetch data
// function App() {
//   const [count, setCount] = useState(0);

//   // useEffetch Hook
//   // work asynchronously

//   // use case
//   // useEffect(callback): excute callback whenever component is executed.
//   // useEffect(callback, []): excute callback only at first.
//   // useEffect(callback, [dep]): excute callback at first and whenever dependency is changed.
//   useEffect(() => {
//     const time = new Date().toLocaleTimeString();
//     console.log(time);
//   }, [])

//   return (
//     <>
//       <h1>App</h1>
//       <p>App is rendered for {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>  
//   )
// }

// preteding API Server returns data after 2 seconds.
// function fakeApi() {
//   const beer = [
//     {id: "b1", name: "Heineken"},
//     {id: "b2", name: "Guinness"},
//     {id: "b3", name: "Asahi"},
//   ];
  
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(beer)
//     }, 2000)
//   })

//   return promise;
// }

// function App() {
//   const [beers, setBeers] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     fakeApi()
//     .then(data => {
//       setBeers(data)
//     })
//     .catch(error => {
//       setError(error)
//     })
//     .finally(() => setIsLoaded(true))
//   }, [])

//   if (error) {
//     return <p>failed to fetch</p>
//   }
//   if (!isLoaded) {
//     return <p>fetching data...</p>
//   }
//   return (
//     <>
//       <h1>Beers</h1>
//       <ul>
//         {beers.map(beer => (
//           <li key={beer.id}>{beer.name}</li>  
//         ))}
//       </ul>
//     </>  
//   )
// }

const DataContext = createContext();

function DataProvider({children}) {

  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    setData([...data, Math.random()]);
  }, [skip])

  const value = {data, setData, skip, setSkip}

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>  
  )
}

function Home() {
  return <h1>Home</h1>
}

function Posts() {
  const {data, setData, skip, setSkip} = useContext(DataContext);

  console.log(data);

  const list = data.map(item => <li key={item}>{item}</li>)

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {list}
      </ul>
      <button onClick={() => setSkip(skip + 1)}>Load more</button>
    </>  
  )
}

function Post() {
  const params = useParams();
  const postId = params.postId;

  return (
    <>
      <h1>Post</h1>
      <p>{postId}</p>
    </>  
  )
}

function Contact() {
  return <h1>Contact</h1>
}

function NotFound() {
  return <h1>404 NotFound</h1>
}

function App() {
  return (
    <Router>
      <nav>
        <ul> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </Router>  
  )
}

