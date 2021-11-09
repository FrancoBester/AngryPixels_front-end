import React from "react";
import "./Contact.css";
import Footer from '../../components/Footer';
import { useHistory } from "react-router";

function Contact() {
  const history = useHistory();
  return (
    <>
    <div className="gridContact">
      <header className="contactUsHeader">Contact Us</header>
      <main className="leftSideAbout">
        <ul>
          <li>
          <h4 className="leftConatctH4">Please dont hesitate to contact us for more information:</h4>
          </li>
          <li>            
            <label for="locationIcon">Vanderbijlpark, South Africa</label>
            <i className="fas fa-map-marker-alt fa-lg" id="locationIcon"></i>
          </li>
        <li>       
        <label for="phoneIcon">016 932 4535</label>
        <i className="fas fa-phone-alt fa-lg" id="phoneIcon"></i>
        </li>
        {/* <li>
            <label for="mobileIcon">083 651 6246</label>
            <i class="fa fa-mobile" id="mobileIcon"></i>
          </li> */}
        <li> 
        <label for="emailIcon" onClick={() => {history.push("/Email")}}>meditrust2021@outlook.com</label>
        <i className="fas fa-envelope fa-lg" id="emailIcon"></i>
        </li>
        </ul>
      </main>

      <aside className="rightSideAbout">        
        <ul>
          <li>
          <h4>Follow us on Social Media:</h4>
          </li>
          <li>
            <i className="fab fa-facebook-square" id="fbIcon"></i>
            <label for="fbIcon" ><a href="https://web.facebook.com/meditrust.biz?_rdc=1&_rdr">Facebook</a></label>
          </li>
          
          {/* <li>
            <i className="fab fa-linkedin" id="linkedinIcon"></i>
            <label for="linkedinIcon"><a href="https://www.linkedin.com/">LinkedIn</a></label>
          </li> */}
          <li>
            <i className="fab fa-twitter-square" id="twitterIcon"></i>
            <label for="twitterIcon"><a href="https://twitter.com/meditrust_biz?lang=en">Twitter</a></label>
          </li>          
          {/* <li>
            <i className="fab fa-instagram-square" id="instaIcon"></i>
            <label for="instaIcon"><a href="https://www.instagram.com/">Instagram</a></label>
          </li> */}
        </ul>
      </aside>
      
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
