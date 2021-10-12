import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";

function ViewSingleSchemaRequest(props) {
  const history = useHistory();
  const search = useLocation().search;

  const [schemaRequest, setschemaRequest] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [schemaRequestId, setschemaRequestId] = useState(0);

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    debugger;

    setschemaRequestId(id);

    var onSuccess = (e) => {
      debugger;
      setschemaRequest(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "SchemaRequests/ViewUserSchemarequest/" + id,
      onSuccess,
      () => {
        alert("Error");
      },
      () => {}
    );

    return () => {};
  }, []);

  return <div></div>;
}

export default ViewSingleSchemaRequest;
