import { useContext }  from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import Avatar from "./Avatar";
import ModalWindow from "./ModalWindow";
import Carousel from "./Carousel";

export default function ArticleItem({ article, editArticle, deleteArticle }) {
  
  const auth = useContext(AuthContext);
  const isMaster = auth.user.username === article.user.username; 
  const created = new Date(article.created).toLocaleDateString();

  return (
    <>
      <div className="flex justify-between px-3 mb-2">
        <Avatar user={article.user} />
        {isMaster && 
          <ModalWindow>
            <li className="border-b">
              <button
                className="p-1 text-center w-full text-red-500"
                onClick={() => deleteArticle(article._id)}
              >
                Delete
              </button>
            </li>
          </ModalWindow>
        }
      </div>

      <Carousel photos={article.photos} />

      <div className="px-3">
        <div className="flex mb-2">
          <button className="" onClick={() => editArticle(article.isFavorite, article._id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
              <path fill={article.isFavorite ? "#f00" : "#ddd"} d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
            </svg>
          </button>
          <p className="ml-2">{article.favoriteCount} likes</p>
        </div>
        
        <p className="mb-2">
          <span className="font-bold">{article.user.username}</span> {" "}
          {article.description}
        </p>

        <div className="">
          <Link to={`/p/${article._id}/comments`} className="text-gray-400">Comments</Link>
        </div>

        <div className="text-xs text-gray-400">
          {created}
        </div>
      </div>
    </>
  )
}
