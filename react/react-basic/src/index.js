import ReactDOM from 'react-dom/client';
import React, { useState, useEffect, useContext, createContext, Component, useReducer, useRef, isValidElement } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  BrowserRouter
} from "react-router-dom";


// ### React

// # props and state
// props (“properties”의 줄임말) 와 state 는 일반 JavaScript 객체입니다. 
// 두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖고 있는데, 
// 한 가지 중요한 방식에서 차이가 있습니다. props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 
// state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리됩니다.

// # What is Hook?
// Hooks allow function components to have access to state and other React features. 
// Because of this, class components are generally no longer needed.

// # useState()
// return [initialValue, function to change state]
// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

// # useEffect() 
// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect(function, dependency)

// # useRef()
// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.


// # Hook Example

// # useState() 
// function App() {
//   console.log('App Loaded!')

//   const [data, setData] = useState('Apple');

//   function handleChange() {
//     setData('Banana')
//   }

//   return (
//     <>
//       <h1>{data}</h1>
//       <button onClick={handleChange}>button</button>
//     </>
//   )
// }

// # useEffect() Example

// No dependency
// function App() {
//   console.log('App Loaded!');

//   useEffect(() => {
//     console.log(1)
//   })

//   console.log(2)
// }

// with [] (empty array)
// function App() {
//   console.log('App Loaded!');

//   const [count, setCount] = useState(0);

//   console.log(count)

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setCount(count + 1)
//   //   }, 1000)
//   // })

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1)
//     }, 1000)
//   }, [])
// }

// [dep1, dep2, ...] with dependency
// function App() {
//   console.log('App Loaded!');

//   const [data, setData] = useState(0)

//   useEffect(() => {
//     console.log('..')
//   }, [data])

//   function handleChange() {
//     setData(1)
//   }
  
//   return (
//     <>
//       <h1>...</h1>
//       <button onClick={handleChange}>button</button>
//     </>
//   )
// }


// # useRef() Example

// Directly accessing DOM elements.
// function App() {
  
//   // return current value asynchronously
//   const inputElement = useRef();

//   console.log(inputElement);

//   useEffect(() => {
//     console.log(inputElement);
//     inputElement.current.focus()
//   }, [])

//   return (
//     <>
//       <h1>..</h1>
//       <input type="text" ref={inputElement} />
//     </>
//   )
// }

// persist value between render
// function App() {
//   const [data, setData] = useState('Apple')
  
//   const previousData = useRef();

//   useEffect(() => {
//     previousData.current = data;
//     console.log(previousData)
//   }, [])

//   function handleChange() {
//     setData('Banana')
//   }

//   return (
//     <>
//       <h1>{data}</h1>
//       <p>data was {previousData.current}</p>
//       <button onClick={handleChange}>button</button>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)