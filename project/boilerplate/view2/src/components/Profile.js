import {useState, useEffect, useContext} from "react";
import {useParams, Link} from "react-router-dom";
import AuthContext from "./AuthContext";
import ArticleList from "./ArticleList";

export default function Profile() {
  const params = useParams();
  const username = params.username;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialProfile, setInitialProfile] = useState(null);
  const [initialArticles, setInitialArticles] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:3000/profiles/${username}`, {
        headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
      }),
      fetch(`http://localhost:3000/profiles/${username}/articles`, {
        headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
      })
    ])
    .then(([res1, res2]) => {
      if (!res1.ok) {
        throw res1;
      }
      if (!res2.ok) {
        throw res2;
      }
      return Promise.all([res1.json(), res2.json()]);
    })
    .then(([data1, data2]) => {
      setInitialProfile(data1);
      setInitialArticles(data2);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true));
  }, [])

  if (error) {
    return <p>Error</p>
  }
  if (!isLoaded) {
    return <p>Loading...</p>
  } 
  return (
    <>
      <h1>Profile</h1>
      <ProfileDetail initialProfile={initialProfile} />
      <ProfileTimeline initialArticles={initialArticles} />
    </>  
  )
}

function ProfileDetail({initialProfile}) {
  const [profile, setProfile] = useState(initialProfile);
  const auth = useContext(AuthContext);
  
  return (
    <>
      <h3>{profile.username}</h3>
      <button type="button" onClick={auth.signOut}>Logout</button>
    </>  
  )
}

function ProfileTimeline({initialArticles}) {
  const [articles, setArticles] = useState(initialArticles);

  return (
    <>
      <h3>Articles</h3>
      {articles.map(article => (
        <Link key={article._id} to={`/article/${article._id}`}>
          <img
            src={`http://localhost:3000/posts/${article.photos[0]}`}
          />
        </Link>
      ))}
    </>  
  )
}

