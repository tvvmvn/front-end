import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import ArticleItem from "./ArticleItem";
import Modal from "./Modal";

export default function () {

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
      <ArticleView initialArticle={initialArticle} />
    </>
  )
}


function ArticleView({initialArticle}) {
  const [article, setArticle] = useState(initialArticle);
  const navigate = useNavigate();

  function editArticle(isFavorite, articleId) {    
    if (!isFavorite) {
      fetch(`http://localhost:3000/articles/${articleId}/favorite`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        const editedArticle = {...article, isFavorite: true, favoriteCount: article.favoriteCount + 1 };
        setArticle(editedArticle);
      })
      .catch(error => alert("failed to create favorite"))
    } else {
      fetch(`http://localhost:3000/articles/${articleId}/favorite`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        const editedArticle = {...article, isFavorite: false, favoriteCount: article.favoriteCount - 1 };
        setArticle(editedArticle);
      })
      .catch(error => alert("failed to delete favorite"))
    }
  }

  function deleteArticle(articleId) { 
    return console.log(articleId);

    fetch(`http://localhost:3000/articles/${articleId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      navigate("/", { replace: true })
    })
    .catch(error => alert("failed to delete an article"))
  }

  return(
    <ArticleItem 
      article={article} 
      editArticle={editArticle}
      deleteArticle={deleteArticle}
    />    
  )
}


