import {useState, useEffect} from "react";
import { ErrorMessage, SuccessMessage } from "./Progress";

export default function () {

  const [initialProfile, setInitialProfile] = useState(null);
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/user`, {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      setInitialProfile(data);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <p>failed to fetch</p>
  }
  if (!isLoaded) {
    return <p>fetching profile...</p>
  }
  return <Accounts initialProfile={initialProfile} />
}

function Accounts({initialProfile}) {
  const [profile, setProfile] = useState(initialProfile);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  function uploadImage(e) {
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
      const editedProfile = {...profile, image: data};
      setProfile(editedProfile);
      setMessage("Successfully updated");
    })
    .catch(error => {
      setError("failed to upload image");
    })
  }

  function deleteImage() {
    fetch(`http://localhost:3000/accounts/edit/image`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      const editedProfile = {...profile, image: null};
      setProfile(editedProfile);
    })
    .catch(error => {
      setError("failed to delete image")
    })
  }
  
  function editProfile(text, setText) {
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
      const editedProfile = {...profile, bio: data};
      
      setProfile(editedProfile);
      setMessage("Successfully updated")
      setText("");
    })
    .catch(error => {
      setError("failed to update account")
    })
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("")
      }, 2000)
    }
    if (error) {
      setTimeout(() => {
        setError(null)
      }, 2000)
    }
  }, [message, error])

  return (
    <div className="px-3">
      <h1 className="text-2xl mb-2">Edit Profile</h1>
      
      <EditImage profile={profile} uploadImage={uploadImage} deleteImage={deleteImage} />
      <EditProfile profile={profile} editProfile={editProfile} />

      {error && <ErrorMessage error={error} />}
      {message && <SuccessMessage message={message} />}
    </div>  
  )
}

function EditImage({profile, uploadImage, deleteImage}) {

  return (
    <div className="mb-3">
      <h3 className="text-lg mb-2">Image</h3>  
      <div className="mb-2">
        <img 
          src={`http://localhost:3000/users/${profile.image || "avatar.jpeg"}`} 
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      {profile.image ? (
        <button
          type="button"
          className="text-red-400"
          onClick={deleteImage}
        >
          Delete image
        </button>
      ) : (
        <input
          type="file"
          onChange={uploadImage}
        />
      )}
    </div>
  )
}

function EditProfile({profile, editProfile}) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    editProfile(text, setText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg mb-2">Accounts</h3>  
      <div className="mb-2">
        <label htmlFor="">Username</label>
        <input 
          type="text" 
          value={profile.username} 
          className="w-full border p-1"
          disabled={true} 
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">Email</label>
        <input 
          type="text" 
          value={profile.email} 
          className="w-full border p-1"
          disabled={true} 
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">Bio</label> 
        <textarea 
          rows="3" 
          defaultValue={profile.bio} 
          className="w-full border p-1"
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <div>
        <button 
          type="submit" 
          className="border border-black disabled:opacity-[0.2] p-1"
          disabled={!text.trim()}
        >
          Submit
        </button>
      </div>
    </form>
  )
}