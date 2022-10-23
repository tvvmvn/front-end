import { Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { Loading, ErrorMessage, SuccessMessage } from "./Progress";
import wrapPromise from "./wrapPromise";

function fetchData(username) {
  const promise = fetch(`http://localhost:3000/profiles/${username}/following`, {
    headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json()
  })

  return wrapPromise(promise);
}

export default function () {

  const params = useParams();
  const username = params.username;
  const resource = fetchData(username);

  return (
    <Suspense fallback={<p>fetching following...</p>}>
      <FollowingList resource={resource} />
    </Suspense>
  )
}

function FollowingList({resource}) {
  const follows = resource.read();

  console.log(follows);

  const followingList = follows.map(follow => (
    <div className="mb-2" key={follow._id}>
      <Avatar user={follow.following} />  
    </div>
  ))

  return (
    <div className="mt-3 px-3">
      <h1 className="text-2xl mb-3">Following</h1>
      {followingList}
    </div>
  )
}