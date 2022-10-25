import {Link} from "react-router-dom";

export default function ArticleList({articles}) {
  return (
    <>
      {articles.map(article => (
        <Link key={article._id} to={`/p/${article._id}`}>
          <img 
            src={`http://localhost:3000/posts/${article.photos[0]}`} 
          />
        </Link>
      ))}  
    </>
  )
}