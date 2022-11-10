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
    return <p>failed to fetch comments</p>
  }
  if (!isLoaded) {
    return <p>fetching comments...</p>
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
  
  function createComment(text, setText) {
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
    })
    .catch(error => {
      alert("failed to create comment")
    })
  }

  function deleteComment(commentId) {
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
    })
    .catch(error => {
      alert("failed to delete comment");
    })
  }

  function editComment(isFavorite, commentId) {
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
      .catch(error => alert("failed to edit comment to favorite"))
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
      .catch(error => alert("failed to edit comment to unfavorite"))
    }
  }

  const commentList = comments.map(comment => (
    <Comment 
      key={comment._id}
      comment={comment} 
      editComment={editComment} 
      deleteComment={deleteComment} 
    />
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
    <form onSubmit={handleSubmit} className="mb-3">
      <textarea 
        rows="3"
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

  const modal = (
    <Modal>
      <li>
        <button
          onClick={() => deleteComment(comment._id)}
        >
          Delete
        </button>
      </li>
    </Modal>
  )

  const created = new Date(comment.created).toLocaleDateString();

  return (
    <div className="mb-3">
      <h4>
        <Link to={`/profile/${comment.user.username}`}>{comment.user.username}</Link>
      </h4>
      {isMaster && modal}

      <p>{comment.content}</p>
      
      <div className="mb-3">
        <div className="mb-3">
          {comment.favoriteCount} likes
        </div>
        <button 
          onClick={() => editComment(comment.isFavorite, comment._id)}
        >
          {comment.isFavorite ? "Dislike" : "Like"}
        </button> 
      </div>

      <small>{created}</small>
    </div>  
  )
}
