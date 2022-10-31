import {useState} from "react";
import {Link} from "react-router-dom";

export default function () {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (password !==passwordConfirm) {
      return setError("Password not match");
    }

    const formData = {username, email, password};

    fetch(`http://localhost:3000/accounts/register`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      if (error.status===400) {
        return setError("Username and email must be unique");
      }
      setError("try it later");
    })
  }

  function validate() {
    if (!username) {
      return true;
    }
    if (!email) {
      return true;
    }
    if (!password) {
      return true
    }
    if (!passwordConfirm) {
      return true
    }
    return false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>

      <div className="mb-2">
        <label htmlFor="">Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-2">
        <label htmlFor="">Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-2">
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="mb-2">
        <label htmlFor="">Password confirm</label>
        <input type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
      </div>
      <div className="mb-2">
        <button 
          type="submit"
          disabled={validate()}
        >
          Submit
        </button>
      </div>
      <p>
        {error}
      </p>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </form>
  )
}