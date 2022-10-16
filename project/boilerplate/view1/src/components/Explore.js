import { Suspense, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import ArticleList from "./ArticleList";
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

  return (
    <>
      <h1 className="text-2xl mt-3 mb-3 px-3">Explore</h1>
      <div className="mb-3 px-3">
        <Link to="/search">Search</Link>
      </div>

      <ArticleList articles={articles} />
      
      <LoadButton isLoaded={isLoaded}>
        <button onClick={addArticles}>Load more</button>
      </LoadButton>

      <ErrorMessage error={error} />
    </>
  )
}

function LoadButton({ isLoaded, children }) {
  if (isLoaded === false) {
    return <p>fetching articles...</p>
  }
  return children;
}