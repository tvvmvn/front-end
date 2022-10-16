import { Suspense, useEffect, useState, useRef } from "react";

export default function Test() {
  console.log("Test Loaded!");

  const [isLoaded, setIsLoaded] = useState(false);

  const modal = useRef(null);
  
  function toggleModal() {
    modal.current.classList.toggle("hidden")
    console.log(modal.current);
    console.log(modal.current?.classList);
  }


  return (
    <>
      <h1 className="text-2xl mb-2">Test</h1>   
      <div ref={modal} className="hidden">MODAL {modal.current?.classList[0]}</div>
      <p>
        <button onClick={() => setIsLoaded(!isLoaded)}>{isLoaded.toString()}</button>
      </p>
      <p>
        <button onClick={toggleModal}>+</button>
      </p>
    </>
  )
}