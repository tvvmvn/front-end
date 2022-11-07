import { useState, useEffect, useRef } from "react";

export default function Carousel({ photos }) {

  const [index, setIndex] = useState(0);
  
  return (
    <div className="">

      <div className="relative">
        <div className="flex overflow-hidden h-96">
          {photos.map(photo => (
            <div 
              key={photo} 
              className="w-full shrink-0 transition-all bg-gray-100"
              style={{transform: `translateX(-${index * 100}%)`}}
            > 
              <img 
                src={`http://localhost:3000/articles/${photo}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 bottom-0 flex items-center">
          <button 
            className="p-1 bg-white" 
            onClick={() => setIndex(index - 1)} 
            style={{display: index===0 && "none"}}
          >
            &#10094;
          </button>
        </div>
        
        <div className="absolute top-0 right-0 bottom-0 flex items-center">
          <button 
            className="p-1 bg-white" 
            onClick={() => setIndex(index + 1)} 
            style={{display: index===photos.length-1 && "none"}}
          >
            &#10095;
          </button>
        </div>
      </div>
      
      <div className="flex justify-center gap-1 py-2">
        {photos.map((photo, dot) => (
          <span 
            key={dot} 
            className="w-2 h-2 rounded-full bg-gray-200" 
            style={{backgroundColor: dot===index && "#888"}}
          >
          </span>
        ))}
      </div> 
    </div>
  )
}