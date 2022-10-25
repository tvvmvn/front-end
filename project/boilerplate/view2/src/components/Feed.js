import {useState, useEffect, Suspense} from "react"
import ArticleItem from "./ArticleItem";

export default function () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialArticles, setInitialArticles] = useState([]);

  useEffect(() => {    
    fetch(`http://localhost:3000/feed`, {
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
  return <Feed initialArticles={initialArticles} />
}

function Feed({initialArticles}) {
  const [articles, setArticles] = useState(initialArticles);

  return (
    <>
      <h1 className="text-2xl">Feed</h1>
      {articles.map(article => (
        <div key={article._id} className="">
          <ArticleItem initialArticle={article} />
          <hr />
        </div>
      ))}
    </>  
  )
}