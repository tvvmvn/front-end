export default function Beers() {}

// # Beer form: create

// const initialBeers = [
//   {id: "b1", name: "Heineken"},
// ];

// function App() {
//   const [beers, setBeers] = useState(initialBeers);
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newBeer = {id: Math.random(), name};
//     const updatedBeers = [...beers, newBeer];
//     setBeers(updatedBeers);

//     setName("");
//   }

//   function handleChange(e) {
//     const name = e.target.value;
//     setName(name);
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name}
//     </li>
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Guinness"
//           onChange={handleChange}
//           value={name}
//         />
//         <button
//           type="submit"
//           disabled={!name}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {beerList}
//       </ul>
//     </>  
//   )
// }

// # Beer form: delete

// const initialBeers = [
//   {id: "b1", name: "Heineken"},
//   {id: "b2", name: "Guinness"},
//   {id: "b3", name: "Kloud"}
// ];

// function App() {
//   const [beers, setBeers] = useState(initialBeers);

//   function deleteBeer(beerId) {
//     const updatedBeers = beers.filter(beer => {
//       if (beer.id!==beerId) {
//         return beer;
//       }
//     })

//     setBeers(updatedBeers);
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={() => deleteBeer(beer.id)}>Delete</button>
//     </li>  
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <form>
//         <input
//           type="text"
//           placeholder="Guinness"
//           disabled={true}
//         />
//         <button
//           type="submit"
//           disabled={true}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// # Beer form: update

// const initialBeers = [
//   {id: "b1", name: "Heineken", available: true},
//   {id: "b2", name: "Guinness", available: false},
//   {id: "b3", name: "Kloud", available: true}
// ];

// function App() {
//   const [beers, setBeers] = useState(initialBeers);

//   function editBeer(beerId) {
//     const editedBeers = beers.map(beer => {
//       if (beer.id===beerId) {
//         return {...beer, available: !beer.available}
//       }
//       return beer;
//     })

//     setBeers(editedBeers);
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name} {" "}
//         <button onClick={() => editBeer(beer.id)}>
//           {beer.available ? "Available" : "Unavailable"}
//         </button>
//     </li>   
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <form>
//         <input
//           type="text"
//           placeholder="Guinness"
//           disabled={true}
//         />
//         <button
//           type="submit"
//           disabled={true}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// # Beer form

// const initialBeers = [
//   {id: "b1", name: "Heineken", available: true},
//   {id: "b2", name: "Guinness", available: false},
//   {id: "b3", name: "Kloud", available: true}
// ];

// function App() {
//   const [beers, setBeers] = useState(initialBeers);
//   console.log(beers);

//   function addBeer(name) {
//     const newBeer = {id: Math.random(), name, available: true};

//     const updatedBeers = [...beers, newBeer];
//     setBeers(updatedBeers);
//   }

//   function editBeer(beerId) {
//     const editedBeers = beers.map(beer => {
//       if (beer.id===beerId) {
//         return {...beer, available: !beer.available}
//       }
//       return beer;
//     })

//     setBeers(editedBeers);
//   }

//   function deleteBeer(beerId) {
//     const updatedBeers = beers.filter(beer => {
//       if (beer.id!==beerId) {
//         return beer;
//       }
//     })

//     setBeers(updatedBeers);
//   }

//   const beerList = beers.map(beer => (
//     <Beer 
//       key={beer.id} 
//       beer={beer} 
//       editBeer={editBeer}
//       deleteBeer={deleteBeer}
//     /> 
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <Form addBeer={addBeer} />
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// function Form({addBeer}) {
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     addBeer(name);
//     setName("");
//   }

//   function handleChange(e) {
//     const name = e.target.value;
//     setName(name);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Guinness"
//         onChange={handleChange}
//         value={name}
//       />
//       <button
//         type="submit"
//         disabled={!name}
//       >
//         Add
//       </button>
//     </form>  
//   )
// }

// function Beer({beer, editBeer, deleteBeer}) {
//   return (
//     <li>
//       {beer.name} 
//       <div>
//         <button onClick={() => deleteBeer(beer.id)}>
//           Delete
//         </button>
//         <button onClick={() => editBeer(beer.id)}>
//           {beer.available ? "Available" : "Unavailable"}
//         </button>
//       </div>
//     </li>   
//   )
// }

// # Beer form
// const initialBeers = [
//   {id: "b1", name: "Heineken", available: true},
//   {id: "b2", name: "Guinness", available: false},
//   {id: "b3", name: "Kloud", available: true}
// ];

// function App() {
//   const [beers, setBeers] = useState(initialBeers);
//   const [name, setName] = useState("");

//   console.log(beers);

//   function handleSubmit(e) {
//     e.preventDefault();
//     addBeer(name);
//     setName("");
//   }

//   function handleChange(e) {
//     const name = e.target.value;
//     setName(name);
//   }

//   function addBeer(name) {
//     const newBeer = {id: Math.random(), name, available: true};

//     const updatedBeers = [...beers, newBeer];
//     setBeers(updatedBeers);
//   }

//   function editBeer(beerId) {
//     const editedBeers = beers.map(beer => {
//       if (beer.id===beerId) {
//         return {...beer, available: !beer.available}
//       }
//       return beer;
//     })

//     setBeers(editedBeers);
//   }

//   function deleteBeer(beerId) {
//     const updatedBeers = beers.filter(beer => {
//       if (beer.id!==beerId) {
//         return beer;
//       }
//     })

//     setBeers(updatedBeers);
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name} 
//       <div>
//         <button onClick={() => deleteBeer(beer.id)}>
//           Delete
//         </button>
//         <button onClick={() => editBeer(beer.id)}>
//           {beer.available ? "Available" : "Unavailable"}
//         </button>
//       </div>
//     </li> 
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Guinness"
//         onChange={handleChange}
//         value={name}
//       />
//       <button
//         type="submit"
//         disabled={!name}
//       >
//         Add
//       </button>
//     </form>  
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }