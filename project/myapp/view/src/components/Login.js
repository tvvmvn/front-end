import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/accounts/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      auth.signIn(data, () => navigate("/", {replace: true}));
    })
    .catch(error => {
      if (error.status === 401) {
        return alert("User not found");
      }
      alert("Try later");
    })
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser({...user, [name]: value})
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="">
            Email
            <input type="text" name="email" onChange={handleChange} required />
          </label>
        </div>
        <div className="">
          <label htmlFor="">  
            Password
            <input type="text" name="password" onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>  
  )
}