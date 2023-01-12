

export default function Form() {
  return (
    <>
      <h1>Form</h1>  
      <p>

      </p>
    </>  
  )
}


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


// Live search

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