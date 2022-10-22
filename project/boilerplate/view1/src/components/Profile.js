import { useEffect, useState, Suspense, useContext, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import ArticleList from "./ArticleList";
import { ErrorMessage, Loading, Fallback } from "./Progress";
import wrapPromise from "./wrapPromise";

function fetchData(username) {
  const profilePromise = fetch(`http://localhost:3000/profiles/${username}`, {
    headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  })

  const articlesPromise = fetch(`http://localhost:3000/profiles/${username}/articles`, {
    headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  })

  return {
    profile: wrapPromise(profilePromise),
    articles: wrapPromise(articlesPromise)
  }
}

export default function () {
  const params = useParams();
  const username = params.username;
  const resource = fetchData(username);

  return (
    <Suspense fallback={<Fallback />}>
      <ProfileDetail resource={resource} />
      <ProfileTimeline resource={resource} />
    </Suspense>
  )
}

function ProfileDetail({ resource }) {
  const initialProfile = resource.profile.read();
  const [profile, setProfile] = useState(initialProfile);
  
  const auth = useContext(AuthContext);
  const isMaster = auth.user.username === profile.username;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  console.log(initialProfile);
  
  useEffect(() => {
    setProfile(initialProfile)
  }, [resource])

  function editFollow() {
    setError(null);
    setIsLoaded(false);

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
      .catch(error => setError("failed to follow"))
      .finally(() => setIsLoaded(true));
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
      .catch(error => setError("failed to unfollow"))
      .finally(() => setIsLoaded(true));
    }
  }

  return (
    <>
      <div className="flex mt-3 mb-3 px-3">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img 
            src={`http://localhost:3000/users/${profile.image || "avatar.jpeg"}`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grow ml-3">
          <div className="flex flex-col">
            <div className="text-xl mb-2">{profile.username}</div>
              {isMaster ?
                <Link to={`/accounts/edit`} className="border p-1 text-center">Edit Profile</Link> 
                :
                <button
                  className={`border p-1 w-full`}
                  onClick={editFollow}
                >
                  {profile.isFollowing ? "Following" : "Follow"}
                </button>
            }
          </div>
        </div>
      </div>

      <div className="mb-3 px-3">
        <p className="">
          {profile.bio}
        </p>
      </div>

      <ul className="flex border-y mb-3 py-1">
        <li className="flex flex-col items-center w-full">
          <div className="">Followers</div>  
          <Link to={`/profiles/${profile.username}/followers`}>
            {profile.followersCount}
          </Link>
        </li>
        <li className="flex flex-col items-center w-full">
          <div className="">Following</div>  
          <Link to={`/profiles/${profile.username}/following`}>
            {profile.followingCount}
          </Link>
        </li>
        <li className="flex flex-col items-center w-full">
          <div className="">Posts</div>  
          <div className="">
            {profile.articlesCount}
          </div>
        </li>
      </ul>

      <ErrorMessage error={error} />
    </>
  )
}

function ProfileTimeline({ resource }) {
  const initialArticles = resource.articles.read();
  const [articles, setArticles] = useState(initialArticles);

  useEffect(() => {
    setArticles(initialArticles)
  }, [resource])

  return (
    <ArticleList 
      articles={articles} 
    />
  )
}
