import {useState} from 'react';

export default function ManageDOM() {

  return (
    <>
      <p>Update Document</p>
      <App />
    </>
  )
}


/*

  Update Document in React

*/


// function App() {

//   /*
//     useState Hook

//     const [state, setState] = useState(initialValue);

//     state: a variable in Component
//     setState: a method that updates state.
//     initialValue: initial value of state.
//   */

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   )
// }


// function App() {
//   let count = 0;

//   /*
//     DOM Update without state Hook.

//     Document를 업데이트하기 위해서는 VirtualDOM을 다시 return해야 한다
//     VirtualDOM을 다시 return하기 위해서는 컴포넌트를 다시 실행해야 한다
//     setState는 App컴포넌트를 다시 실행한다
//     Document가 업데이트된다.
//   */

//   function handleClick(e) {
//     count++;
//     console.log(count)
//   }

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>Add</button>
//     </>  
//   )
// }


// function App() {
//   const [subscribed, setSubscribed] = useState(false);

//   return (
//     <>
//       <h1>Subscribe button</h1>
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {!subscribed ? "Subscribe" : "Subscribed"}
//       </button>
//     </>  
//   )
// }


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>count: {count}</p>

      <Article 
        count={count}
        setCount={setCount} 
      />  
    </>
  )
}

function Article(props) {
  return (
    <>
      <button onClick={() => props.setCount(props.count + 1)}>
        Add
      </button>
    </>  
  )
}