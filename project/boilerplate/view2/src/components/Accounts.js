import {useState, useEffect} from "react";

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
    return <p>failed to fetch accounts</p>
  }
  if (!isLoaded) {
    return <p>fetching accounts...</p>
  }
  return <Accounts initialProfile={initialProfile} />
}

function Accounts({initialProfile}) {
  const [profile, setProfile] = useState(initialProfile);

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
      alert("image is uploaded");
    })
    .catch(error => {
      alert("failed to upload image");
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
      alert("failed to delete image")
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
      alert("account is updated")
      setText("");
    })
    .catch(error => {
      alert("failed to update account")
    })
  }

  return (
    <>
      <h1>Accounts</h1>

      <EditImage profile={profile} uploadImage={uploadImage} deleteImage={deleteImage} />
      <EditProfile profile={profile} editProfile={editProfile} />
    </>  
  )
}

function EditImage({profile, uploadImage, deleteImage}) {

  return (
    <div className="">
      <h3>Image</h3>
      <div className="mb-2">
        <img src={`http://localhost:3000/users/${profile.image || "avatar.jpeg"}`} />
      </div>
      {profile.image ? 
        <button type="button" onClick={deleteImage}>Delete</button>
        :
        <input 
          type="file" 
          onChange={uploadImage}
        />
      }
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
      <h3>Profile</h3>
      <div className="mb-2">
        <label htmlFor="">Username</label>
        <input type="text" value={profile.username} disabled={true} />
      </div>
      <div className="mb-2">
        <label htmlFor="">Email</label>
        <input type="text" value={profile.email} disabled={true} />
      </div>
      <div className="mb-2">
        <label htmlFor="">Bio</label> 
        <textarea rows="3" defaultValue={profile.bio} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <button type="submit" disabled={!text.trim()}>Submit</button>
      </div>
    </form>
  )
}