import {useState, useEffect, Suspense} from "react"
import ArticleItem from "./ArticleItem";

const limit = 5;

export default function () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialArticles, setInitialArticles] = useState([]);

  useEffect(() => {    
    fetch(`http://localhost:3000/feed/?limit=${limit}`, {
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
    return <p>failed to fetch feeds</p>
  }
  if (!isLoaded) {
    return <p>fetching feeds...</p>
  }
  return <Feed initialArticles={initialArticles} />
}

function Feed({initialArticles}) {
  const [articles, setArticles] = useState(initialArticles);
  const [skip, setSkip] = useState(limit);

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
        const editedArticles = articles.map(article => {
          if (articleId === article._id) {
            return { ...article, isFavorite: true, favoriteCount: article.favoriteCount + 1 };
          }
          return article;
        })
        setArticles(editedArticles);
      })
      .catch(error => alert("failed to edit an article to favorite"));
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
      .catch(error => alert("failed to edit an article to unfavorite"));
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
      const updatedArticles = articles.filter(article => articleId !== article._id);
      setArticles(updatedArticles);
    })
    .catch(error => alert("failed to delete an article"))
  }

  function addArticles() {
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
    .catch(error => alert("failed to fetch articles"))
  }

  const articleList = articles.map(article => (
    <ArticleItem 
      key={article._id}
      article={article} 
      editArticle={editArticle}
      deleteArticle={deleteArticle}
    />
  ))

  return (
    <>
      <h1>Feed</h1>
      <div className="">
        {articleList}
      </div>
      <div>
        <button onClick={addArticles}>Load more</button>
      </div>
    </>  
  )
}