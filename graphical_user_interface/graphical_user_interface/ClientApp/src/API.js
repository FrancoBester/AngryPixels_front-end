import React from "react";
import POPUP from "./components/popUp";

const axios = require("axios");

class API {
  constructor(params) {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      axios.defaults.baseURL = "https://localhost:44376/api/";
    } else {
      axios.defaults.baseURL =
        "https://meditrustbackend.azurewebsites.net/api/";
    }
  }

  HandleError(error) {
    var exception = "";
    if (error.response) {
      if (error.response.status == 401) {
        exception = error.response.data.message;
      } else if (error.response.status == 405) {
        exception = error.response.data.message;
      } else if (error.response.status == 498) {
        exception = error.response.data.message;
      } else if (error.response.status == 500) {
        exception = error.response.data.message;
      }
    } else {
      exception = error.message;
    }
    POPUP.ShowPopUp(exception);
  }

  APIGetAnon(url, onSuccess, onFail, onFinally) {
    var e = this.HandleError;
    axios
      .get(url)
      .then(function (response) {
        onSuccess(response);
      })
      .catch(function (error) {
        e(error);
      })
      .then(function () {
        onFinally();
      });
  }

  APIPostAnon(url, object, onSuccess, onFail, onFinally) {
    var e = this.HandleError;
    axios
      .post(url, object)
      .then(function (response) {
        onSuccess(response);
      })
      .catch(function (error) {
        e(error);
      })
      .then(function () {
        onFinally();
      });
  }

  APIGET(url, onSuccess, onFail, onFinally) {
    var e = this.HandleError;
    axios
      .get(url, {
        headers: {
          //Authorization: localStorage.getItem("token"),
          Authorization: window.sessionStorage.getItem("token"),
        },
      })
      .then(function (response) {
        onSuccess(response);
      })
      .catch(function (error) {
        e(error);
      })
      .then(function () {
        onFinally();
      });
  }

  APIPOST(url, object, onSuccess, onFail, onFinally) {
    var e = this.HandleError;
    axios
      .post(url, object, {
        headers: {
          //Authorization: localStorage.getItem("token"),
          Authorization: window.sessionStorage.getItem("token"),
        },
      })
      .then(function (response) {
        onSuccess(response);
      })
      .catch(function (error) {
        e(error);
      })
      .then(function () {
        onFinally();
      });
  }
}

export default new API();
