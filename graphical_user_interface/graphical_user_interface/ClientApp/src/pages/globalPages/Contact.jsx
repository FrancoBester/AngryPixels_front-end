import React from "react";
import "./Contact.css";
import Footer from '../../components/Footer';

function Contact() {
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
            <label for="locationIcon">Vanderbijylpark, South Africa</label>
            <i className="fas fa-map-marker-alt fa-lg" id="locationIcon"></i>
          </li>
        <li>       
        <label for="phoneIcon">011 435 8893</label>
        <i className="fas fa-phone-alt fa-lg" id="phoneIcon"></i>
        </li>
        <li>
            <label for="mobileIcon">083 651 6246</label>
            <i class="fa fa-mobile" id="mobileIcon"></i>
          </li>
        <li> 
        <label for="emailIcon">meditrust@gmail.com</label>
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
            <label for="fbIcon" >Facebook</label>
          </li>
          <li>
            <i className="fab fa-linkedin" id="linkedinIcon"></i>
            <label for="linkedinIcon">LinkedIn</label>
          </li>
          <li>
            <i className="fab fa-twitter-square" id="twitterIcon"></i>
            <label for="twitterIcon">Twitter</label>
          </li>          
          <li>
            <i className="fab fa-instagram-square" id="instaIcon"></i>
            <label for="instaIcon">Instagram</label>
          </li>
        </ul>
      </aside>
      
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
