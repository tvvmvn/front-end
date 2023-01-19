import {Link} from 'react-router-dom';

export default function NavBar({title}) {

  return (
    <header 
      style={{display: 'flex', borderBottom: '1px solid', padding: '0.5rem'}}
    >
      <Link to="/">Home</Link>
      <div style={{marginLeft: '1rem'}}>
        {title.toUpperCase()}
      </div>
    </header>  
  )
}