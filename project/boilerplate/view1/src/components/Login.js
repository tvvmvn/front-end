import { Suspense, useEffect, useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { Loading, ErrorMessage, SuccessMessage } from "./Progress";

export default function Login() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoaded, setIsLoaded] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoaded(false);
    setError(null)

    const user = {email, password};

    fetch(`http://localhost:3000/accounts/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      localStorage.setItem("email", email);
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

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2000)
    }
  }, [error])

  return (
    <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>
      <div className="flex h-36 justify-center items-center mb-3">
        <h1 className="text-2xl">My App</h1>
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block">Email</label>
        <input 
          type="text" 
          name="email" 
          id="email" 
          className="border w-full p-1"
          value={email} 
          onChange={(e) => setEmail(e.target.value) } 
          autoComplete="off"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="password" className="block">Password</label>
        <input 
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          className="border w-full p-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="">
          <input type="checkbox" onChange={(e) => setShowPassword(!showPassword)} /> Show password
        </label>
      </div>

      <div className="mb-2">
        <button 
          className="border border-blue-500 text-blue-500 w-full p-1 disabled:opacity-[0.2]" 
          type="submit" 
          disabled={!email.trim() || !password.trim()}
        >
          Login
        </button>
      </div>
      <div className="mb-3">
        <Link to="/accounts/signup" className="text-blue-500">Create Account</Link>
      </div>
      <div className="text-center text-xs">
        2022 &copy; myapp
      </div>
      {error && <ErrorMessage error={error} />}
    </form>
  )
}
