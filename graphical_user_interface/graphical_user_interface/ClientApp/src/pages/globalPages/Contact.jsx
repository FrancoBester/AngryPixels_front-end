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
            <label className="lblLocation" for="locationIcon"><a href="https://www.google.com/maps?client=firefox-b-d&q=meditrust+south+africa&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiR2faq6530AhWDmFwKHSAACa0Q_AUoAXoECAEQAw" target="_blank" rel="noopener noreferrer">Vanderbijlpark, South Africa</a></label>
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
        <label className="emailLbl" for="emailIcon" onClick={() => {history.push("/Email")}}>meditrust2021@outlook.com</label>
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
            <label for="fbIcon" ><a href="https://web.facebook.com/meditrust.biz?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">Facebook</a></label>
          </li>
          
          {/* <li>
            <i className="fab fa-linkedin" id="linkedinIcon"></i>
            <label for="linkedinIcon"><a href="https://www.linkedin.com/">LinkedIn</a></label>
          </li> */}
          <li>
            <i className="fab fa-twitter-square" id="twitterIcon"></i>
            <label for="twitterIcon"><a href="https://twitter.com/meditrust_biz?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a></label>
          </li>          
           <li>
            <i className="fab fa-instagram" id="instaIcon"></i>
            <label for="instaIcon"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></label>
          </li>
        </ul>
      </aside>
      
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
