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

// const DataContext = createContext();

// function DataProvider({children}) {

//   const [data, setData] = useState([]);
//   const [skip, setSkip] = useState(0);

//   useEffect(() => {
//     setData([...data, Math.random()]);
//   }, [skip])

//   const value = {data, setData, skip, setSkip}

//   return (
//     <DataContext.Provider value={value}>
//       {children}
//     </DataContext.Provider>  
//   )
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   const {data, setData, skip, setSkip} = useContext(DataContext);

//   console.log(data);

//   const list = data.map(item => <li key={item}>{item}</li>)

//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         {list}
//       </ul>
//       <button onClick={() => setSkip(skip + 1)}>Load more</button>
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
//       <DataProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/posts" element={<Posts />} />
//           <Route path="/post/:postId" element={<Post />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </DataProvider>
//     </Router>  
//   )
// }