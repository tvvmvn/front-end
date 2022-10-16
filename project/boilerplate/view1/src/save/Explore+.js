import { Suspense, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Fallback from "./Fallback";
import NotFound from "./NotFound";
import ArticleList from "./ArticleList";
import { ErrorMessage } from "./Progress";
import wrapPromise from "./wrapPromise";

const limit = 9;
let skip = limit;
let initialArticles = null;
let isInitialRender = true;

function fetchData() {
  const promise = fetch(`http://localhost:3000/articles/?limit=${limit}`, {
    headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  })

  return wrapPromise(promise);
}

const resource = fetchData();

export default function() {
  const initialArticles = isInitialRender ? resource.read() : initialArticles;
  isInitialRender = false;

  return <Explore initialArticles={initialArticles} />
}

function Explore({ initialArticles }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [articles, setArticles] = useState(initialArticles);

  initialArticles = articles;

  console.log(initialArticles);

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
      skip += limit
    })
    .catch(error => setError("Error!"))
    .finally(() => setIsLoaded(true));
  }

  return (
    <>
      <h1 className="text-2xl mt-3 mb-3 px-3">Explore</h1>
      <div className="mb-3 px-3">
        <Link to="/search">Search</Link>
      </div>

      <ArticleList articles={articles} />
      
      <Result isLoaded={isLoaded}>
        <button onClick={addArticles}>More</button>
      </Result>

      <ErrorMessage error={error} />
    </>
  )
}

function Result({ isLoaded, children }) {
  if (isLoaded === false) {
    return <p>fetching articles...</p>
  }
  return children;
}