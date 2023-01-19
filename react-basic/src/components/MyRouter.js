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

  1 Basic Router
  2 Router with authorization

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
  const params = useParams();
  const postId = params.postId;

  // Send to server
  console.log('postId:', postId);

  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
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
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post/:postId" element={<Post />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}



/*
  2 Router with auth

  AuthProvider maintain user(state).
  user is accessible from AuthProvider's children.
  Post is protected page (authorization is required).
  login update user state.
  Authorization completed.
*/

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
//     <>
//       <nav>
//         <ul> 
//           <li>
//             <Link to="/router">Home</Link>
//           </li>
//           <li>
//             <Link to="/router/posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="/router/login">Login</Link>
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
//     </>
//   )
// }