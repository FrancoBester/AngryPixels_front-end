import React from "react";
import API from "../../API";

function LoginPage() {
  return (
    <div>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button
          onClick={() => {
            API.APIPostAnon(
              "https://localhost:44376/api/Authentication",
              { Username: "Dave", PasswordHash: "123456789" },
              (response) => {
                alert(response.data);
              },
              (error) => {
                alert(error);
              },
              () => {}
            );
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
