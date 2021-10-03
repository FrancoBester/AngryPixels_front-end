import API from "./API";

class Auth {
  constructor() {
    this.authenticated = false;
    let onAuthenticationChangedEvent = new CustomEvent(
      "onAuthenticationChangedEvent",
      {
        detail: {
          value: false,
        },
      }
    );
    this.onAuthenticationChanged = onAuthenticationChangedEvent;
  }

  login(details, callback) {
    //TODO: HASH THE PASSWORD HERE
    const passwordHash = "";
    API.APIPostAnon(
      "Authentication",
      { Username: details.username, PasswordHash: details.password },
      (response) => {
        debugger;
        this.authenticated = true;
        this.onAuthenticationChanged.detail.value = this.isAuthenticated();
        dispatchEvent(this.onAuthenticationChanged);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("roles", response.data.roles);
        callback();
      },
      (error) => {
        alert(error);
      },
      () => {}
    );
  }

  logout(cb) {
    localStorage.clear();
    this.authenticated = false;
    this.onAuthenticationChanged.detail.value = this.isAuthenticated();
    dispatchEvent(this.onAuthenticationChanged);
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  userIsOfType(type) {
    const roles = localStorage.getItem("roles").split(",");
    if (roles.includes(type)) {
      return true;
    }
    return false;
  }

  signup(details, onSuccess, onFail) {
    API.APIPostAnon(
      "Users/Register",
      { details },
      (response) => {
        onSuccess(response);
      },
      (error) => {
        alert(error);
        onFail();
      },
      () => {}
    );
  }
}

export default new Auth();
