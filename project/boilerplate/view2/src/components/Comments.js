import {useContext, useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import AuthContext from "./AuthContext";
import Modal from "./Modal";

export default function () {
  const params = useParams();
  const articleId = params.articleId;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialComments, setInitialComments] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${articleId}/comments`, {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })
    .then(data => {
      setInitialComments(data);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true));
  }, [])

  if (error) {
    return <p>Error</p>
  }
  if (!isLoaded) {
    return <p>Loading...</p>
  } 
  return (
    <Comments   
      articleId={articleId}
      initialComments={initialComments}
    />
  )
}

function Comments({ articleId, initialComments }) {
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
    <div key={comment._id} className="">
      <hr />
      <Comment 
        comment={comment} 
        editComment={editComment} 
        deleteComment={deleteComment} 
      />
    </div>
  ))

  return (
    <div className="">
      <h1 className="">Comments</h1>

      <Form createComment={createComment} />

      {commentList} 
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
    <form onSubmit={handleSubmit} className="">
      <textarea 
        type="text" 
        name="text"
        className=""
        value={text} 
        onChange={handleChange} 
      />
      <br />
      <button 
        type="submit" 
        className="" 
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
      {isMaster &&
        <Modal>
          <li className="">
            <button 
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </button>
          </li>
        </Modal>
      }

      <p className="">{comment.content}</p>
      
      <div className="">
        <button 
          onClick={() => editComment(comment.isFavorite, comment._id)}
        >
          {comment.isFavorite ? "Dislike" : "Like"}
        </button> 
        <div className="">{comment.favoriteCount} likes</div>
      </div>

      <small className="">{comment.created}</small>
    </>  
  )
}
