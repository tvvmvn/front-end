import { Suspense, useEffect, useState, useContext, useReducer } from "react";
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
      <EditImage resource={resource} />
    </Suspense>
  )
}

function EditImage({ resource }) {
  const initialUser = resource.read();
  const [user, setUser] = useState(initialUser);
  const [message, setMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(null);
  const [error, setError] = useState(null);
  
  function uploadImage(e) {
    setError(null);
    setIsLoaded(false);
    setMessage("");

    const files = e.target.files;

    const formData = new FormData();
    formData.append("image", files[0]);

    fetch(`http://localhost:3000/accounts/edit/image`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` },
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      const editedUser = {...user, image: data};
      setUser(editedUser);
      setMessage("Successfully updated");
    })
    .catch(error => {
      setError("failed to upload image")
    })
    .finally(() => setIsLoaded(true))
  }

  function deleteImage() {
    setMessage("");
    setError(null);
    setIsLoaded(false);

    fetch(`http://localhost:3000/accounts/edit/image`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      const editedUser = {...user, image: null};
      setUser(editedUser);
      setMessage("Successfully deleted")
    })
    .catch(error => {
      setError("failed to delete image")
    })
    .finally(() => setIsLoaded(true))
  }

  return (
    <div className="mt-3 px-3">
      <h1 className="text-2xl mb-3">Edit Image</h1>

      <div className="mb-3">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
          <img 
            src={`http://localhost:3000/users/${user.image || "avatar.jpeg"}`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="">
        {user.image ?
          <button
            type="submit"
            className="border p-1"
            onClick={deleteImage}
          >
            Delete
          </button>
          :
          <label className="border p-1">
            Upload
            <input
              type="file"
              name="image"
              id="file-input"
              className="hidden"
              onChange={uploadImage}
              accept="image/*"
            />
          </label>
        }
      </div>

      <Loading isLoaded={isLoaded} />
      <ErrorMessage error={error} />
      <SuccessMessage message={message} />
    </div>
  )
}
