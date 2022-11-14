import { useEffect, useState, Suspense, useContext, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
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

  function follow() {
    fetch(`http://localhost:3000/profiles/${profile.username}/follow`, {
      method: 'POST',
      headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
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
  }

  function unfollow() {
    fetch(`http://localhost:3000/profiles/${profile.username}/follow`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      const editedProfile = { ...profile, isFollowing: false }
      setProfile(editedProfile);
    })
    .catch(error => setError("failed to unfollow"))
    .finally(() => setIsLoaded(true));
  }

  const followButton = profile.isFollowing ? (
    <button
      className={`border border-black p-1 w-full`}
      onClick={unfollow}
    >
      Following
    </button>
  ) : (
    <button
      className={`border border-blue-500 p-1 w-full text-blue-500`}
      onClick={follow}
    >
      Follow
    </button>
  )

  return (
    <>
      <div className="flex mb-3 px-3">
        <img 
          src={`http://localhost:3000/users/${profile.image || "avatar.jpeg"}`} 
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="grow ml-3">
        <h3 className="text-lg mb-2">{profile.username}</h3>
          {
            isMaster ? (
              <Link
                to={`/accounts/edit`}
                className="block border border-black p-1 text-center"
              >
                Edit Profile
              </Link>
            ) : followButton
          }
        </div>
      </div>

      <div className="mb-3 px-3">
        <p className="">
          {profile.bio}
        </p>
        <button 
          className="text-xs text-red-500"
          onClick={auth.signOut}
        >
          Logout
        </button>
      </div>

      <div className="mb-3">
        <ul className="flex border-y py-2">
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
      </div>

      {error && <ErrorMessage error={error} />}
    </>
  )
}

function ProfileTimeline({ resource }) {
  const initialArticles = resource.articles.read();
  const [articles, setArticles] = useState(initialArticles);

  const articleList = articles.map(article => (
    <Link
      key={article._id}
      to={`/p/${article._id}`}
      className="h-40 bg-gray-100"
    >
      <img
        src={`http://localhost:3000/articles/${article.photos[0]}`}
        alt=""
        className="w-full h-full object-cover"
      />
    </Link>
  ))

  useEffect(() => {
    setArticles(initialArticles)
  }, [resource])

  return (
    <div className="grid grid-cols-3 gap-1">
      {articleList}
    </div>  
  )
}
