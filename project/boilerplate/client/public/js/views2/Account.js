
export default async function (params) {
  try {
    // params
    var username = params.username

    // profile
    let profileData = await fetch(`http://localhost:3000/profiles/${username}`, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    }).then(res => res.json())

    // Form handling
    async function handleSubmit(e) {
      e.preventDefault()
      var formData = new FormData(e.target)

      var response = await fetch(`http://localhost:3000/profiles/${username}`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
        body: formData
      })
      let result = await response.json()

      if (response.status !== 200) {
        return console.log(result)
      }
    }


    return {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: ['Edit profile'] },
        { type: 'form', props: { 'onSubmit': handleSubmit }, children: [
          { type: 'h3', props: {}, children: ['Bio'] },
          { type: 'input', props: { 'type': 'text', 'name': 'bio', 'value': profileData.profile.bio }, children: [] },
          { type: 'h3', props: {}, children: ['Photo']  },
          { type: 'p', props: {}, children: [profileData.profile.image] },
          { type: 'h3', props: {}, children: ['Save change'] },
          { type: 'button', props: { 'type': 'submit' }, children: ['Submit'] }
        ] }
      ]
    }

  } catch (err) {
    console.error(err)
  }
}