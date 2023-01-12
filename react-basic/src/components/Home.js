import {Link} from 'react-router-dom';

export default function Home() {

  return (
    <>
      <h1>React Basic</h1>
      <h3>Tutorials</h3>
      <ol>
        <li>
          <Link to="intro">Intro</Link>
        </li>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="">Component</Link>
        </li>
        <li>
          <Link to="">Manage DOM</Link>
        </li>
        <li>
          <Link to=""></Link>
        </li>
      </ol>
    </>  
  )
}