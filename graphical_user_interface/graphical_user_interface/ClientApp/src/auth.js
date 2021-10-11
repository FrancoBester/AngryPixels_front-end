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
    API.APIPostAnon(
      "Authentication",
      { Email: details.Email, PasswordHash: details.password },
      (response) => {
        debugger;
        this.authenticated = true;
        this.onAuthenticationChanged.detail.value = this.isAuthenticated();
        dispatchEvent(this.onAuthenticationChanged);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("roles", response.data.roles);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("email", response.data.email);
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
      {
        FirstName: details.FirstName,
        LastName: details.LastName,
        Email: details.Email,
        DateOfBirth: details.DateOfBirth,
        CellPhoneNumber: details.PhoneNumber,
        Gender: details.Gender,
        Password: details.Password,
        Address: {
          City: details.Address.City,
          Street: details.Address.Street,
          House: details.Address.HouseNumber,
        },
      },
      () => {},
      () => {},
      () => {}
    );
  }

}

export default new Auth();

