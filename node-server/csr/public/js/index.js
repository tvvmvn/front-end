window.addEventListener('popstate', () => {
  router()
})
document.body.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault()
    navigateTo(e.target.getAttribute('href'))
  }
})
document.addEventListener('DOMContentLoaded', () => {
  router()
})

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

function router() {
  console.log(location.pathname)

  const routes = [
    { path: '/', view: () => console.log('Home') },
    { path: '/posts', view: () => console.log('Posts') },
    { path: '/contact', view: () => console.log('Contact') },
  ]

  const route = routes.filter(route => location.pathname === route.path)

  if (!route[0]) {
    return console.log('Not Found')
  }

  route[0].view()
}