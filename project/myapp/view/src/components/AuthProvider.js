import {useState} from "react";
import {AuthContext} from "./AuthContext";

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);


  function signIn(user, callback) {
    setUser(user);
    callback()
  }

  function signOut() {
    setUser(null);
  }
  
  const value = {user, signIn, signOut}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>  
  )
}