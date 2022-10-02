import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {AuthContext} from "./AuthContext";

export default function Layout() {

  const auth = useContext(AuthContext);

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Feed</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to={`/profiles/${auth.user}`}>Profile</Link></li>
        </ul>
      </nav>

      <p>
        {auth.user ? `Hello ${auth.user}` : "Not logged in"}
        {" "}
        <button 
          type="button"
          onClick={auth.signOut}
        >
          Logout
        </button>
      </p>

      <Outlet />
    </>
  )
}