import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function () {

  const navigate = useNavigate();
  const [files, setFiles] = useState({});
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(`http://localhost:3000/articles`, {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${localStorage.getItem("token")}`
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
      navigate("/", { replace: true });
    })
    .catch(error => {
      alert("failed to create an article");
    })
  }

  const fileList = Object.keys(files).map(key => (
    <li key={key}>{files[key].name}</li>  
  ))

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create</h1>

      <div className="">
        <label>Photos</label>
        <input 
          type="file" 
          name="images"
          onChange={(e) => setFiles(e.target.files)} 
          multiple={true}
          accept="image/*" 
        />
        <ul>
          {fileList}
        </ul>
      </div>

      <div className="mb-2">
        <label htmlFor="">Description</label>
        <textarea 
          rows="3"
          name="description" 
          defaultValue={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={fileList.length<1}
        >
          Submit
        </button>
      </div>

    </form>
  )
}