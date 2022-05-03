
router()

window.addEventListener('popstate', () => {
  router()
})

document.body.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    
    const url = e.target.getAttribute('href')
    history.pushState(null, null, url);
    router();
  }
})

function router() {
  const routes = [
    { path: '/', view: () => Home({ fruit: 'Apple' }) },
    { path: '/posts', view: Posts },
    { path: '/contact', view: Contact },
  ]

  const route = routes.filter(route => location.pathname === route.path);

  const element = {
    type: 'div',
    props: { 'id': 'root' },
    children: [Nav(), route[0].view()]
  }

  document.getElementById('root').replaceWith(createElement(element))
}

function Nav() {
  return {
    type: 'nav',
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
  }
}

function Home(props) { 

  function handleClick() {}
  
  return {
    type: 'div',
    props: {},
    children: [
      { type: 'h1', props: {}, children: ['Home'] },
      { type: 'p', props: {}, children: [props.fruit] },
      { type: 'button', props: { 'onClick': handleClick }, children: ['button'] },
    ]
  }
}

function Posts() {
  console.log('Posts Loaded!')

  // fetch('http://localhost:3000')
  // .then(res => res.text())
  // .then(result => console.log(result))
    
  return {
    type: 'h1',
    props: {},
    children: ['Posts']
  }
}

function Contact() {
  return {
    type: 'h1',
    props: {},
    children: ['Contact']
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