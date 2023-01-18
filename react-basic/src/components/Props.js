

export default function Props() {

  return (
    <>
      <h1>Props</h1>

      <App />
    </>  
  )
}

/*
  Props

  1 What is Props
  2 Basic usage
  3 children props
  4 Context hook
*/

/*
  1 What is Props
    Parameters passed into Components
*/


// function App() {
  
//   const irishBeer = {name: 'Guinness', origin: 'Ireland', available: false};

//   return (
//     <>
//       <h1>Beer</h1>
//       <Beer beer={irishBeer} />  
//     </>
//   )
// }

// function Beer(props) {

//   const beer = props.beer;

//   return (
//     <ul>
//       <li>Name: {beer.name}</li>
//       <li>Origin: {beer.origin}</li>
//       <li>Available: {beer.available ? 'Yes' : 'No'}</li>
//     </ul>
//   )
// }


/*
  2 Basic usage
*/

const video = {
  title: '고양이는 액체일까?',
  src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800'
}

const suggestedVideos = [
  {id: 'a0', title: '고양이는 정말 폭력적일까?'},
  {id: 'a1', title: '고양이는 정말 자기가 신이라고 생각할까?'},
  {id: 'a2', title: '냥냥펀치는 얼마나 아플까?'},
];

const comments = [
  {id: 'c0', content: '1빠'},
  {id: 'c1', content: '2빠'},
  {id: 'c2', content: '유치하게 등수는... 3빠'},
];

function App() {

  return (
    <>
      <h1>Youtube</h1>

      <Content video={video} />

      <Comments comments={comments} />

      <hr />

      <Suggested suggestedVideos={suggestedVideos} />
    </>
  )
}

function Content(props) {

  const video = props.video;

  return (
    <div>
      <h2>{video.title}</h2>
      <img
        src={video.src}
        alt=""
        width="100%"
      />
    </div>
  )
}

function Comments(props) {

  const comments = props.comments;

  return (
    <>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>  
        ))}
      </ul>  
    </>
  )
}

function Suggested(props) {

  const suggestedVideos = props.suggestedVideos;

  return (
    <>
      <h2>Suggested</h2>
      {suggestedVideos.map(suggestedVideo => (
        <li key={suggestedVideo.id}>{suggestedVideo.title}</li>
      ))}
    </>  
  )
}



// const profile = {
//   username: '다나카',
//   image: 'https://image.xportsnews.com/contents/images/upload/article/2022/1206/mb_1670300078707386.jpg',
//   bio: '안녕하세요 여러붕구, 다나카입니다',
// };

// const accounts = [
//   {id: 's0', username: '나몰라패밀리 공식계정'},
//   {id: 's1', username: '나몰라패밀리 김태환'},
//   {id: 's2', username: '아싸 최우선'},
// ];

// const articles = [
//   {id: 'a0', title: '시그니처 아르마니 티셔츠 입고 왔어요~'},
//   {id: 'a1', title: '웃찾사 때보다 인기도 수입도 10배'},
// ]

// function App() {

//   return (
//     <>
//       <h1>Instagram</h1>

//       <Profile profile={profile} />
//       <Suggested accounts={accounts} />
//       <Timeline articles={articles} />
//     </>  
//   )
// }

// function Profile(props) {
  
//   const profile = props.profile;

//   return (
//     <>
//       <img
//         src={profile.image}
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

// function Suggested(props) {

//   const accounts = props.accounts;

//   return (
//     <>
//       <h2>Suggested</h2>
//       {accounts.map(account => (
//         <li key={account.id}>{account.username}</li>
//       ))}
//     </>
//   )
// }

// function Timeline(props) {

//   const articles = props.articles;

//   return (
//     <>
//       <h2>Timeline</h2>
//       {articles.map(article => (
//         <li key={article.id}>{article.title}</li>
//       ))}
//     </>
//   )
// }



