import {useState} from "react";


export default function() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

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
    .then(error => {
      setError(error)
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
          <li key={index}>{user.username}</li>  
        ))}
      </ul>
    </>
  )
}