import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Signup.css"
import API from "../../API";
import Footer from "../../components/Footer";

function Email(){
    const history = useHistory();
    const [Title, SetTitle] = useState("")
    const [Details, SetDetails] = useState("")
    function SendMail(){
        alert("Sending email");
        const EmailDetails ={
            ToEmail:"meditrustcomplaints@outlook.com",
            Subject: Title,
            Body: Details,
        };
        console.log(EmailDetails);
        API.APIPOST(
            "Send",
            EmailDetails,
            () => {},
            () => {},
            () => {}
        );
        history.push("/Contact");
    }

    return(
        <div>
            <div className="form-container-signup">
                <div className="title_container">
                <h1>Email Us</h1>
                <form
                    onSubmit={() => {
                    SendMail();
                    }}
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
                        onChange={(e) => SetTitle(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-25">
                        <label>Details</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="text"
                        placeholder="Details"
                        required
                        onChange={(e) => SetDetails(e.target.value)}
                        />
                    </div>
                    </div>

                    <input className="btnSub" type="submit" value="Send mail" />
                    <button
                    className="btnCancel"
                    onClick={() => {
                        history.goBack();
                    }}
                    >
                    Cancel
                    </button>
                </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Email;