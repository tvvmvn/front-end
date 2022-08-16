export default async function Posts(props) {
  try {
    console.log(props)
    const q = props.q ? props.q : ''

    const articlesData = await fetch(`http://localhost:3000/articles?q=${q}`)
    .then(res => res.json())

    const articleList = articlesData.articles.map(article => {
      return { type: 'li', props: {}, children: [article.title] }
    })

    // Search
    async function handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData(e.target)
      var q = formData.get('q')

      document.getElementById('posts').replaceWith(
        createElement(await Posts({ params: props.params, q }))
      )
    }

    return {
      type: 'div',
      props: { 'id': 'posts' },
      children: [
        { type: 'h1', props: {}, children: ['Explore'] },
        { type: 'p', props: {}, children: ['View some posts!'] },
        { type: 'form', props: { 'onSubmit': handleSubmit }, children: [
          { type: 'input', props: { 'name': 'q', 'autocomplete': 'off' }, children: [] },
          { type: 'button', props: { 'type': 'submit' }, children: ['search'] }
        ] },
        { type: 'ul', props: {}, children: articleList }
      ]
    }

  } catch (err) {
    console.error(err);
  }
}