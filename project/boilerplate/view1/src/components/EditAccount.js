import { Suspense, useEffect, useState, useContext, Children } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "./AuthContext";
import { Loading, ErrorMessage, SuccessMessage } from "./Progress";
import wrapPromise from "./wrapPromise";

function fetchData() {
  const promise = fetch(`http://localhost:3000/user`, {
    headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json()
  })

  return wrapPromise(promise);
}

export default function() {
  const resource = fetchData();

  return (
    <Suspense fallback={<p>fetching accounts...</p>}>
      <EditAccount resource={resource} />
    </Suspense>
  )
}

function EditAccount({ resource }) {
  const initialUser = resource.read();
  const [user, setUser] = useState(initialUser);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [message, setMessage] = useState("");

  const [text, setText] = useState("");

  console.log(user);

  function handleSubmit(e) {
    e.preventDefault();

    setError(null);
    setIsLoaded(false);
    setMessage("");

    const formData = JSON.stringify({ bio: text });

    fetch(`http://localhost:3000/accounts/edit`, {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      const editedUser = {...user, bio: data};
      
      setUser(editedUser);
      setMessage("Successfully updated")
      setText("");
    })
    .catch(error => {
      setError("failed to update account")
    })
    .finally(() => setIsLoaded(true))
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="mt-3 px-3">
      <h1 className="text-2xl mb-3">Edit Account</h1>

      <div className="mb-3">
        <label htmlFor="" className="block font-bold">Username</label>
        <p>{user.username}</p>
      </div>

      <div className="mb-3">
        <label htmlFor="" className="block font-bold">Email</label>
        <p>{user.email}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="bio" className="block font-bold">Bio</label>
          <textarea 
            name="bio" 
            className="border p-1 w-full outline-none"
            onChange={handleChange} 
            defaultValue={user.bio}
          />
        </div>

        <div className="">
          <button 
            type="submit" 
            className="border p-1 disabled:text-gray-300" 
            disabled={!text.trim()}
          >
            Submit
          </button>
        </div>
      </form>

      <Loading isLoaded={isLoaded} />
      <ErrorMessage error={error} />
      <SuccessMessage message={message} />
    </div>
  )
}
