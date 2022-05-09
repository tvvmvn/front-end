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
    { path: '/', view: () => Home({ message: 'Welcome' }) },
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
  if (!root.firstElementChild) {
    return root.appendChild(element)
  }
  root.replaceChildren(element);
}

function Home(props) {
  return {
    type: 'div',
    props: { 'class': 'home' },
    children: [
      { type: 'h1', props: {}, children: ['Home'] },
      { type: 'p', props: {}, children: [props.message] }
    ]
  }
}

async function Posts() {
  const result = await fetch('http://localhost:3000')
  .then(res => res.json())

  return {
    type: 'div',
    props: { 'class': 'posts' },
    children: [
      { type: 'h1', props: {}, children: ['Posts'] },
      { type: 'p', props: {}, children: [result.message] }
    ]
  }
}

function useState(val) {
  return [val, data => {
    console.log(data)
  }]
}

function Contact() {
  const [data, setData] = useState('Apple');

  return {
    type: 'div',
    props: { 'class': 'contact' },
    children: [
      { type: 'h1', props: {}, children: ['Contact'] },
      { type: 'p', props: {}, children: [data] },
      { type: 'button', props: { 'onClick': () => setData('Banana') }, children: ['button'] }
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