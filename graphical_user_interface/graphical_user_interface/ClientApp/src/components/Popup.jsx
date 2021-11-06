import React, { useState, useEffect } from "react";

function Popup(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setTrigger(false);
    }, 5000);
    return () => {};
  }, []);

  return props.trigger ? (
    <div
      onClick={() => {
        props.setTrigger(false);
      }}
      className="popup"
    >
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
