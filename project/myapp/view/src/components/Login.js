import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";
import {fetchUsers} from "./fakeApi";

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    fetchUsers(user)
    .then(data => {
      setUser(data)
    })

    auth.signIn(user, () => navigate("/", {replace: true}))
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
            Username
            <input type="text" name="username" onChange={handleChange} required />
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