import {useState, useEffect, Suspense} from "react"
import {fetchArticles} from "./fakeApi";

export default function Explore() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {    
    fetchArticles()
    .then(data => {
      setArticles(data);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => {
      setIsLoaded(true)
    })
  }, [])

  if (error) {
    return <p>Error!</p>
  }
  if (!isLoaded) {
    return <p>Loading...</p>
  }
  return (
    <>
      <h1 className="text-2xl">Explore</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <img src={`/data/${article.photos[0]}`} width="100" />
          </li>  
        ))}
      </ul>
    </>  
  )
}