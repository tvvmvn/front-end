import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { Loading, ErrorMessage, SuccessMessage } from "./Progress";

export default function Search() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [users, setUsers] = useState([]);

  function handleChange(e) {
    setError(null);
    setIsLoaded(false);

    if (!e.target.value.trim()) {
      setUsers([])
      setIsLoaded(true);
      return;
    }

    fetch(`http://localhost:3000/search?username=${e.target.value}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      setUsers(data);
    })
    .catch(error => {
      setError("failed to search users")
    })
    .finally(() => {
      setIsLoaded(true)
    })
  }

  const userList = users.map(user => (
    <div key={user._id} className="mb-2">
      <Avatar user={user} />
    </div>
  ));

  return (
    <div className="px-3">
      <h1 className="text-2xl mb-3">Search</h1>
      <div className="mb-3">
        <input 
          type="text" 
          className="border p-1 w-full outline-none"
          onChange={handleChange} 
          placeholder="검색" 
        />
      </div>

      <UserList isLoaded={isLoaded}>
        {userList}
      </UserList>

      <ErrorMessage error={error} />
    </div>
  )
}

function UserList({isLoaded, children}) {
  if (isLoaded === false) {
    return <p>Loading...</p>
  }
  return children;
} 
