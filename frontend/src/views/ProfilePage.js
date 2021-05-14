import React, {useState} from "react";
import jwt_decode from 'jwt-decode';


const Profile = (props) => { 
  const [token, setToken] = useState(localStorage.getItem('token'));
  // Extract User_ID from token
  // Check if token exists
  const [hasToken, setHasToken] = useState(localStorage.getItem('token') ? true : false); 
  // setToken(window.localStorage.getItem("token"))
  // let user_id = token.user.username
  console.log("Is there a token?", hasToken)
  console.log(token)
  let decoded = jwt_decode(token)
  console.log(decoded)
  return(
  <div>
    <h1> Profile Page </h1>
    <h2> Welcome {decoded.username} </h2>
  </div>
  );
}

export default Profile;