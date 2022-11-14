import { Suspense, useEffect, useState, useRef, createContext, useContext, Children } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { ErrorMessage, Fallback } from "./Progress";
import AuthContext from "./AuthContext";
import Carousel from "./Carousel";
import ModalWindow from "./ModalWindow";
import ArticleItem from "./ArticleItem";
import wrapPromise from "./wrapPromise";

const limit = 5;

function fetchData() {
  const promise = fetch(`http://localhost:3000/feed/?limit=${limit}`, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
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
  const resource = fetchData();

  return (
    <Suspense fallback={<p>fetching feed...</p>}>
      <Feed resource={resource} />
    </Suspense>
  )
}

function Feed({ resource }) {
  const initialArticles = resource.read();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [articles, setArticles] = useState(initialArticles);
  const [skip, setSkip] = useState(limit);

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
        const editedArticles = articles.map(article => {
          if (articleId === article._id) {
            return { ...article, isFavorite: true, favoriteCount: article.favoriteCount + 1 };
          }
          return article;
        })
        setArticles(editedArticles);
      })
      .catch(error => setError("failed to create favorite"));
    } else {
      fetch(`http://localhost:3000/articles/${articleId}/favorite`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        const editedArticles = articles.map(article => {
          if (articleId === article._id) {
            return { ...article, isFavorite: false, favoriteCount: article.favoriteCount - 1 };
          }
          return article;
        })
        setArticles(editedArticles);
      })
      .catch(error => setError("failed to delete favorite"));
    }
  }

  function deleteArticle(articleId) {
    return console.log(articleId);

    setError(null);

    fetch(`http://localhost:3000/articles/${articleId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      const updatedArticles = articles.filter(article => articleId !== article._id);
      setArticles(updatedArticles);
    })
    .catch(error => setError("failed to delete an article"))
  }

  function addArticles() {
    setError(null);
    setIsLoaded(false);

    fetch(`http://localhost:3000/feed/?limit=${limit}&skip=${skip}`, {
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
      .catch(error => setError("failed to load articles"))
      .finally(() => setIsLoaded(true));
  }

  const articleList = articles.map(article => (
    <div key={article._id} className="mb-3">
      <ArticleItem
        article={article}
        editArticle={editArticle}
        deleteArticle={deleteArticle}
      />
    </div>
  ))

  return (
    <>
      {articleList}

      <div className="mb-2 px-2">
        <button 
          className="p-1 w-full border border-black"
          onClick={addArticles}
        >
          Load more
        </button>
      </div>

      {error && <ErrorMessage error={error} />}
    </>
  )
}