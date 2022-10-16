import { Suspense, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "./AuthContext";
import Avatar from "./Avatar";
import ModalWindow from "./ModalWindow";
import { Loading, ErrorMessage, SuccessMessage } from "./Progress";
import wrapPromise from "./wrapPromise";

function fetchData(articleId) {
  const promise = fetch(`http://localhost:3000/articles/${articleId}/comments`, {
    headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  })

  return wrapPromise(promise)
}

export default function() {
  const params = useParams();
  const articleId = params.articleId;
  const resource = fetchData(articleId);

  return (
    <Suspense fallback={<p>fetching comments...</p>}>
      <Comments 
        articleId={articleId} 
        resource={resource} 
      />
    </Suspense>
  )
}

function Comments({ articleId, resource }) {
  const initialComments = resource.read();
  const [comments, setComments] = useState(initialComments);
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [message, setMessage] = useState("");
  
  function createComment(text, setText) {
    setIsLoaded(false)
    setError(null)
    setMessage("");

    const formData = JSON.stringify({ content: text });

    fetch(`http://localhost:3000/articles/${articleId}/comments`, {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(newComment => {
      setComments([newComment, ...comments])
      setText("")
      setMessage("Successfully created")
    })
    .catch(error => {
      setError("failed to create comment")
    })
    .finally(() => setIsLoaded(true))
  }

  function deleteComment(commentId) {
    setError(null);
    setMessage("");

    fetch(`http://localhost:3000/comments/${commentId}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` },
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      const updatedComments = comments.filter(comment => comment._id !== commentId);
      setComments(updatedComments);
      setMessage("Successfully deleted");
    })
    .catch(error => {
      setError("failed to delete comment");
    })
  }

  function editComment(isFavorite, commentId) {
    setError(null);

    if (!isFavorite) {
      fetch(`http://localhost:3000/comments/${commentId}/favorite`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        const editedCommentList = comments.map(comment => {
          if (commentId === comment._id) {
            return {...comment, isFavorite: true, favoriteCount: comment.favoriteCount + 1}
          }
          return comment;
        })
        setComments(editedCommentList);
      })
      .catch(error => setError("failed to create favorite"))
    } else {
      fetch(`http://localhost:3000/comments/${commentId}/favorite`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        const editedCommentList = comments.map(comment => {
          if (commentId === comment._id) {
            return {...comment, isFavorite: false, favoriteCount: comment.favoriteCount - 1}
          }
          return comment;
        })
        setComments(editedCommentList);
      })
      .catch(error => setError("failed to delete favorite"))
    }
  }

  const commentList = comments.map(comment => (
    <div key={comment._id} className="mb-3">
      <Comment 
        comment={comment} 
        editComment={editComment} 
        deleteComment={deleteComment} 
      />
    </div>
  ))

  return (
    <div className="mt-3 px-3">
      <h1 className="text-2xl mb-3">Comments</h1>

      <Form createComment={createComment} />

      {commentList} 

      <Loading isLoaded={isLoaded} />
      <ErrorMessage error={error} />
      <SuccessMessage message={message} />
    </div>  
  )
}

function Form({createComment}) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createComment(text, setText);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return(
    <form onSubmit={handleSubmit} className="mb-3">
      <textarea 
        type="text" 
        name="text"
        className="border w-full p-1 outline-none"
        value={text} 
        onChange={handleChange} 
      />
      <button 
        type="submit" 
        className="border p-1 disabled:text-gray-300" 
        disabled={!text.trim()}
      >
        Submit
      </button>
    </form>  
  )
}
  
function Comment({comment, editComment, deleteComment}) {
  const auth = useContext(AuthContext);
  const isMaster = auth.user.username === comment.user.username;

  return (
    <>
      <div className="flex justify-between mb-2">
        <Avatar user={comment.user} />
        {isMaster &&
          <ModalWindow>
            <li className="border-b">
              <button 
                className="p-1 text-center w-full text-red-500" 
                onClick={() => deleteComment(comment._id)}
              >
                Delete
              </button>
            </li>
          </ModalWindow>
        }
      </div>

      <div className="mb-2">{comment.content}</div>
      
      <div className="flex mb-2">
        <button 
          className="btn btn-link" 
          onClick={() => editComment(comment.isFavorite, comment._id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10">
            <path fill={comment.isFavorite ? "#f00" : "#ddd"} d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
          </svg>
        </button> 
        <p className="ml-1 text-xs">{comment.favoriteCount} likes</p>
      </div>

      <div className="text-xs text-gray-400 mb-2">{comment.created}</div>
    </>  
  )
}
