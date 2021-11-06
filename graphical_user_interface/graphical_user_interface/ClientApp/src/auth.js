import React from "react";
import API from "./API";

class Auth {
  constructor() {
    //If session has a token email roles and password: User is authenticated
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("email") &&
      sessionStorage.getItem("id") &&
      sessionStorage.getItem("roles")
    ) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }

    let onAuthenticationChangedEvent = new CustomEvent(
      "onAuthenticationChangedEvent",
      {
        detail: {
          value: false,
        },
      }
    );
    this.onAuthenticationChanged = onAuthenticationChangedEvent;

    let onShowPopUp = new CustomEvent("ShowPopUp", {
      popUpContent: "Hi",
    });

    this.showPopup = onShowPopUp;
  }

  login(details, callback) {
    API.APIPostAnon(
      "Authentication",
      { Email: details.Email, PasswordHash: details.password },
      (response) => {
        this.authenticated = true;
        this.onAuthenticationChanged.detail.value = this.isAuthenticated();
        dispatchEvent(this.onAuthenticationChanged);

        window.sessionStorage.setItem("token", response.data.token);
        window.sessionStorage.setItem("roles", response.data.roles);
        window.sessionStorage.setItem("id", response.data.id);
        window.sessionStorage.setItem("email", response.data.email);
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("roles", response.data.roles);
        // localStorage.setItem("id", response.data.id);
        // localStorage.setItem("email", response.data.email);
        callback();
      },
      (error) => {
        this.showPopup.popUpContent = (
          <h1 style={{ textAlign: "center" }}>Error: {error.message}</h1>
        );
        dispatchEvent(this.showPopup);
      },
      () => {}
    );
  }

  logout(cb) {
    window.sessionStorage.clear();
    //localStorage.clear();
    this.authenticated = false;
    this.onAuthenticationChanged.detail.value = this.isAuthenticated();
    dispatchEvent(this.onAuthenticationChanged);
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  userIsOfType(type) {
    //const roles = localStorage.getItem("roles").split(",");
    const roles = window.sessionStorage.getItem("roles").split(",");
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
