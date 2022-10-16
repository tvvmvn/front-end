import { Suspense, useEffect, useState, useRef, createContext, useContext, Children } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Fallback from "./Fallback";
import Avatar from "./Avatar";
import { ErrorMessage, Loading } from "./Progress";
import AuthContext from "./AuthContext";
import Carousel from "./Carousel";
import ModalWindow from "./ModalWindow";
import ArticleItem from "./ArticleItem";
import wrapPromise from "./wrapPromise";

const limit = 5;
let skip = limit;
let articles = [];
let isInitialRender = true;

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

const resource = fetchData();

export default function() {
  const initialArticles = isInitialRender ? resource.read() : articles;

  return <Feed initialArticles={initialArticles} />
}

function Feed({ initialArticles }) {  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  if (isInitialRender) {
    articles = initialArticles;
    isInitialRender = false;
  }

  function editArticle(isFavorite, articleId) {    
    setError(null);
    setIsLoaded(false);
    
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
            return {...article, isFavorite: true, favoriteCount: article.favoriteCount + 1 };
          }
          return article;
        })
  
        articles = editedArticles;
      })
      .catch(error => setError("Error!"))
      .finally(() => setIsLoaded(true));
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
            return {...article, isFavorite: false, favoriteCount: article.favoriteCount - 1 };
          }
          return article;
        })
  
        articles = editedArticles;
      })
      .catch(error => setError("Error!"))
      .finally(() => setIsLoaded(true));
    }
  }

  function deleteArticle(articleId) {
    return console.log(articleId);

    // setError(null);
    // setIsLoaded(false);

    // fetch(`http://localhost:3000/articles/${articleId}`, {
    //   method: 'DELETE',
    //   headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    // })
    // .then(res => {
    //   if (!res.ok) {
    //     throw res;
    //   }
    //   const updatedArticles = articles.filter(article => articleId !== article._id);
    //   setArticles(updatedArticles);
    // })
    // .catch(error => setError("Error!"))
    // .finally(() => setIsLoaded(true));
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
      articles = [...articles, ...data];
      skip += limit;
    })
    .catch(error => setError("Error!"))
    .finally(() => setIsLoaded(true));
  }

  return (
    <>
      {articles.map(article => (
        <div key={article._id} className="py-3 border-b">
          <ArticleItem 
            article={article} 
            editArticle={editArticle}
            deleteArticle={deleteArticle}
          />
        </div>
      ))}

      <Result error={error} isLoaded={isLoaded}>
        <button onClick={addArticles}>More</button>
      </Result>

      <ErrorMessage error={error} />
    </>  
  )
}

function Result({ error, isLoaded, children }) {
  if (error) {
    return <p>Failed to fetch</p>
  }
  if (isLoaded === false) {
    return <p>fetching articles...</p>
  }
  return children;
}