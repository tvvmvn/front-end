import { useContext, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Layout() {
  const auth = useContext(AuthContext);

  return (
    <div className="pt-8">
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex px-3 items-center gap-2 border-b bg-white/[0.8] h-8">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/create">Create</Link>
          <Link to={`/profiles/${auth.user.username}`}>Profile</Link>
        </div>
      </div>

      <Suspense fallback={<p>fetching outlet...</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}