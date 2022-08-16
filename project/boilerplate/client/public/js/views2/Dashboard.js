export default async function() {
  try {
    if (!auth) {
      const element = {
        type: 'h1',
        props: {},
        children: ['Not allowed']
      }
      return element;
    }

    
    const articlesData = await fetch('http://localhost:3000/articles/feed', {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    }).then(res => res.json())

    const articleList = articlesData.articles.map(article => {
      return { type: 'li', props: {}, children: [article.title] }
    })

    return {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: ['Feed'] },
        { type: 'ul', props: {}, children: articleList }
      ]
    }

  } catch (error) {
    console.error('Error! ', error)
  }
}
