import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Avatar({ user }) {
  return (
    <Link to={`/profiles/${user.username}`} className="inline-flex items-center">
      <img
        src={`http://localhost:3000/users/${user.image || "avatar.jpeg"}`}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="ml-2">
        {user.username}
      </div>
    </Link>
  )
}