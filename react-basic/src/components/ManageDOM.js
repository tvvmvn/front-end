import {useState} from 'react';

export default function ManageDOM() {

  return (
    <>
      <h1>Update Document</h1>
      <p>
        with useState Hook
      </p>
      
      <App />
    </>
  )
}


// function App() {

//   /*
//     const [state, setState] = useState(initialValue);
//     state: a variable in Component
//     setState: a method that updates state.
//     initialValue: initial value of state.
//   */

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
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
//   }

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>Add</button>
//     </>  
//   )
// }


// Q. Subscribe
function App() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <>
      <h1>Subscribe</h1>
      <button onClick={() => setSubscribe(!subscribe)}>
        {!subscribe ? "Subscribe" : "Subscribed"}
      </button>
    </>  
  )
}


// Q. Subscribe with Subscribers
// function App() {
//   const [subscribe, setSubscribe] = useState(false);
//   const [subscribers, setSubscribers] = useState(0);

//   function handleClick(subscribe) {
//     if (subscribe) {
//       setSubscribe(false);
//       setSubscribers(subscribers - 1)
//     } else {
//       setSubscribe(true);
//       setSubscribers(subscribers + 1)
//     }
//   }

//   return (
//     <>
//       <h1>Subscribe</h1>
//       <p>Subscriber: {subscribers}</p>
//       <button onClick={() => handleClick(subscribe)}>
//         {!subscribe ? "Subscribe" : "Subscribed"}
//       </button>
//     </>  
//   )
// }