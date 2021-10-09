import React, { useState, useEffect } from "react";
import API from "../../API";


function test(){
  return (
    <div >
      <header >User Information</header>
      <main>
     
        <h2>Search</h2>
        {/* <input id="userSearch" type="text" onChange={handleChange}></input>
        <button id="btnSearch" onClick={searchClick}>Search</button>
        <button id="btnClear" onClick={clearCLick}>Clear</button> */}
      </main>
    </div>
  );
}
function ProfilePage() {
  console.log("test")
  const [profile, setProfile] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [files, setFiles] = useState([]);

  const [updated, setUpdated] = useState(1); //To help force rerenders

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
          alert("FileUploaded");
          setUpdated(!updated);
        },
        () => {
          alert("FileUploadedError");
          setUpdated(!updated);
        },
        () => {}
      );
    }
  }

  function HandleProfile(e) {
    setProfile(e);
    setFiles(e.files);
  }

  function DeleteDocForUser(docId) {
    API.APIGET(
      "Document/DeleteDocForUser/" + docId,
      () => {
        //setUpdated(!updated);
      },
      () => {},
      () => {
        //setUpdated(!updated);
      }
    );
    setUpdated(!updated);
  }

  function GetMedicalDoc() {
    return files.filter((x) => {
      return x.fileTypeId === 1;
    })[0];
  }

  useEffect(() => {
    var id = parseInt(localStorage.getItem("id"));
    var onSuccess = (e) => {
      HandleProfile(e.data);

      setHasLoaded(true);
    };
    API.APIGET(
      `Users/GetProfileInformation/` + id,
      onSuccess,
      () => {},
      () => {}
    );
    return () => {};
  }, [updated]);

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
          {files.map((x) => {
            return x.fileName;
          })}
          {!files.some((x) => x.fileTypeId === 1) ? (
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
                  debugger;
                  var medicalFile = GetMedicalDoc();
                  window.open(medicalFile.fileUrl, "_blank");
                }}
              >
                View Medical Document
              </button>
              <button
                onClick={() => {
                  debugger;
                  var medicalFile = GetMedicalDoc();
                  DeleteDocForUser(medicalFile.fileId);
                }}
              >
                Delete Document
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

// export default ProfilePage;
export default test();
