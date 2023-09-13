/*
  1 SPA (Single Page Application)
  Update page using JavaScript.
  It provides fast and smooth UI


  2 URL (Uniform Resource Locator)
  Website/server address
  
  e.g) https://google.com/news/sports/?page=1
  
    1) Path
    resource path

    e.g) https://google.com/news/sports
    
    2) Query parameter
    used to send small data inside url.
    path?key=value

    e.g) path?page=1
    
    3) Location hash
    used to find specific spot in web page.

    url#value

  e.g) https://google.com/news/sports/?page=1#lastArticle

  
  3 Router
  Connect request url with proper resource.
*/

var main = document.getElementById("main");

// load 
document.addEventListener("DOMContentLoaded", hashRouter);
// on link
window.addEventListener("hashchange", hashRouter);

// Hash Router
function hashRouter() {
  // Request URL
  var url = location.hash.substring(1);
  console.log("Request URL:", url);

  // url object
  var urlData = parseUrl(url);
  console.log(urlData);
  
  var routes = [
    { path: "/", element: Home },
    { path: "/posts", element: Posts },
    { path: "/post", element: Post },
    { path: "/contact", element: Contact },
  ]
  
  for (var i=0; i<routes.length; i++) {
    if (routes[i].path === urlData.path) {
      main.innerHTML = routes[i].element(urlData.query);
    }
  }    
}

// parsing url
function parseUrl(url) {
  var hasQuery  = url.indexOf("?") > -1;
  var path, query;

  if (hasQuery) {  
    // url.substring(startIndex, lastIndex)
    path = url.substring(url.indexOf("?"), -1), 
    query = url.substring(url.indexOf("?"))
  } else {
    path = url;
    query = null;
  }
  
  return { url, path, query };
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
        <a href="#/post?postId=p1">Second post</a>
      </li>  
      <li>
        <a href="#/post?postId=p0">First post</a>
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