import React, {useState} from "react";
import jwt_decode from 'jwt-decode';


const Profile = (props) => { 
  // Check if token exists
  const [hasToken, setHasToken] = useState(localStorage.getItem('token') ? true : false); 
  // Extract token from local storage
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  // Decode token to extract values
  if (hasToken) {
    var decoded = jwt_decode(token)
    console.log(decoded)
  }

  return(
  <div>
    <h1> Profile Page </h1>
    {hasToken ?
    <h2> Welcome {decoded.username} </h2>
    :
    <h2> Please login </h2>
    }
  </div>
  );
}

export default Profile;