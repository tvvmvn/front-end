import Nav from './views2/Nav.js';
import Auth from './views2/Auth.js';
import Dashboard from './views2/Dashboard.js';
import Posts from './views2/Posts.js';
import PostView from './views2/PostView.js';
import Login from './views2/Login.js';
import SignUp from './views2/SignUp.js';
import PostForm from './views2/PostForm.js';
import Profile from './views2/Profile.js';
import Footer from './views2/Footer.js';
import Test from './views2/Test.js';
import Account from './views2/Account.js';
import Verification from './views2/Verification.js';


// One, history back and go
window.addEventListener('popstate', () => {
  router()
})
// Two, click anchor tag
document.body.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault()
    navigateTo(e.target.getAttribute('href'))
  }
})
// Three, reload page
document.addEventListener('DOMContentLoaded', () => {
  router()
})

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(\\w+)') + '$'); 
    
const getParams = match => {
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
  const values = match.result.slice(1);

  let result = Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }))
  
  return result;
}

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  try {
    const routes = [ 
      { path: '/', view: () => Dashboard() }, 
      { path: '/profiles/:username', view: (params) => Profile(params) }, // params
      { path: '/profiles/:username/edit', view: (params) => Account(params) }, // params
      { path: '/posts', view: (params) => Posts({ params }) }, 
      { path: '/login', view: () => Login() }, 
      { path: '/signup', view: () => SignUp() }, 
      { path: '/posts/new', view: () => PostForm() }, 
      { path: '/posts/:id', view: (params) => PostView({ params }) },  // params
      { path: '/posts/:id/edit', view: (params) => PostForm(params) }, // params
      { path: '/test', view: Test },
      { path: '/users/:userId/:token', view: (params) => Verification(params) } // params
    ]

    let match = routes.find(route => {
      if (location.pathname.match(pathToRegex(route.path))) {
        return route;
      }
    })

    // 404 Not Found
    if (!match) {
      return document.getElementById('app').innerHTML = `<h1>404 maybe?</h1>`;
    }
      
    var obj = { 
      route: match, 
      result: location.pathname.match(pathToRegex(match.path)) 
    }
    // console.log(getParams(obj))

    // Auth
    const auth = await fetch('http://localhost:3000/user', {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    }).then(res => {
      if (res.status !== 200) { return null }
      return res.json()
    })
    window.auth = auth;
    
    document.getElementById('app').innerHTML = '';

    // Navigation
    document.getElementById('app').appendChild(createElement(await Nav()))
    // View Page
    document.getElementById('app').appendChild(createElement(await match.view(getParams(obj))))
  } catch (err) {
    console.error(err)
  }
}

const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

  const $el = document.createElement(node.type);

  Object.keys(node.props).map(prop => {
    if (prop.match(/^on/)) {
      $el.addEventListener(prop.slice(2).toLocaleLowerCase(), node.props[prop]) 
    } else if (typeof node.props[prop] === 'boolean') {
      if (node.props[prop]) {
        $el.setAttribute(prop, '')
      } 
    } else {
      $el.setAttribute(prop, node.props[prop])
    }
  })
  
  node.children.map(c => {
    $el.appendChild(createElement(c))
  })

  return $el;
}

window.navigateTo = navigateTo
window.router = router
window.createElement = createElement










