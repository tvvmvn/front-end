import {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {email, password}

    fetch(`http://localhost:3000/accounts/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      auth.signIn(data, () => navigate("/", {replace: true}));
      localStorage.setItem("email", email)
    })
    .catch(error => {
      if (error.status === 401) {
        return alert("User not found");
      }
      alert("Try later");
    })
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            <input 
            type="checkbox" 
            onChange={(e) => setShowPassword(e.target.checked)} 
          />
            Show password
          </label>
        </div>
        <div className="mb-2">
          <button 
            type="submit" 
            disabled={!email.trim() || !password.trim()}
          >
            Submit
          </button>
        </div>
        <div>
          <Link to="/register">Create account</Link>
        </div>
      </form>
    </>  
  )
}