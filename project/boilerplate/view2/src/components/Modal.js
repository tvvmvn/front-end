import {useState} from "react";

export default function Modal({children}) {

  const [active, setActive] = useState(false);

  const modal = (
    <div className="" style={{display: !active && "none"}}>
      <h3>Modal</h3>
      <ul>
        {children}
        <li>
          <button onClick={() => setActive(false)}>Cancel</button>
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <button onClick={() => setActive(true)}>Modal</button>
      {modal}
    </>
  )
}