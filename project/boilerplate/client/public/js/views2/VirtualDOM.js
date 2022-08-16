
// /** @jsx h */ => tells Babel 'hey, transpile that jsx but instead of React.createElement, put h'
// tree
<ul class="list">
  <li>item 1</li>
  <li>item 2</li>
</ul>

// just JS objects
{ 
  type: 'ul', 
  props: { 'class': 'list' }, 
  children: [
    { type: 'li', props: {}, children: ['item1'] },
    { type: 'li', props: {}, children: ['item2'] },
  ] 
}

// We represent DOM elements with objects like
{ type: '...', props: { ... }, children: [ ... ] }  

// helper function 
function h(type, props, ...children) {
  return { type, props, children }
}

// Now we can write our DOM tree like this:
h('ul', { 'class': 'list' },
  h('li', {}, 'item 1'),
  h('li', {}, 'item 2'),
)

/**  @jsx h */
const a = (
  <ul className="list">
    <li>item 1</li>
    <li>item 2</li>
  </ul>
)

// And that will be transpiled by Babel to this code:
const a = (
  h('ul', { className: 'list' },
    h('li', {}, 'item1'),
    h('li', {}, 'item2'),
  )
)