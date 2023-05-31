// using nav
window.addEventListener('hashchange', (e) => {
  router(location.hash);
})

// load event
window.addEventListener('load', (e) => {
  router(location.hash);
})

// router
function router(hash) {
  var url = hash.substr(1);

  console.log(url);

  var routes = [
    { path: 'home', element: Home },
    { path: 'posts', element: Posts },
    { path: 'post/2', element: Post },
    { path: 'contact', element: Contact },
  ]

  for (var i=0; i<routes.length; i++) {
    if (routes[i].path === url) {
      document
        .getElementById('root')
        .innerHTML = routes[i].element();
    }
  }    
}

function Home() {
  return (`
    <h1>Home</h1>
    <p>Welcome to my blog.</p>
  `);
}

function Posts() {
  return (`
    <h1>Posts</h1>
    <ul>
      <li>
        <a href="#post/2">Second post</a>
      </li>  
      <li>
        First post
      </li>  
    </ul>
  `)
}

function Post() {
  // AJAX (request to server)
  var DATA = { 
    id: 2, 
    contents: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Neque, deserunt quae, magnam similique, ducimus ex unde minima corrupti sit 
      voluptatibus architecto eos provident aliquam iure placeat dolores in laborum delectus.`,
    createdAt: '19 April, 2023'
  }
  
  return (`
    <h1>Second post</h1>
    <small>
      posted <i>${DATA.createdAt}</i>
    </small>
    <p>${DATA.contents}</p>
  `)
}

function Contact() {
  return (`
    <h1>Contact</h1>
    <p>john@example.com</p>
  `)
}