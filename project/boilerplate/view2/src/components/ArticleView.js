import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function ArticleView() {

  const params = useParams();
  const articleId = params.articleId;

  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${articleId}`, {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => {
      setArticle(data);
    })
    .then(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <h1>Error</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Article View</h1>
    </>  
  )
}