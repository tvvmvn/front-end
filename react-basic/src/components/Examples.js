export default function Examples() {

  return (
    <>
      <h1>Examples</h1>
      <p>
        Drawer, Side Bar, Carousel
      </p>
    </>  
  )
}


// # Drawer

// function App() {
//   const [active, setActive] = useState(false);

//   const style = {
//     position: "fixed",
//     bottom: "0",
//     left: "0",
//     width: "100%",
//     // dynamic style
//     maxHeight: active ? "100px" : "0",
//     backgroundColor: "#eee",
//     transition: "0.2s",
//   }

//   const drawer = (
//     <div style={style} onClick={() => setActive(false)}>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </div>
//   )

//   return (
//     <>
//       <h1>Drawer</h1>
//       <button 
//         onClick={() => setActive(true)}
//       >
//         Button
//       </button>
//       {drawer}
//     </>  
//   )
// }


// Q. Side bar

// function App() {
//   const [active, setActive] = useState(false);

//   const style = {
//     sideBar: {
//       position: "fixed", 
//       backgroundColor: "#fff", 
//       top: "0", 
//       left: active ? "0" : "-200px", 
//       zIndex: "1", 
//       width: "200px", 
//       height: "100%", 
//       transition: "0.2s"
//     },
//     overlay: {
//       position: "fixed",
//       top: "0",
//       left: "0",
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(0 0 0 / 0.2)",
//       display: active ? "block" : "none"
//     }
//   }

//   return (
//     <>
//       <h1>Navigation</h1>
//       <button
//         onClick={() => setActive(true)}
//       >
//         Button
//       </button>
//       {/* Navigation */}
//       <nav style={style.sideBar}>
//         <ul>
//           <li>list item</li>
//           <li>list item</li>
//           <li>list item</li>
//         </ul>
//       </nav>
//       {/* Overlay */}
//       <div
//         style={style.overlay}
//         onClick={() => setActive(false)}
//       >
//       </div>
//     </>  
//   )
// }


// # Carousel

// function App() {
//   const [index, setIndex] = useState(0);

//   console.log(index);

//   const images = ["foo.jpg", "bar.jpg", "baz.jpg"];

//   const container = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "#ddd",
//     display: "inline-flex",
//     transform: `translateX(-${index*100}px)`,
//     transition: "0.2s"
//   }

//   const item = {
//     width: "100%",
//     height: "100%",
//     border: "1px dashed",
//     flexShrink: "0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   }

//   const list = images.map(image => (
//     <div key={image} style={item}>
//       {image}
//     </div>
//   ))

//   return (
//     <>
//       <h1>Carousel</h1>

//       {/* Images */}
//       <div className="">
//         <h3>Images</h3>
//         <div className="container" style={container}>
//           {list}
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="">
//         <h3>Navigation</h3>
//         <button 
//           onClick={() => setIndex(index - 1)}
//           style={{visibility: index===0 && "hidden"}}
//           >
//             Prev
//           </button>
//         <button 
//           onClick={() => setIndex(index + 1)}
//           style={{visibility: index===2 && "hidden"}}
//           >
//             Next
//           </button>
//       </div>

//       {/* Indicator */}
//       <div className="">
//         <h3>Indicator</h3>
//         <div>
//           {images.map((image, dot) => (
//             <span 
//               key={dot} 
//               style={{color: dot===index && "red"}}
//             >
//               *
//             </span>  
//           ))}
//         </div>
//       </div>
//     </>  
//   )
// }