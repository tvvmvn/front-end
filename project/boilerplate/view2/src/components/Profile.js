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
    setIsLoaded(false);

    const profilePromise = fetch(`http://localhost:3000/profiles/${username}`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })

    const articlesPromise = fetch(`http://localhost:3000/profiles/${username}/articles`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })

    Promise.all([profilePromise, articlesPromise])
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
  }, [username])

  if (error) {
    return <p>failed to fetch</p>
  }
  if (!isLoaded) {
    return <p>fetching profile...</p>
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
  const isMaster = auth.user.username === profile.username;

  useEffect(() => {
    setProfile(initialProfile)
  }, [initialProfile]);

  function editProfile() {
    if (!profile.isFollowing) {
      fetch(`http://localhost:3000/profiles/${profile.username}/follow`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        const editedProfile = {...profile, isFollowing: true}
        setProfile(editedProfile);
      })
      .catch(error => alert("failed to follow"))
    } else {
      fetch(`http://localhost:3000/profiles/${profile.username}/follow`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        const editedProfile = {...profile, isFollowing: false}
        setProfile(editedProfile);
      })
      .catch(error => alert("failed to unfollow"))
    }
  }

  const accountTemplate = (
    <>
      <div className="mb-2">
        <Link to="/accounts/edit">Edit profile</Link>
      </div>
      <button type="button" onClick={auth.signOut}>Logout</button>
    </>
  )

  const editTemplate = (
    <button onClick={editProfile}>
      {!profile.isFollowing ? "Follow" : "Unfollow"}
    </button>  
  )
  
  return (
    <div>
      <div>
        <img src={`http://localhost:3000/users/${profile.image || "avatar.jpeg"}`} />
      </div>

      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>

      {isMaster ? accountTemplate : editTemplate}

      <div>
        <ul>
          <li>Follower {profile.followersCount}</li>
          <li>Following {profile.followingCount}</li>
          <li>Articles {profile.articlesCount}</li>
        </ul>
      </div>

    </div>  
  )
}

function ProfileTimeline({initialArticles}) {
  const [articles, setArticles] = useState(initialArticles);

  useEffect(() => {
    setArticles(initialArticles)
  }, [initialArticles])

  return (
    <>
      <h3>Timeline</h3>
      {articles.map(article => (
        <Link key={article._id} to={`/article/${article._id}`}>
          <img
            src={`http://localhost:3000/articles/${article.photos[0]}`}
          />
        </Link>
      ))}
    </>  
  )
}

