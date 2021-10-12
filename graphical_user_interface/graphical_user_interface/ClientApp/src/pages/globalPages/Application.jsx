import React from "react";
import "./Application.css";

import { useState } from "react";
import { useHistory } from "react-router";

function Application() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DateOfBirth, setDOB] = useState("");
  const [Age, setAge] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Language, setLanguage] = useState("");
  const [Cellphone, setCellphone] = useState("");
  const [CurrentMA, setCurrentMA] = useState("");
  const [MedAidDetails, setMedAidDetails] = useState("");
  const [NumMembers, setNumMembers] = useState("");
  const [MedConditions, setMedConditions] = useState("");
  const [ChronicMeds, setChronicMeds] = useState("");
  const [SpecialNeeds, setSpecialNeeds] = useState("");
  const history = useHistory();

  function Apply() {}

  function SubmitApplication() {
    //Doen submit code here
  }

  return (
    <div className="form-wrapper">
      <div className="form-container-app">
        <div className="title_container_app">
          <h1>New Application</h1>
          <form onSubmit={SubmitApplication}>
            <div className="rowApp">
              <div className="col-25-app">
                <label>First Name:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. John"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Last Name:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. Snow"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label for="fname">Date of Birth:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="date"
                  placeholder=""
                  required
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Age:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. 24"
                  required
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Pysical Address:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. 123 Empire Road, Johannesburg 2076"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Language:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. English, Afrikaans, Sotho, etc."
                  required
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Email:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="email"
                  placeholder="e.g. johnsnow@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Cellphone:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="tel"
                  placeholder="e.g. 083 123 4567"
                  required
                  onChange={(e) => setCellphone(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Do you currently have medical aid?:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="radio"
                  name="radAnswer"
                  required
                  onChange={(e) => setCurrentMA(e.target.value)}
                />
                <label>Yes</label>
                <input
                  type="radio"
                  name="radAnswer"
                  required
                  onChange={(e) => setCurrentMA(e.target.value)}
                />
                <label>No</label>
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Medical Aid:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. Discovery Comprehensive Plan"
                  required
                  onChange={(e) => setMedAidDetails(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Number of Members:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. 4"
                  required
                  onChange={(e) => setNumMembers(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Pre-existing Medical Conditions:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. Asthma, Heart Disease, Diabetes, etc."
                  required
                  onChange={(e) => setMedConditions(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Chronic Medication:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. Depramil, Vectoryl, Insulin, etc."
                  required
                  onChange={(e) => setChronicMeds(e.target.value)}
                />
              </div>
            </div>

            <div className="rowApp">
              <div className="col-25-app">
                <label>Special Needs:</label>
              </div>
              <div className="col-75-app">
                <input
                  type="text"
                  placeholder="e.g. Dentistry, Chiropracter, etc."
                  required
                  onChange={(e) => setSpecialNeeds(e.target.value)}
                />
              </div>
            </div>

            <input className="buttonSub" type="submit" value="Apply" />
            <button
              className="btnCancel"
              onClick={() => {
                history.push("/");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Application;
