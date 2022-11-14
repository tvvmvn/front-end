import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
      <div className="flex h-36 items-end mb-3">
        <h1 className="text-2xl">Sign up</h1>
      </div>
      <div className="mb-2">
        <label htmlFor="" className="block">Username</label>
        <input
          type="text"
          name="username"
          className="border w-full p-1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="" className="block">Email</label>
        <input
          type="text"
          name="email"
          className="border w-full p-1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="" className="block">Password</label>
        <input
          type="text"
          name="username"
          className="border w-full p-1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="" className="block">Password confirm</label>
        <input
          type="text"
          name="username"
          className="border w-full p-1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <button 
          type="submit"
          className="border border-blue-500 text-blue-500 w-full p-1 disabled:opacity-[0.2]"
          disabled={!newUser.username}
        >
          Submit
        </button>
      </div>
      <div className="">
        <Link to="/accounts/login" className="text-blue-500">Login</Link>
      </div>
      {error && <ErrorMessage error={error} />}
    </form>
  )
}