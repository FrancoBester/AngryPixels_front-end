import React, { useState, useEffect } from "react";
import API from "../../API";
import './ProfilePage.css';

function ProfilePage() {
  console.log("test");
  const [profile, setProfile] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [files, setFiles] = useState([]);

  const [updated, setUpdated] = useState(1); //To help force rerenders

  const [medicalCertificate, setMedicalCertificate] = useState();
  const [PassportDocument, setPassportDocument] = useState();
  const [BirthCertificate, setBirthCertificate] = useState();

  function UploadMedicalCertificateFileHandeler(e) {
    setMedicalCertificate(e.target.files[0]);
  }
  function UploadPassportDocumentFileHandeler(e) {
    setPassportDocument(e.target.files[0]);
  }
  function UploadBirthCertificateFileHandeler(e) {
    setBirthCertificate(e.target.files[0]);
  }

  function UploadFile(file, type) {
    if (file) {
      var formData = new FormData();
      formData.append("file", file);
      formData.append("filename", file.name);
      formData.append("UserId", localStorage.getItem("id"));
      formData.append("DocumentType", type);
      API.APIPostAnon(
        "Document/UploadDocForUser",
        formData,
        () => {
          alert("FileUploaded");
        },
        () => {
          alert("FileUploadedError");
        },
        () => {
          setUpdated(!updated);
        }
      );
    }
  }

  function UploadMedicalCertificate() {}

  function HandleProfile(e) {
    setProfile(e);
    setFiles(e.files);
  }

  function DeleteDocForUser(docId) {
    API.APIGET(
      "Document/DeleteDocForUser/" + docId,
      () => {},
      () => {},
      () => {
        setUpdated(!updated);
      }
    );
  }

  function GetMedicalDoc() {
    return files.filter((x) => {
      return x.fileTypeId === 1;
    })[0];
  }

  function HasMedicalDoc() {
    return files.some((x) => x.fileTypeId === 1);
  }

  function GetPassportDoc() {
    return files.filter((x) => {
      return x.fileTypeId === 2;
    })[0];
  }

  function HasPassportDoc() {
    return files.some((x) => x.fileTypeId === 2);
  }

  function GetBirthCertificateDoc() {
    return files.filter((x) => {
      return x.fileTypeId === 3;
    })[0];
  }

  function HasBirthCertificateDoc() {
    return files.some((x) => x.fileTypeId === 3);
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
      () => {
        alert("Onfinally");
      }
    );
    return () => {};
  }, [updated]);

   {/** ADDED SOME BASIC STYLING, I WILL ADD MORE SPICE LATER */}
  return (
   
    <>
    <div className="grid-wrapper">
      <div className="myProfileHeader">
        <h1>Welcome</h1>
      </div>
      
      {hasLoaded ? (
        <>
        <div className="clientInfoGrid">
          <div>
            <b>Name: </b>
            {profile.user.user_Name}
          </div>
          <div>
            <b>Surname: </b>
            {profile.user.user_Surname}
          </div>
          <div>
            <b>Email: </b>
            {profile.user.user_Email}
          </div>
        </div>
        <div className="medicalDocGrid">
          {/* Medical Document */}
          <h3>Medical Certificate:</h3>
          {!HasMedicalDoc() ? (
            <>
              <div>

                <input
                  onChange={UploadMedicalCertificateFileHandeler}
                  type="file"
                ></input>
                <br />
                <button
                  onClick={() => {
                    UploadFile(medicalCertificate, 1);
                  }}
                >
                  Submit document
                </button>
                <br />
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  var medicalFile = GetMedicalDoc();
                  window.open(medicalFile.fileUrl, "_blank");
                }}
              >
                View Medical Document
              </button>
              <br />
              <button
                onClick={() => {
                  var medicalFile = GetMedicalDoc();
                  DeleteDocForUser(medicalFile.fileId);
                }}
              >
                Delete Document
              </button>
            </>
          )}
          {/* Passport document */}
          <h3>Copy of Passport:</h3>
          {!HasPassportDoc() ? (
            <>
              <div>
                <input
                  onChange={UploadPassportDocumentFileHandeler}
                  type="file"
                ></input>
                <br />
                <button
                  onClick={() => {
                    UploadFile(PassportDocument, 2);
                  }}
                >
                  Submit document
                </button>
                <br />
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  var passport = GetPassportDoc();
                  window.open(passport.fileUrl, "_blank");
                }}
              >
                View Passport Document
              </button>
              <button
                onClick={() => {
                  var passport = GetPassportDoc();
                  DeleteDocForUser(passport.fileId);
                }}
              >
                Delete Document
              </button>
            </>
          )}

          {/* Birth Certificate */}
          <h3>Birth Certificate:</h3>
          {!HasBirthCertificateDoc() ? (
            <>
              <div>
                <input
                  onChange={UploadBirthCertificateFileHandeler}
                  type="file"
                ></input>
                <br />
                <button
                  onClick={() => {
                    UploadFile(BirthCertificate, 3);
                  }}
                >
                  Submit document
                </button>
                <br />
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  var birthCertificate = GetBirthCertificateDoc();
                  window.open(birthCertificate.fileUrl, "_blank");
                }}
              >
                View Passport Document
              </button>
              <button
                onClick={() => {
                  var birthCertificate = GetBirthCertificateDoc();
                  DeleteDocForUser(birthCertificate.fileId);
                }}
              >
                Delete Document
              </button>
            </>
          )}
          </div>
        </>
      ) : (
        <>Loading</>
      )}
      </div>
    </>
  );
}

export default ProfilePage;
