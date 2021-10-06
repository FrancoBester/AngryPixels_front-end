import React, { useState, useEffect } from "react";
import API from "../../API";

function ProfilePage() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    var id = localStorage.getItem("id");
    var onSuccess = (e) => {
      alert(e.data);
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
      <div>Hi there.</div>
    </>
  );
}

export default ProfilePage;
