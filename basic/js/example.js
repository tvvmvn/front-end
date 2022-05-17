startPage();

function startPage() {
  let button = {
    type: 'div',
    props: {},
    children: [
      { type: 'h1', props: {}, children: ['Make group'] },
      { type: 'button', props: { 'onClick': () => createGroup(false) }, children: ['Test'] },
      { type: 'button', props: { 'onClick': () => createGroup(true) }, children: ['Go'] }
    ]
  }
  
  document.getElementById('root').replaceChildren(createElement(button));
}

function createGroup(isReal) {

  if (!isReal) {
    return controller();
  }

  let loadPage = {
    type: 'h1', props: {}, children: ['Loading...']
  }
  document.getElementById('root').replaceChildren(createElement(loadPage))

  setTimeout(controller, 3000)

  function controller() {
    let numbers = []
    
    for (let i=1; i<=30; i++) {
      numbers.push(i)
    }
    
    numbers.sort(() => 0.5 - Math.random())
    
    let groups = {}
  
    for (i=1; i<=6; i++) {
      groups['Group-' + i] = numbers.splice(0, 5);
    }
  
    let groupList = Object.keys(groups).map(key => {
      return { type: 'li', props: {}, children: [
        { type: 'h2', props: {}, children: [`${key}: ${groups[key].toString()}`] }
      ] }
    })
    
    let element = {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: ['Groups']},
        { type: 'ul', props: {}, children: groupList },
        { type: 'button', props: { 'onClick': startPage }, children: ['Go to start'] }
      ]
    }
  
    document.getElementById('root').replaceChildren(createElement(element))
  }
}

function createElement(node) {
  try {
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
    
  } catch (err) {
    console.error(err);
  }
}