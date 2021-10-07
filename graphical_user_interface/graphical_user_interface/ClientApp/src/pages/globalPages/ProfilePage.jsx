import React, { useState, useEffect } from "react";
import API from "../../API";

function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasMedicalCertificate, setHasMedicalCertificate] = useState(false);
  const [hasPassportDocument, setHasPassportDocument] = useState(false);
  const [hasBirthCertificate, setHasBirthCertificate] = useState(false);

  const [medicalCertificate, setMedicalCertificate] = useState();

  function UploadMedicalCertificateFileHandeler(e) {
    setMedicalCertificate(e.target.files[0]);
  }
  function UploadMedicalCertificate() {
    if (medicalCertificate) {
      var formData = new FormData();
      formData.append("file", medicalCertificate);
      formData.append("filename", medicalCertificate.name);
      formData.append("UserId", localStorage.getItem("id"));
      formData.append("DocumentType", 1);
      API.APIPostAnon(
        "Document/UploadDocForUser",
        formData,
        () => {
          setHasMedicalCertificate(true);
        },
        () => {},
        () => {}
      );
    }
  }

  function HandleFiles(_profile) {
    var check = _profile.files.some((x) => x.fileTypeId === 1);
    if (check) {
      setHasMedicalCertificate(true);
    }
  }

  useEffect(() => {
    var id = parseInt(localStorage.getItem("id"));
    var onSuccess = (e) => {
      debugger;
      setProfile(e.data);
      HandleFiles(e.data);
      setHasLoaded(true);
    };
    API.APIGET(
      `Users/GetProfileInformation/` + id,
      onSuccess,
      () => {},
      () => {}
    );
    return () => {};
  }, [hasMedicalCertificate]);
  return (
    <>
      <div>Hi there.</div>
      {hasLoaded ? (
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
          {profile.files.map((x) => {
            return x.File_Name;
          })}
          {!hasMedicalCertificate ? (
            <>
              <div>
                <input
                  onChange={UploadMedicalCertificateFileHandeler}
                  type="file"
                ></input>
                <button onClick={UploadMedicalCertificate}>
                  Submit document
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  window.open("https://www.w3schools.com", "_blank");
                }}
              >
                View Document
              </button>
            </>
          )}
        </>
      ) : (
        <>Hello worlds</>
      )}
    </>
  );
}

export default ProfilePage;
