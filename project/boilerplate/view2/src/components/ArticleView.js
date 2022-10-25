import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ArticleItem from "./ArticleItem";
import Modal from "./Modal";

export default function ArticleView() {

  const params = useParams();
  const articleId = params.articleId;

  const [initialArticle, setInitialArticle] = useState(null);
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
      setInitialArticle(data);
    })
    .then(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <p>Error</p>
  }
  if (!isLoaded) {
    return <p>Loading...</p>
  }
  return (
    <>
      <h1>Article</h1>
      <ArticleItem initialArticle={initialArticle} />  
    </>
  )
}



