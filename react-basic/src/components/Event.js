


export default function Event() {

  return (
    <>
      <h1>Event</h1>
      <p>
        add attribute on element that trigger event:
        onEventName=eventHandler
      </p>

    </>  
  )
}


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