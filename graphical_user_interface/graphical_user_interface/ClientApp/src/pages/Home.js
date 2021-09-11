import React, { Component } from "react";
import API from "../API";
import auth from "../auth";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome to medi trust</h1>
        {auth.userIsOfType("User") && (
          <>
            <h4>You are a user</h4>
          </>
        )}
        <button
          onClick={() =>
            API.APIGET(
              "https://localhost:44376/api/ConnectionTest/Authed",
              function () {},
              function () {},
              function () {}
            )
          }
        >
          Test Button
        </button>
      </div>
    );
  }
}
