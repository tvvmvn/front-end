import { useContext, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Layout() {
  const auth = useContext(AuthContext);

  return (
    <div className="pt-14">
      <div className="fixed top-0 left-0 w-full z-10">
        <ul className="flex border-b bg-white">
          <li>
            <Link to="/" className="block p-2">Home</Link>
          </li>
          <li>
            <Link to="/explore" className="block p-2">Explore</Link>
          </li>
          <li>
            <Link to="/create" className="block p-2">Create</Link>
          </li>
          <li>
            <Link to={`/profiles/${auth.user.username}`} className="block p-2">Profile</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<p>fetching outlet...</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}