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


function App() {

  /*
    useState Hook

    const [state, setState] = useState(initialValue);

    state: a variable in Component
    setState: a method that updates state.
    initialValue: initial value of state.
  */

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  )
}


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

//   function handleClick() {
//     setSubscribed(!subscribed);
//   }

//   return (
//     <>
//       <h1>Subscribe button</h1>
//       <button onClick={handleClick}>
//         {!subscribed ? "Subscribe" : "Subscribed"}
//       </button>
//     </>  
//   )
// }

