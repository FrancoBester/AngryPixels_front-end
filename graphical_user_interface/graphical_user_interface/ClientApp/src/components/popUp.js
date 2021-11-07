class POPUP {
  constructor(params) {
    let onShowPopUp = new CustomEvent("ShowPopUp", {
      popUpContent: "Hi",
    });

    this.showPopup = onShowPopUp;
  }

  ShowPopUp(message) {
    this.showPopup.popUpContent = message;
    dispatchEvent(this.showPopup);
  }
}

export default new POPUP();
