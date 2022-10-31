import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import AuthContext from "./AuthContext";
import Carousel from "./Carousel";

export default function ArticleItem({article, editArticle, deleteArticle}) {

  const auth = useContext(AuthContext);
  const isMaster = auth.user.username === article.user.username;
  const created = new Date(article.created).toLocaleDateString();

  return (
    <div className="mb-2">
      <h3>
        <Link to={`/profile/${article.user.username}`}>{article.user.username}</Link>
      </h3>

      <details>
        <summary>Modal</summary>
        <ul>
          <li>
            <button onClick={() => deleteArticle(article._id)}>Delete</button>
          </li>
        </ul>
      </details>

      <Carousel images={article.photos} />

      <div className="">
        <div className="mb-2">{article.favoriteCount} likes</div>
        <button type="button" onClick={() => editArticle(article.isFavorite, article._id)}>
          {article.isFavorite ? "Dislikes" : "Likes"}
        </button>
      </div>

      <p>{article.description}</p>
      <div className="mb-2">
        <Link to={`/article/${article._id}/comments`}>Comments</Link>
      </div>
      <small>{created}</small>
    </div>  
  )
}

