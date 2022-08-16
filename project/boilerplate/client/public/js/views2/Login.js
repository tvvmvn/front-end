export default async function () {
  try {
  
    async function handleSubmit(e) {
      e.preventDefault()
      const formData = new FormData(e.target)
  
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        body: new URLSearchParams(formData)
      })
      const result = await response.json()
  
      if (response.status !== 200) {
        return document.getElementById('errors').innerHTML = result.message
      }
  
      localStorage.setItem('jwt', result.token)
      navigateTo('/')
    }


    function logOut(e) {
      e.preventDefault()
      localStorage.removeItem('jwt')
      navigateTo('/')
    }

    const loginPage = {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: ['Login'] },
        { 
          type: 'form', props: { 'onSubmit': handleSubmit }, children: [
            { type: 'input', props: { 'type': 'text', 'name': 'email', 'value': 'bunny@example.com' }, children: [] },
            { type: 'input', props: { 'type': 'text', 'name': 'password', 'value': '123' }, children: [] },
            { type: 'button', props: {}, children: ['Submit'] }
          ] 
        },
        { type: 'div', props: { 'id': 'errors' }, children: ['Enter username and password'] },
        { type: 'a', props: { 'href': '/signup', 'class': 'nav__link', 'data-link': '' }, children:['Sign up'] }
      ]
    }
    
    const profilePage = {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: [`Hi, ${ auth && auth.user.username }`] },
        { type: 'a', props: { 'onClick': logOut }, children: ['Logout'] }
      ]
    }

    return auth ? profilePage: loginPage

  } catch (err) {
    console.error(err)
  }
}


