export default async function (params) {
  try {
    const username = params.username

    // Edit profile
    const isMaster = auth && auth.user.username===username ? true : false;
    
    // Profile
    const profileData = await fetch(`http://localhost:3000/profiles/${username}`)
    .then(res => res.json())
    
    // Folowing data
    // const isFollowing = await fetch(`http://localhost:3000/profiles/${username}/follow`, {
    //   headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    // }).then(res => res.json())

    // console.log(isFollowing)
    
    // Articles
    const articlesData = await fetch(`http://localhost:3000/articles?username=${username}`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    }).then(res => res.json())

    const articleList = articlesData.articles.map(article => {
      return { 
        type: 'li', props: {}, children: [
          { type: 'a', props: { 'href': `/posts/${ article._id }` }, children: [article.title] }
        ] 
      }
    })

    // Follow
    async function followUser() {
      if (e.target.dataset.following==="true") {
        var response = await fetch(`http://localhost:3000/profiles/${username}/follow`, {
          method: 'DELETE',
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
        }).then(res => res.json())

        e.target.dataset.following = "false"
        e.target.innerHTML = 'Follow'

      } else {
        var response = await fetch(`http://localhost:3000/profiles/${username}/follow`, {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
        }).then(res => res.json())

        e.target.dataset.following = "true"
        e.target.innerHTML = 'Unfollow'
      }
    }

    const editingTemplate = {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: [username] },
        { type: 'img', props: { 'width': '100', 'src': `http://localhost:3000/static/data/${profileData.profile.image ? profileData.profile.image : `avatar.jpeg`}` }, children: [] },
        { type: 'p', props: {}, children: [profileData.profile.bio] },
        { type: 'a', props: { 'href': `/profiles/${ username }/edit`, 'data-link': '' }, children: ['Edit profile'] },
        { type: 'ul', props: {}, children: articleList },
        { type: 'a', props: { 'href': '/posts/new', 'data-link': '' }, children: ['New Post'] }
      ]
    }

    const viewTemplate = {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: [username] },
        { type: 'img', props: { 'width': '100', 'src': `http://localhost:3000/static/data/${profileData.profile.image ? profileData.profile.image : `avatar.jpeg`}` }, children: [] },
        { type: 'p', props: {}, children: [profileData.profile.bio] },
        { type: 'button', props: { 'onClick': followUser }, children: ['Follow'] },
        { type: 'ul', props: {}, children: articleList }
      ]
    }

    return isMaster ? editingTemplate : viewTemplate

  } catch (err) {
    console.error(err)
  }
}
