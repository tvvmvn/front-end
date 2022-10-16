import { Suspense, useEffect, useState, useRef } from "react";
import { Link, NavigationType, useLocation, useNavigate } from "react-router-dom";
import { Loading, ErrorMessage, SuccessMessage } from "./Progress";

export default function ArticleCreate() {

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setError(null);
    setIsLoaded(false);

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
      // return console.log(data)
      navigate("/", { replace: true });
    })
    .catch(error => {
      setError("failed to create an article");
    })
    .finally(() => setIsLoaded(true));
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleFile(e) {
    const files = Object.keys(e.target.files).map(key => e.target.files[key]);
    setFiles(files);
  }

  return (
    <div className="mt-3 px-3">
      <h1 className="text-2xl mb-3">New Article</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="images" className="border p-1">
            Photos +
          </label>
          <input 
            type="file" 
            name="images"
            id="images" 
            className="hidden" 
            multiple={true} 
            accept="image/*" 
            onChange={handleFile}
          />
        </div>

        <ul className="mb-3">
          {files.map((file, index) => (
            <li key={index}>{file.name}</li> 
          ))}
        </ul>
      
        <div className="">
          <label htmlFor="description" className="block font-bold">
            Description
          </label>
          <textarea 
            type="text" 
            name="description" 
            id="description" 
            className="border w-full p-1 outline-none"
            onChange={handleChange} 
          />
        </div>

        <div className="">
          <button 
            type="submit" 
            className="border p-1 disabled:text-gray-300"  
            disabled={files.length < 1}
          >
            Submit
          </button>
        </div>
      </form>

      {/* <Loading isLoaded={isLoaded} /> */}
      <ErrorMessage error={error} />
    </div>
  )
}

