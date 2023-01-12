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
          <Link to="dom">Manage DOM</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="event">Event</Link>
        </li>
        <li>
          <Link to="form">Form</Link>
        </li>
        <li>
          <Link to="router">Router</Link>
        </li>
        <li>
          <Link to="fetch">Fetch data</Link>
        </li>
        <li>
          <Link to=""></Link>
        </li>
        <li>
          <Link to=""></Link>
        </li>
      </ol>
    </>  
  )
}