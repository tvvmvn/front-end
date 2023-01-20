import {useState, useEffect} from 'react';

export default function FetchData() {

  return (
    <>
      <p>Fetch Data</p>
      <App />
    </>   
  )
}


/*

  Fetch data

  1 What is fetching data
    request data to server, and receive response from server
  2 useEffect Hook
  3 data fetching example

*/


/*
  2 useEffect
*/

function App() {
  const [count, setCount] = useState(0);

  /*
    
    # useEffetch Hook

    useEffect(effect): excute effect whenever component is executed.
    useEffect(effect, []): excute effect only at first.
    useEffect(effect, [dep]): excute effect at first and whenever dependency is changed.

  */

  useEffect(() => {
    console.log('lol');
  }, [])

  return (
    <>
      <h1>App</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>  
  )
}

/*
  3 data fetching example
*/

// function fetchData() {

//   const DATA = {
//     username: 'danaka',
//     image: 'https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg',
//     bio: '안녕하세요 여러붕구, 다나카입니다 ^00^'
//   }
  
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(DATA)
//     }, 2000)
//   })

//   return promise;
// }


// function App() {

//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     fetchData()
//     .then(data => {
//       setProfile(data)
//     })
//     .catch(error => {
//       setError(error)
//     })
//     .finally(() => setIsLoaded(true))
//   }, [])

//   if (error) {
//     return <p>failed to fetch profile</p>
//   }

//   if (!isLoaded) {
//     return <p>fetching profile...</p>
//   }

//   return (
//     <>
//       <h1>Profile</h1>
//       <img
//         src={profile.image}
//         alt={profile.username}
//         style={{
//           width: '100px',
//           height: '100px',
//           objectFit: 'cover',
//           borderRadius: '50%'
//         }}
//       />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>  
//   )
// }


