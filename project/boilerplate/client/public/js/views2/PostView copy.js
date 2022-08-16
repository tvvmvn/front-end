export default async function (params) {
  try {
    var postId = params.id
    var isAuthor;

    // Article and author
    let articleData = await fetch(`http://localhost:3000/articles/${postId}`).then(res => res.json()) 

    if (auth && auth.user._id === articleData.article.author) {
      isAuthor = true
    }

    // Favorite
    let isFavorite = await fetch(`http://localhost:3000/articles/${postId}/favorite`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
    }).then(res => {
      if (res.status !== 200) {
        return null;
      }
      return res.json()
    })
    // console.log(isFavorite)

    const commentList = articleData.comments.map(comment => {
      return { type: 'li', props: {}, children: [comment.body] }
    })

    // favorite article
    async function favoriteArticle(e) { 
      if (e.target.dataset.favorite==="false") {
        let response = await fetch(`http://localhost:3000/articles/${postId}/favorite`, {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
        }).then(res => res.json())

        e.target.innerHTML = 'Unfavorite';
        e.target.dataset.favorite = 'true';
        document.getElementById('favoriteCount').textContent++;
      } else {
        let response = await fetch(`http://localhost:3000/articles/${postId}/favorite`, {
          method: 'DELETE',
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
        }).then(res => res.json())

        e.target.innerHTML = 'Favorite';
        e.target.dataset.favorite = 'false';
        document.getElementById('favoriteCount').textContent--;
      }
    }

    // Delete article 
    // document.getElementById('deleteArticle').addEventListener('click', async () => {
    //   console.log('Delete ' + postId)
    // })

    // ...

    // Create comment
    async function handleSubmit(e) {
      e.preventDefault()
      let result = await fetch(`http://localhost:3000/articles/${postId}/comments`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
        body: new URLSearchParams(new FormData(e.target))
      }).then(res => {
        if (res.status !== 200) {
          return alert(`${res.status} ${res.statusText}`)
        }
        return res.json()
      })

      console.log(result.comment)
    }

    var updateComments = document.querySelectorAll('.updateComment')
    var deleteComments = document.querySelectorAll('.deleteComment')

    // Update comment
    updateComments.forEach(updateComment => {
      updateComment.addEventListener('click', async (e) => {
        let commentId = e.target.dataset.comment

        let result = await fetch(`http://localhost:3000/articles/${postId}/comments/${commentId}`, {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
        }).then(res => {
          if (res.status !== 200) {
            return alert(`${res.status} ${res.statusText}`)
          }
          return res.json()
        })

        document.getElementById('commentId').value = result.comment._id
        document.getElementById('commentBody').value = result.comment.body
      })
    })

    // Delete comment
    deleteComments.forEach(deleteComment => {
      deleteComment.addEventListener('click', async (e) => {
        let commentId = e.target.dataset.comment

        let result = await fetch(`http://localhost:3000/articles/${postId}/comments/${commentId}`, {
          method: 'DELETE',
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
        }).then(res => {
          if (res.status !== 200) {
            return alert(`${res.status} ${res.statusText}`)
          }
          return res.json()
        })

        console.log(result)
      })
    })

    return {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: ['Post'] },
        { type: 'div', props: {}, children: [
          { type: 'h3', props: {}, children: [articleData.article.title] },
          { type: 'p', props: {}, children: [articleData.article.description] },
          { type: 'p', props: {}, children: [articleData.article.body] },
        ] },
        { type: 'div', props: {}, children: [
          { type: 'h3', props: {}, children: ['Comments'] },
          { type: 'form', props: { 'onSubmit': handleSubmit }, children: [
            { type: 'input', props: { 'type': 'text', 'name': '' }, children: [] },
            { type: 'button', props: { 'type': 'submit' }, children: ['create'] }
          ] }
        ] },
        { type: 'div', props: {}, children: [
          { type: 'ul', props: {}, children: commentList }
        ] },
      ]
    }

  
  } catch (err) {
    console.error(err)
  }
}