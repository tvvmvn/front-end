import {useState, useEffect, Suspense} from "react";
import {Link} from "react-router-dom";
import ArticleList from "./ArticleList";

const limit = 9;

export default function () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialArticles, setInitialArticles] = useState(null);

  useEffect(() => {    
    fetch(`http://localhost:3000/articles/?limit=${limit}`, {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      setInitialArticles(data);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => {
      setIsLoaded(true);
    })
  }, [])

  if (error) {
    return <p>Error</p>
  }
  if (!isLoaded) {
    return <p>Loading...</p>
  }
  return <Explore initialArticles={initialArticles} />
}

function Explore({initialArticles}) {
  const [articles, setArticles] = useState(initialArticles);
  const [skip, setSkip] = useState(limit);

  function addArticles() {
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
    .catch(error => alert("failed to load articles"))
  }

  return (
    <>
      <h1 className="text-2xl">Explore</h1>
      <p>
        <Link to={`/search`}>Search</Link>
      </p>
      <div className="mb-2">
        {articles.map(article => (
          <Link key={article._id} to={`/article/${article._id}`}>
            <img
              src={`http://localhost:3000/articles/${article.photos[0]}`}
            />
          </Link>
        ))}
      </div>
      <div>
        <button onClick={addArticles}>Load more</button>
      </div>
    </>  
  )
}