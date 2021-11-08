import React from "react";
import "./Signup.css"

function Email(){
    return(
        <div>
            <div className="form-container-signup">
                <div className="title_container">
                <h1>Contact Us</h1>
                <form
                    // onSubmit={() => {
                    // Register();
                    // }}
                >
                    <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Title:</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="text"
                        placeholder="Title"
                        required
                        // onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-25">
                        <label>Last Name:</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="text"
                        placeholder="Surname"
                        required
                        // onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-25">
                        <label>Email:</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="email"
                        placeholder="Email"
                        required
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    </div>

                    <input className="btnSub" type="submit" value="Register" />
                    <button
                    className="btnCancel"
                    // onClick={() => {
                    //     history.push("/");
                    // }}
                    >
                    Cancel
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Email;