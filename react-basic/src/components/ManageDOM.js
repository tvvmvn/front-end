// # Manage DOM 
// function App() {
//   // const [state, setState] = useState(initialValue);
//   // state: a variable in Component
//   // setState: a method that updates state.
//   // initialValue: initial value of state.
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   )
// }

// DOM Update without state Hook.
// function App() {
//   let count = 0;

//   // DOM을 업데이트하기 위해서는 VirtualDOM을 다시 return해야 한다
//   // VirtualDOM을 다시 return하기 위해서는 App컴포넌트를 다시 실행해야 한다
//   // setState는 App컴포넌트를 다시 실행한다
//   // DOM이 업데이트된다.
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
//   const initialTime = new Date().toLocaleTimeString();
//   const [time, setTime] = useState(initialTime);

//   setTimeout(() => {
//     const updatedTime = new Date().toLocaleTimeString();
//     setTime(updatedTime);
//   }, 1000)

//   return (
//     <>
//       <h1>Clock</h1>
//       <p>{time}</p>
//     </>  
//   )
// }

// Q. Count
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>  
//   )
// }

// Q. Subscribe
// function App() {
//   const [subscribe, setSubscribe] = useState(false);

//   return (
//     <>
//       <h1>Subscribe</h1>
//       <button onClick={() => setSubscribe(!subscribe)}>
//         {!subscribe ? "Subscribe" : "Subscribed"}
//       </button>
//     </>  
//   )
// }

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