import { useContext, Suspense } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function AuthRequired({ layout }) {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/accounts/login" replace={true} />
  }

  return layout;
}