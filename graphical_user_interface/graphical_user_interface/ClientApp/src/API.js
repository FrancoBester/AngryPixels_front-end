const axios = require("axios");

class API {
  constructor(params) {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  }

  APIGetAnon(url, onSuccess, onFail, onFinally) {
    axios
      .get(url)
      .then(function (response) {
        onSuccess(response);
      })
      .catch(function (error) {
        onFail(error);
      })
      .then(function () {
        onFinally();
      });
  }

  APIPostAnon(url, object, onSuccess, onFail, onFinally) {
    axios
      .post(url, object)
      .then(function (response) {
        onSuccess(response);
      })
      .catch(function (error) {
        onFail(error);
      })
      .then(function () {
        onFinally();
      });
  }
}
export default new API();
