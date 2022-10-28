import {useEffect, useState} from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({children}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user`, {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      setUser(data)
    })
    .catch(error => {
      if (error.status === 401) {
        return;
      }
      setError(error);
    })
    .finally(() => setIsLoaded(true))
  }, [])

  function signIn(data, callback) {
    setUser(data.user);
    localStorage.setItem("token", data.token);
    callback()
  }

  function signOut() {
    setUser(null);
  }
  
  const value = {user, signIn, signOut}

  if (error) {
    return <p>Error</p>
  } 
  if (!isLoaded) {
    return <p>Loading...</p>
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>  
  )
}