import { Suspense, useEffect, useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { Loading, ErrorMessage, SuccessMessage } from "./Progress";

export default function Login() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: localStorage.getItem("email") || "",
    password: ""
  });
  const [passwordType, setPasswordType] = useState("password");

  const [isLoaded, setIsLoaded] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoaded(false);
    setError(null)

    const formData = JSON.stringify(user);

    fetch(`http://localhost:3000/accounts/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      localStorage.setItem("email", user.email);
      auth.signIn(data, () => navigate("/", { replace: true }));
    })
    .catch(error => {
      if (error.status === 401) {
        return setError("Check email or password");
      }
      setError("failed to process")
    })
    .finally(() => setIsLoaded(true))
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser({...user, [name]: value});
  }

  function togglePassword() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  return (
    <div className="flex justify-center h-96 items-end">
      <form className="w-60" onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-3">My App</h1>
        <div className="mb-2">
          <label htmlFor="email" className="block font-bold">Email</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            className="border w-full p-1 outline-none"
            value={user.email} 
            onChange={handleChange} 
            autoComplete="off"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="block font-bold">Password</label>
          <div className="relative">
            <input 
              type={passwordType}
              name="password"
              id="password"
              className="border w-full py-1 pl-1 pr-16 outline-none"
              value={user.password}
              onChange={handleChange}
              autoComplete="off"
            />
            <div className="absolute top-0 right-0 bottom-0">
              <button 
                type="button"
                className="h-full flex items-center px-2"
                onClick={togglePassword}
              >
                {passwordType === "password" ? "show" : "hide"}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <button 
            className="border w-full p-1 disabled:text-gray-300" 
            type="submit" 
            disabled={!user.email.trim() || !user.password.trim()}
          >
            Submit
          </button>
        </div>
        <div className="">
          <Link to="/accounts/signup">Create Account</Link>
        </div>
        <div className="text-center">
          <small>2022 &copy; myapp</small>
        </div>
      </form>


      <Loading isLoaded={isLoaded} />
      <ErrorMessage error={error} />
    </div>
  )
}
