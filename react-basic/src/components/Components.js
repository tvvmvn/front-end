

export default function Components() {

  return (
    <>
      <p>Components</p>
      <App />
    </>  
  )
}

/*
  React Component
  
  1 What is Component
    independent and reusable pieces to build completex UIs.
  
  2 types of Components
    - function components √
    - class components

  3 Component Composition
    invoke another component in component
*/



/*
  1 What is Component
*/

// function App() {
//   // Component named App
//   // function component: basically function

//   // return VirtualDOM
//   return <h1>App</h1>
// }



/*
  3 Component composition
*/

function App() {

  return (
    <>
      <h1>Youtube</h1>
      <Content />
      
      <h2>Comments</h2>
      <Comments />

      <hr />

      <h2>Suggested</h2>
      <Suggested />
    </>
  )
}

function Content() {
  return (
    <div>
      <h2>고양이는 액체일까?</h2>
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
        alt=""
        width="100%"
      />
    </div>
  )
}

function Comments() {
  return (
    <ul>
      <li>유치하게 등수는... 3빠</li>
      <li>2빠</li>
      <li>1빠</li>
    </ul>  
  )
}

function Suggested() {
  return (
    <ul>
      <li>고양이는 정말 폭력적일까?</li>
      <li>고양이는 정말 자기가 신이라고 생각할까?</li>
      <li>냥냥펀치는 얼마나 아플까?</li>
    </ul>  
  )
}


// function App() {

//   return (
//     <>
//       <h1>Instagram</h1>

//       <Profile />
//       <Suggested />
//       <Timeline />
//     </>  
//   )
// }

// function Profile() {
//   return (
//     <>
//       <img
//         src="https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg" 
//         style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}}
//         />
//       <h3>다나카상</h3>
//       <p>안녕하세요 여러붕구, 다나카입니다</p>
//     </>  
//   )
// }

// function Suggested() {
//   return (
//     <>
//       <h3>Suggested</h3>
//       <ul>
//         <li>나몰라패밀리 공식계정</li>
//         <li>나몰라패밀리 김태환</li>
//         <li>아싸 최우선</li>
//       </ul>
//     </>
//   )
// }

// function Timeline() {
//   return (
//     <>
//       <h3>Timeline</h3>
//       <ul>
//         <li>시그니처 아르마니 티셔츠 입고 왔어요~</li>
//         <li>웃찾사 때보다 인기도 수입도 10배</li>
//       </ul>
//     </>
//   )
// }



