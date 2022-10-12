import {useState, useEffect, Suspense} from "react"

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
      <ul>
        {articles.map(article => (
          <li key={article._id} className="">
            <img 
              src={`http://localhost:3000/posts/${article.photos[0]}`} 
              width="100" 
            />
          </li>  
        ))}
      </ul>
    </>  
  )
}