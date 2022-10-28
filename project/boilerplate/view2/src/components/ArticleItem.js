import {useState} from "react";
import {Link} from "react-router-dom";
import Modal from "./Modal";
import Carousel from "./Carousel";

export default function ArticleItem({initialArticle}) {
  const [article, setArticle] = useState(initialArticle);

  function deleteArticle(articleId) {
    console.log("Delete", articleId)
  }

  return (
    <>
      <Modal>
        <li>
          <button onClick={() => deleteArticle(article._id)}>Delete</button>
        </li>
      </Modal>

      <h3>Carousel</h3>
      <Carousel images={article.photos} />

      <p>{article.description}</p>
      <small>{article.created}</small>
      
      <p>
        <Link to={`/article/${article._id}/comments`}>Comments</Link>
      </p>
    </>  
  )
}

