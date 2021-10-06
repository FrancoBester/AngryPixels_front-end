import React, { useState, useEffect } from "react";
import API from "../../API";

function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    var id = parseInt(localStorage.getItem("id"));
    var onSuccess = (e) => {
      debugger;
      setProfile(e.data);
      setHasLoaded(true);
    };
    API.APIGET(
      `Users/GetProfileInformation/` + id,
      onSuccess,
      () => {},
      () => {}
    );
    return () => {};
  }, []);
  return (
    <>
      {localStorage.getItem("email")}
      <div>Hi there.</div>
      {hasLoaded && (
        <>
          <div>
            <b>Name:</b>
            {profile.user.user_Name}
          </div>
          <div>
            <b>Surname:</b>
            {profile.user.user_Surname}
          </div>
          <div>
            <b>Email:</b>
            {profile.user.user_Email}
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
