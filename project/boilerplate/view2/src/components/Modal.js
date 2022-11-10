import {useState} from "react";

export default function Modal({children}) {
  const [active, setActive] = useState(false);

  const modal = (
    <ul style={{backgroundColor: "#ddd"}}>
      {children}
      <li>
        <button onClick={() => setActive(false)}>Close</button>
      </li>
    </ul>  
  )

  return (
    <div className="mb-2">
      <button onClick={() => setActive(true)}>Modal</button>
      {active && modal}
    </div>
  )
}