import {Link} from 'react-router-dom';

export default function Home() {

  return (
    <>
      <p>Tutorials</p>

      <ol>
        <li>
          <Link to="intro">Intro</Link>
        </li>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="event">Event</Link>
        </li>
        <li>
          <Link to="dom">Update document</Link>
        </li>
        <li>
          <Link to="router">Router</Link>
        </li>
        <li>
          <Link to="fetch">Fetch data</Link>
        </li>
      </ol>

      <p>Examples</p>
      <ol>
        <li>
          <Link to="">Todo list</Link>
        </li>
      </ol>
    </>  
  )
}