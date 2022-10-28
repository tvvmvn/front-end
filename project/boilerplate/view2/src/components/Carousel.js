import {useState} from "react";

export default function Carousel({images}) {
  const [index, setIndex] = useState(0);

  console.log(index);

  const container = {
    transform: `translateX(-${index*100}px)`, 
    transition: "0.2s",
    backgroundColor: "#ddd",
    whiteSpace: "nowrap"
  }

  const indicator = images.map((image, i) => (
    <span key={i} style={{ color: i === index && "red" }}>
      @
    </span>
  ))

  const prev = (
    <button
      onClick={() => setIndex(index - 1)}
    >
      Prev
    </button>
  )

  const next = (
    <button
      onClick={() => setIndex(index + 1)}
    >
      Next
    </button>
  )

  return (
    <>
      <div style={{overflow: "hidden"}}>        
        <div style={container}>
          {images.map(image => (
            <img
              key={image}
              src={`http://localhost:3000/posts/${image}`}
              alt={image}
            />
          ))}
        </div>
      </div>

      <div className="">
        {indicator}
      </div>

      <div className="">
        {index!==0 && prev}
        {index!==images.length-1 && next}
      </div>
    </>
  )
} 