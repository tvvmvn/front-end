
export default function Event() {

  return (
    <>
      <p>Event</p>
      <App />
    </>  
  )
}

/*

  Handling event in React
  
*/


function App() {

  function handleClick(e) {
    alert('lol');
  }

  return (
    <>
      <h1>Basic</h1>
      
      {/* onEventName=eventHandler */}
      <button onClick={handleClick}>Button</button>
    </>  
  )
}
