// using link
window.addEventListener('hashchange', (e) => {
  router();
})

// load event
window.addEventListener('load', (e) => {
  router();
})

// router
function router() {
  var url = location.hash.substring(1);
  var hasQuery = url.indexOf("?") > 0;
  var query;

  if (hasQuery) {
    query = url.substring(url.indexOf("?"));
    url = url.substring(url.indexOf("?"), -1);
  }

  var routes = [
    { path: 'home', element: Home },
    { path: 'posts', element: Posts },
    { path: 'post', element: Post },
    { path: 'contact', element: Contact },
  ]
  
  for (var i=0; i<routes.length; i++) {
    var path = routes[i].path;

    if (path === url) {
      document
        .getElementById("root")
        .innerHTML = routes[i].element(query);
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
        <a href="#post?postId=p1">Second post</a>
      </li>  
      <li>
        <a href="#post?postId=p0">First post</a>
      </li>  
    </ul>
  `)
}

function Post(query) {  
  return (`
    <h1>Post</h1>
    <p>${query}</p>
  `)
}

function Contact() {
  return (`
    <h1>Contact</h1>
    <p>john@example.com</p>
  `)
}