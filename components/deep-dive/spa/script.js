/*
  1 Router
  Connect request url with proper resource.

  2 URL (Uniform Resource Locator)
  Website/server address
  
  e.g) https://google.com/news/sports/?page=1
  
  1) Path
  resource path

  e.g) https://google.com/news/sports
  
  2) Query parameter
  used to send small data inside url.
  path?key=value

  e.g) ?page=1
  
  3) Location hash
  used to find specific spot in web page.

  url#value

  e.g) https://google.com/news/sports/?page=1#lastArticle
*/

// load 
document.addEventListener("DOMContentLoaded", router);
// on link
window.addEventListener("hashchange", router);

// Hash router
function router() {
  var url = location.hash.substring(1);
  var path, query;

  console.log("URL:", url);

  // url has query
  if (url.indexOf("?") > -1) {
    // substring(startIndex, endIndex)
    path = url.substring(url.indexOf("?"), -1);
    query = url.substring(url.indexOf("?"));    
  } else { // url has no query
    path = url;
    query = null;
  }

  console.log("path:", path);
  console.log("query:", query);
  
  var routes = [
    { path: "", element: Home },
    { path: "posts", element: Posts },
    { path: "post", element: Post },
    { path: "contact", element: Contact },
  ]
  
  for (var i=0; i<routes.length; i++) {
    if (routes[i].path === path) {
      document
        .getElementById("main")
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