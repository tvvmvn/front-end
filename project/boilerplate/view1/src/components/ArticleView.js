import { useEffect, useState, Suspense, useContext } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import { ErrorMessage } from "./Progress";
import wrapPromise from "./wrapPromise";
import AuthContext from "./AuthContext";

function fetchData(articleId) {
  const promise = fetch(`http://localhost:3000/articles/${articleId}`, {
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

export default function () {
  const params = useParams();
  const articleId = params.articleId;
  const resource = fetchData(articleId);

  return (
    <Suspense fallback={<p>fetching article...</p>}>
      <ArticleView resource={resource} />
    </Suspense>
  )
}

function ArticleView({ resource }) {

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const initialArticle = resource.read();
  const [article, setArticle] = useState(initialArticle);
  const [isLoaded, setIsLoaded]  = useState(null);
  const [error, setError] = useState(null);

  function editArticle(isFavorite, articleId) {    
    setError(null);
    
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
      .catch(error => setError("failed to create favorite"))
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
      .catch(error => setError("failed to delete favorite"))
    }
  }

  function deleteArticle(articleId) { 
    setIsLoaded(false);

    setTimeout(() => {
      setIsLoaded(true)
      console.log(articleId);
    }, 1000)

    return; 

    setError(null);

    fetch(`http://localhost:3000/articles/${articleId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      navigate(`/profiles/${auth.user.username}`, { replace: true })
    })
    .catch(error => setError("failed to delete an article"))
  }

  return (
    <>
      <ArticleItem 
        article={article} 
        editArticle={editArticle}
        deleteArticle={deleteArticle}
      />

      {error && <ErrorMessage error={error} />}
    </>  
  )
}
