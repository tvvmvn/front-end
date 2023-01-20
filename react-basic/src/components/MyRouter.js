import {createContext, useContext, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";

export default function MyRouter() {

  return (
    <>
      <p>React Router</p>
      <App />
    </>  
  )
}

/*

  React Router

  1 What is React Router
    perform work for request(path)
    install/import react-router-dom 

  2 Basic Router
  3 Router with authorization
    Basic Router + auth

    basic > auth provider > auth required > login > logout

*/


function Home() {
  return <h1>Home</h1>
}

function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to="/router/post/p1">Post 1</Link>
        </li>
        <li>
          <Link to="/router/post/p2">Post 2</Link>
        </li>
      </ul>
    </>  
  )
}

function Post() {
  /*
    # useParams Hook
    access parameters passed in url
  */ 
  
  const params = useParams();
  const postId = params.postId;

  return (
    <>
      <h1>Title</h1>
      <p>{postId}</p>
    </>  
  )
}

function About() {
  return <h1>About</h1>
}

function NotFound() {
  return <h1>404 NotFound</h1>
}

function App() {
  return (
    <>
      <nav>
        <ul> 
          <li>
            <Link to="/router/">Home</Link>
          </li>
          <li>
            <Link to="/router/about">About</Link>
          </li>
          <li>
            <Link to="/router/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post/:postId" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}



/*
  2 Router with auth
*/

// function App() {
  
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="post/:postId" element={
//             <AuthRequired>
//               <Post />
//             </AuthRequired>
//           } />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </AuthProvider>
//   )
// }

// const AuthContext = createContext();

// function AuthProvider({children}) {
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

// function Layout() {
//   const auth = useContext(AuthContext);

//   return (
//     <>
//       <nav>
//         <ul> 
//           <li>
//             <Link to="/router">Home</Link>
//           </li>
//           <li>
//             <Link to="/router/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       {auth.user ? (
//         <p>
//           Hi, {auth.user} {" "} 
//           <button onClick={auth.signOut}>Log out</button>
//         </p> 
//       ) : (
//         <p>Not logged in </p>
//       )}

//       <Outlet />
//     </>
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
//           <Link to="/router/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/router/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>  
//   )
// }

// function AuthRequired(props) {
//   const auth = useContext(AuthContext);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     auth.signIn(formData.get('username'))
//   }

//   if (!auth.user) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input type="text" name="username" required />
//         <button type="submit">Login</button>
//       </form>  
//     )
//   }

//   return props.children;
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

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }