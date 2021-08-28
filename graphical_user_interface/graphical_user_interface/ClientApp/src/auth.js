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

  login(cb) {
    this.authenticated = true;
    this.onAuthenticationChanged.detail.value = this.isAuthenticated();
    dispatchEvent(this.onAuthenticationChanged);
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    this.onAuthenticationChanged.detail.value = this.isAuthenticated();
    dispatchEvent(this.onAuthenticationChanged);
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
