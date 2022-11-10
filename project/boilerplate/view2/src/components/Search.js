import {useState} from "react";
import {Link} from "react-router-dom";

export default function() {

  const [users, setUsers] = useState([]);

  function handleChange(e) {
    const username = e.target.value;

    if (!username.trim()) {
      setUsers([]);
      return;
    }

    fetch(`http://localhost:3000/search/?username=${username}`, {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}    
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      setUsers(data)
    })
    .catch(error => {
      alert("failed to fetch users")
    })
  } 

  return (
    <>
      <h1>Search</h1>
      <input 
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/profile/${user.username}`}>
              {user.username}
            </Link>
          </li>  
        ))}
      </ul>
    </>
  )
}