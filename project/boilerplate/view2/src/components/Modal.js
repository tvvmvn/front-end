import {useState} from "react";

export default function Modal({children}) {

  return (
    // <div className="mb-2">
    //   <button onClick={() => setActive(true)}>Modal</button>
    //   {modal}
    // </div>
    <details>
      <summary>Modal</summary>
      {children}
    </details>
  )
}