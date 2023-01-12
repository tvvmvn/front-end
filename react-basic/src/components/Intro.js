  export default function Intro() {

  return (
    <>
      <h1>Intro</h1>
      <Content />
    </>  
  )
}


/*

1 What is React
  - A JavaScript library fot building UI
  - developed by Facebook
  - Most popular Front-End framework


2 React feature
  - Components(Parts for buiding View) based
  Composition, Reusablility
  
  - Declarative
  easy to use
  

3 Structure
  it has single page structure
  insert virtual DOM to HTML


  * library: a bundle of code for temporal use
  * UI (User Interface): Tools that make users can interact with app
  e.g) VIEW

*/


function Content() {

  return (
    <div>
      <h3>Virtual DOM(Document)</h3>
      <ul>
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
      </ul>
    </div>
  )
}