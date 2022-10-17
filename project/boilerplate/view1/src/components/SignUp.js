import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ErrorMessage } from "./Progress";

export default function SignUp() {
  const [newUser, setNewUser] = useState({})
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(null)

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = JSON.stringify(newUser);

    fetch("http://localhost:3000/accounts/register/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
    })
    .catch(error => {
      if (error.status === 400) {
        return setError("..")
      } 
      setError("failed to sign up");
    })
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setNewUser({...newUser, [name]: value})
  }

  return (
    <>
      <h1 className="text-2xl mb-3">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            className="border"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            className="border"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="username"
            className="border"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="">Password confirm</label>
          <input
            type="text"
            name="username"
            className="border"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button 
            type="submit"
            className="border disabled:text-gray-300"
            disabled={!newUser.username}
          >
            Submit
          </button>
        </div>
      </form>

      <ErrorMessage error={error} />
    </>  
  )
}