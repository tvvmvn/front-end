import { useContext, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Layout() {
  const auth = useContext(AuthContext);

  return (
    <div className="pt-8">
      <div className="fixed top-0 left-0 right-0 z-10">
        <ul className="flex px-3 items-center gap-2 border-b bg-white/[0.8] h-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to={`/profiles/${auth.user.username}`}>Profile</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<p>fetching outlet...</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}