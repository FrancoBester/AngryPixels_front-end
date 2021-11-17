import React from "react";
import { useState } from "react";
import API from "../API";

function FileUpload() {
  const [file, setFile] = useState();

  const fileChangedEventHandeler = (event) => {
    setFile(event.target.files[0]);
  };

  function uploadDocument() {
    if (file) {
      var formData = new FormData();
      formData.append("file", file);
      formData.append("filename", file.name);
      API.APIPostAnon(
        "Document/UploadDoc",
        formData,
        () => {},
        () => {},
        () => {}
      );
    } else {
      //alert("No file selected");
    }
  }

  return (
    <div>
      <input onChange={fileChangedEventHandeler} type="file"></input>
      <button onClick={uploadDocument}>Submit document</button>
    </div>
  );
}

export default FileUpload;
