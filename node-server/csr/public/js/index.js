console.log('App Loaded!');

addEventListener('popstate', () => {
  router()
})

document.body.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();

    const url = e.target.href
    history.pushState(null, null, url)
  
    router()
  }
})

router();

async function router() {
  console.log('Router Loaded!');

  const routes = [
    { path: '/', view: () => Home({ username: 'bunny' }) },
    { path: '/posts', view: Posts },
    { path: '/contact', view: Contact },
  ]

  const match = routes.filter(route => location.pathname === route.path)

  const element = await match[0].view()

  const layout =  {
    type: 'div',
    props: {},
    children: [
      { type: 'nav',
        props: { 'class': 'nav' },
        children: [
          { type: 'ul', props: {}, children: [
            { type: 'li', props: {}, children: [ { type: 'a', props: { 'href': '/', 'class': 'nav__link', 'data-link': '' }, children: ['Home'] }
            ] },
            { type: 'li', props: {}, children: [
            { type: 'a', props: { 'href': '/posts', 'class': 'nav__link', 'data-link': '' }, children: ['Posts'] }
          ] },
            { type: 'li', props: {}, children: [
              { type: 'a', props: { 'href': '/contact', 'class': 'nav__link', 'data-link': '' }, children: ['Contact'] },
            ] },
          ] }
        ]
      },
      element
    ]
  }

  render(document.getElementById('root'), createElement(layout))
}

function render(root, element) {
  // if (!root.firstElementChild) {
  //   return root.appendChild(element)
  // }
  root.replaceChildren(element);
}

function Home(props) {
  return {
    type: 'div',
    props: { 'class': 'home' },
    children: [
      { type: 'h1', props: {}, children: ['Home'] },
      { type: 'p', props: {}, children: [`Hi, ${props.username}`] }
    ]
  }
}

async function Posts() {
  try {
    const articles = await fetch('https://dapi.kakao.com/v2/search/image?query=summer', {
      method: 'GET',
      headers: { 'Authorization': 'KakaoAK d5a49f32e43c184c2823a05cdaf8c841' }
    }).then(res => {
      // console.log(res)
      return res.json();
    })

    // console.log(articles.documents)

    const articleList = articles.documents.map(article => {
      return { type: 'img', props: { 'src': article.image_url, 'width': 100, 'height': 100, 'style': 'object-fit: cover' }, children: [''] }
    })

    return {
      type: 'div',
      props: { 'class': 'posts' },
      children: [
        { type: 'h1', props: {}, children: ['Posts'] },
        { type: 'div', props: {}, children: articleList }
      ]
    }
  } catch (error) {
    console.error(error)
  }
  // GET http://localhost:3000/article 404 (Not Found) 
  // > receive HTTP 404 (Not Found) Error and Response Object.
  // SyntaxError: Unexpected token < in JSON at position 0
  // > Error when changing 404 Response to json()
  // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'type')
  // > Posts() return nothing, so createElement error occured.
}

// var _value;

// function useState(initialValue) {
//   if (_value === undefined) {
//     _value = initialValue;
//   }
//   function setState(value) {
//     _value = value;

//     const layout = {
//       type: 'div',
//       props: {},
//       children: [Nav(), Contact()]
//     }

//     console.log(document.getElementById('root').firstElementChild)
//     console.log(createElement(layout))
    
//     document.getElementById('root').replaceChildren(createElement(layout))
//   }

//   return [_value, setState];
// }

function useState(val) {
  return [val, data => {
    console.log(data)
    
    // console.log(document.getElementById('root'))
    // console.log(createElement(Contact()))
  }]
}

function Contact() {

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target)

    console.log({ username: formData.get('username') })

    fetch('http://localhost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: formData.get('username') })
    })
    .then(res => res.json())
    .then(result => console.log(result))
  }

  return {
    type: 'form',
    props: { 'class': 'contact', 'onSubmit': handleSubmit },
    children: [
      { type: 'h1', props: {}, children: ['Contact'] },
      { type: 'input', props: { 'type': 'text', 'name': 'username' }, children: [''] },
      { type: 'button', props: { 'type': 'submit' }, children: ['button'] }
    ]
  }
}


function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

  const $el = document.createElement(node.type);

  Object.keys(node.props).map(prop => {
    if (prop.match(/^on/)) {
      $el.addEventListener(prop.slice(2).toLocaleLowerCase(), node.props[prop]) 
    } else if (typeof node.props[prop] === 'boolean') {
      if (node.props[prop]) {
        $el.setAttribute(prop, '');
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

///////////////////////////////////////////////////

// const user = {
//   username: 'bunny',
//   age: 1,
//   color: 'brown'
// }

// # obj[key]
// console.log(user['username'])

// slice(2)
// console.log(user.username.slice(2))

// # Regex
// console.log(user.username.match(/^a/)) // null
// console.log(user.username.match(/^b/)) // !null

// # document.createTextNode()
// const h1 = document.createElement('h1')
// h1.innerHTML = 'Heading';
// document.getElementById('root').appendChild(h1)

// const h1 = document.createElement('h1')
// const heading = document.createTextNode('Heading')
// h1.appendChild(heading)
// document.getElementById('root').appendChild(h1)

// # Object.keys()
// const keys = Object.keys(user)
// console.log(keys)

// map()
// Object.keys(user).map(key => {
//   console.log(key)
// })

// Recursive function
// re(0)

// function re(num) {
//   console.log(num)
//   // To avoit inifinite loop
//   if (num === 10) {
//     return;
//   }
//   // invoke self
//   re(num + 1)
// }

// function createElement(node) {
//   if (typeof node === 'string') {
//     return document.createTextNode(node)
//   }
//   const $el = document.createElement(node.type)

//   Object.keys(node.props).map(key => {
//     $el.setAttribute(key, node.props[key])
//   })

//   node.children.map(children => {
//     $el.appendChild(createElement(children)) 
//   })

//   return $el;
// }