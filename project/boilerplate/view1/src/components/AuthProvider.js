import { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import ErrorPage from "./NotFound";
import wrapPromise from "./wrapPromise";

function fetchData() {
  const promise = fetch(`http://localhost:3000/user`, {
    headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  })

  return wrapPromise(promise);
}

const resource = localStorage.getItem("token") && fetchData();

export default function AuthProvider({ children }) {
  const initialUser = resource && resource.read();
  const [user, setUser] = useState(initialUser);

  function signIn(data, callback) {
    setUser(data.user);
    localStorage.setItem("token", data.token);
    
    setTimeout(() => {
      callback();
    }, 100)
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("token");
  }

  const value = { user, signIn, signOut }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

