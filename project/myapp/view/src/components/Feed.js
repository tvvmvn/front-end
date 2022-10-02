import {useState, useEffect, Suspense} from "react"
import {fetchArticles} from "./fakeApi";

export default function Feed() {

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
      <h1 className="text-2xl">Feed</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <img src={`/data/${article.photos[0]}`} width="100" />
            {article.description}
          </li>  
        ))}
      </ul>
    </>  
  )
}