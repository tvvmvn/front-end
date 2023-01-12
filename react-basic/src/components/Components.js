


export default function Components() {

  return (
    <>
      <h1>Components</h1>
      
      <p>
        independent and reusable pieces to build completex UIs.
        2 types of components: function components, class components
      </p>

    </>  
  )
}

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