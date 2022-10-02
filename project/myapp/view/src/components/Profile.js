import {useParams} from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const username = params.username;

  return (
    <>
      <h1>Profile</h1>
      <p>{username}</p>
    </>  
  )
}