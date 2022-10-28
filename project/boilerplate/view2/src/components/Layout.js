import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Layout() {

  const auth = useContext(AuthContext);

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to={`/profile/${auth.user.username}`}>Profile</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}