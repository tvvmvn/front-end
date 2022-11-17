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