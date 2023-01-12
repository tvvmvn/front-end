// ### pass component as props
// function C(props) {
//   const prop1 = props.prop1;

//   return <li>{prop1}</li>
// }

// function Foo() {
//   return <span style={{textDecoration: "underline"}}>Foo</span>
// }

// function Bar() {
//   return <span>Bar</span>
// }

// function Baz() {
//   return <span>Baz</span>
// }

// function App() {

//   return (
//     <>
//       <h1>App</h1>
//       <ul>
//         <C prop1={<Foo />} />
//         <C prop1={<Bar />} />
//         <C prop1={<Baz />} />
//       </ul>
//     </>  
//   )
// }

// Q. pass component as props
// function Beer(props) {
//   const beer = props.beer;

//   return (
//     <div style={{borderTop: "1px solid"}}>
//       {beer}
//     </div>  
//   )
// }

// function DutchBeer() {
//   return (
//     <ul>
//       <li>Name: Heineken</li>      
//       <li>Origin: Netherlands</li>
//       <li>Available: Yes</li>
//     </ul>
//   )
// }

// function IrishBeer() {
//   return (
//     <ul>
//       <li>Name: Guinness</li>      
//       <li>Origin: Ireland</li>
//       <li>Available: No</li>
//     </ul>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Beers</h1>
//       <Beer beer={<DutchBeer />} />
//       <Beer beer={<IrishBeer />} />
//     </>  
//   )
// }