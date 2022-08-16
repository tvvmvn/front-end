export default async function PostView(props) {
  try {
    var postId = props.params.id
    var isAuthor;

    // Article and author
    let articleData = await fetch(`http://localhost:3000/articles/${postId}`).then(res => res.json()) 

    if (auth && auth.user._id === articleData.article.author) {
      isAuthor = true
    }

    let isFavorite = await fetch(`http://localhost:3000/articles/${postId}/favorite`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
    }).then(res => res.json())

    console.log(isFavorite)

    async function handleSubmit(e) {
      e.preventDefault()
      let result = await fetch(`http://localhost:3000/articles/${postId}/comments`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
        body: new URLSearchParams(new FormData(e.target))
      }).then(res => res.json())

      console.log(result)

      document.getElementById('postView').replaceWith(
        createElement(await PostView({ params: props.params }))
      )
    }

    async function favoriteArticle() {
      let response = await fetch(`http://localhost:3000/articles/${postId}/favorite`, {
        method: isFavorite.favorite ? 'DELETE' : 'POST',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      }).then(res => res.json())

      console.log(response)
      document.getElementById('postView').replaceWith(
        createElement(await PostView({ params: props.params }))
      )
    }

    async function deleteComment(commentId) {
      let result = await fetch(`http://localhost:3000/articles/${postId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
        if (res.status !== 200) {
          return console.log(res)
        }
        return res.json()
      })

      console.log(result)

      document.getElementById('postView').replaceWith(
        createElement(await PostView({ params: props.params }))
      )
    }

    const commentList = articleData.comments.map(comment => {
      return { type: 'li', props: {}, children: [
        { type: 'div', props: {}, children: [`${comment.body} / ${comment.user.username}`] },
        { type: 'button', props: { 'onClick': () => deleteComment(comment._id) }, children: ['delete'] }
      ] }
    })

    return {
      type: 'div',
      props: { 'id': 'postView' },
      children: [
        { type: 'h1', props: {}, children: ['Post'] },
        { type: 'div', props: {}, children: [
          { type: 'h3', props: {}, children: [articleData.article.title] },
          { type: 'p', props: {}, children: [articleData.article.description] },
          { type: 'p', props: {}, children: [articleData.article.body] },
        ] },
        { type: 'div', props: { 'id': 'favoriteArticle' }, children: [
          { type: 'p', props: {}, children: [`Likes: ${articleData.article.favoriteCount}`] },
          { type: 'button', props: { 'onClick': favoriteArticle }, children: [isFavorite.favorite ? 'Dislikes' : 'likes'] }
        ] },
        { type: 'div', props: {}, children: [
          { type: 'a', props: { 'href': `/posts/${postId}/edit`, 'data-link': '' }, children: ['Edit'] },
          { type: 'a', props: {}, children: ['Delete'] },
        ] },
        { type: 'div', props: {}, children: [
          { type: 'h3', props: {}, children: ['Comments'] },
          { type: 'form', props: { 'onSubmit': handleSubmit }, children: [
            { type: 'input', props: { 'type': 'text', 'name': 'body' }, children: [] },
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