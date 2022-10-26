import {useState, useEffect, Suspense} from "react";
import {Link} from "react-router-dom";
import ArticleList from "./ArticleList";

export default function () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialArticles, setInitialArticles] = useState(null);

  useEffect(() => {    
    fetch(`http://localhost:3000/articles`, {
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
  
  return (
    <>
      <h1 className="text-2xl">Explore</h1>
      <p>
        <Link to={`/search`}>Search</Link>
      </p>
      {articles.map(article => (
        <Link key={article._id} to={`/p/${article._id}`}>
          <img
            src={`http://localhost:3000/posts/${article.photos[0]}`}
          />
        </Link>
      ))}
    </>  
  )
}