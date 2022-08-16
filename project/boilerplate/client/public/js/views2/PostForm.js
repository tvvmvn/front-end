export default async function (params) {
  try {
    // If update, PostId and articleData
    if (params) { 
      var postId = params.id
      var articleData = await fetch(`http://localhost:3000/articles/${postId}`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      }).then(res => res.json()) 
    }

      async function handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData(e.target)

        if (postId) { // Update article
          var response = await fetch(`http://localhost:3000/articles/${postId}`, {
            method: 'PUT',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
            body: new URLSearchParams(formData)
          }).then(res => {
            if (res.status !== 200) { return null; }
            return res.json();
          });
        } else { // Create article
          var response = await fetch(`http://localhost:3000/articles`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
            body: new URLSearchParams(formData)
          }).then(res => {
            if (res.status !== 200) { return null; }
            return res.json()
          });
        }

        if (response===null) {
          return alert('error!')
        }
        navigateTo('/posts');
      }


    return {
      type: 'div', props: {}, children: [
        { type: 'h1', props: {}, children: ['Post Form'] },
        { type: 'form', props: { 'onSubmit': handleSubmit }, children: [
          { type: 'input', props: { 'name': '', 'placeholder': 'title', 'value': `${articleData ? articleData.article.title : ``}` }, children: [] },
          { type: 'br', props: {}, children: [] },
          { type: 'input', props: { 'name': '', 'placeholder': 'description', 'value': `${articleData ? articleData.article.description : ``}` }, children: [] },
          { type: 'br', props: {}, children: [] },
          { type: 'input', props: { 'name': '', 'placeholder': 'body', 'value': `${articleData ? articleData.article.body : ``}` }, children: [] },
          { type: 'br', props: {}, children: [] },
          { type: 'button', props: { 'type': 'submit' }, children: ['Create'] }
        ] }
      ]
    }

  } catch (err) {
    console.error(err)
  }
}
