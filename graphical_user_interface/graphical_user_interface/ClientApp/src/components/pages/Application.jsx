import React from 'react';
import './Application.css';

import { useState } from "react";
import { useHistory } from "react-router";

function Application(){

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

  function Apply(){
      Application({

      });
  }

    return(
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>New Application</h1>
        <form action="action_page.php">
          <div className="row">
            <div class="col-25">
              <label>First Name:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="e.g. John" required onChange={(e) => setFirstName(e.target.value)} />
            </div>
          </div>

        <div className="row">
          <div class="col-25">
            <label>Last Name:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="e.g. Snow" required  onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>

        <div className="row">
            <div class="col-25">
              <label for="fname">Date of Birth:</label>
            </div>
            <div className="col-75">
              <input type="date" placeholder="" required onChange={(e) => setDOB(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div class="col-25">
              <label >Age:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="e.g. The Wall" required onChange={(e) => setAge(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div class="col-25">
              <label >Pysical Address:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="Address" required onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div class="col-25">
              <label>Language:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="English, Afrikaans, Sotho, etc." required onChange={(e) => setLanguage(e.target.value)} />
            </div>
          </div>

        <div className="row">
          <div class="col-25">    
            <label>Email:</label>
          </div>
          <div className="col-75">
            <input type="email" placeholder="e.g. johnsnow@gmail.com" required  onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="row">
            <div class="col-25">
              <label>Cellphone:</label>
            </div>
            <div className="col-75">
              <input type="tel" placeholder="e.g. 083 123 4567" required onChange={(e) => setCellphone(e.target.value)} />
            </div>
          </div>
          
        <div className="row">
          <div class="col-25">   
            <label>Do you currently have medical aid?:</label>
          </div>
          <div className="col-75">
            <input type="radio" name="radAnswer" required onChange={(e) => setCurrentMA(e.target.value)} />
            <label>Yes</label>
            <input type="radio" name="radAnswer" required onChange={(e) => setCurrentMA(e.target.value)} />
            <label>No</label>
          </div>
        </div>
            
        <div className="row">
          <div class="col-25">          
            <label>Medical Aid Details:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="e.g. Discovery Comprehensive Plan" required onChange={(e) => setMedAidDetails(e.target.value)} />
          </div>
        </div>

        <div className="row">
            <div class="col-25">
              <label>Number of members on scheme:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="e.g. 4" required onChange={(e) => setNumMembers(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div class="col-25">
              <label>Pre-existing medical conditions:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="Asthma, Heart Disease, Diabetes, etc." required onChange={(e) => setMedConditions(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div class="col-25">
              <label >Chronic Medication:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="Depramil, Vectoryl, Insulin, etc." required onChange={(e) => setChronicMeds(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div class="col-25">
              <label >Special Needs:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="Dentistry, Chiropracter, etc." required onChange={(e) => setSpecialNeeds(e.target.value)} />
            </div>
          </div>

        <input className="buttonSub" type="submit" value="Apply" />
        <button className="btnCancel" onClick="window.location='./Client';return false;">Cancel</button>
        </form>
      </div>
      </div>
    </div>  

    );

}

export default Application;
