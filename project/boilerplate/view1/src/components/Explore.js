import { Suspense, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import { ErrorMessage, Loading } from "./Progress";
import wrapPromise from "./wrapPromise";

const limit = 9;

function fetchData() {
  const promise = fetch(`http://localhost:3000/articles/?limit=${limit}`, {
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
    <Suspense fallback={<p>fetching articles...</p>}>
      <Explore resource={resource} />
    </Suspense>
  )
}

function Explore({ resource }) {
  const initialArticles = resource.read();
  const [articles, setArticles] = useState(initialArticles);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [skip, setSkip] = useState(limit);

  function addArticles() {
    setError(null);
    setIsLoaded(false);

    fetch(`http://localhost:3000/articles/?limit=${limit}&skip=${skip}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      setArticles([...articles, ...data])
      setSkip(skip + limit);
    })
    .catch(error => setError("failed to load articles"))
    .finally(() => setIsLoaded(true));
  }

  const articleList = articles.map(article => (
    <Link
      key={article._id}
      className="h-40 bg-gray-100"
      to={`/p/${article._id}`}
    >
      <img
        src={`http://localhost:3000/articles/${article.photos[0]}`}
        alt=""
        className="w-full h-full object-cover"
      />
    </Link>
  ))

  return (
    <>
      <div className="mb-3 px-3">
        <h1 className="text-2xl mb-3">Explore</h1>
        <div className="">
          <Link to="/search">
            <input 
              type="text"
              className="border p-1 w-full outline-none"
              placeholder="Search"
            />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 mb-2">
        {articleList}
      </div>

      <div className="mb-2 px-2">
        <button 
          className="p-1 w-full border border-black"
          onClick={addArticles}
        >
          Load more
        </button>
      </div>

      {error && <ErrorMessage error={error} />}
    </>
  )
}