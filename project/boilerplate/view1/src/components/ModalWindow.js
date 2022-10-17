import { useEffect, useState, useRef } from "react";

export default function ModalWindow({children}) {
  
  const [active, setActive] = useState(false);

  const modal = (
    <div className="fixed inset-0 bg-black bg-opacity-20 z-10">
      <div className="h-full flex justify-center items-center">
        <ul className="bg-white w-60 rounded">
          {children}
          <li>
            <button
              type="button"
              className="p-1 text-center w-full"
              onClick={() => setActive(false)}
            >
              Close
            </button>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <>
      {active && modal}
      
      <button 
        className="" 
        onClick={() => setActive(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" width="4">
          <path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
        </svg>
      </button>
    </>  
  )
}