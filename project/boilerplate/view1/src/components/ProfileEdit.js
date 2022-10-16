import { Suspense, useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function ProfileEdit() {
  const auth = useContext(AuthContext);

  return (
    <div className="mt-3 px-3">
      <h1 className="text-2xl mb-3">Edit Profile</h1>
      <ul> 
        <li className="">
          <Link to={`/accounts/edit/image`}>Edit image</Link>
        </li>
        <li className="">
          <Link to={`/accounts/edit/profile`}>Edit account</Link>
        </li>
        <li className="">
          <button className="text-red-500" onClick={auth.signOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>  
  )
}

