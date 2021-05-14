import React, {useState} from "react";


const Profile = (props) => { 
  const [token, setToken] = useState();
  // Extract User_ID from token
  // setToken(window.localStorage.getItem("token"))
  // let user_id = token.user.username
  return(
  <div>
    <h1> Profile Page </h1>

    {/* <h1> Welcome {user_id} </h1> */}
  </div>
  );
}

export default Profile;