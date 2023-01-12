export default function FetchData() {

  return (
    <>
      <h1>Fetch Data</h1>
      <p>
        useEffect, fakeApi
      </p>

    </>   
  )
}


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


