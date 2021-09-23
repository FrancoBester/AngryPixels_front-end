import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <p>I hate this page.. working on it</p>
      <div className="rowContact">
        <div className="column">
        <input className="contactInput" type="text" placeholder="Your Name..."/>
        <input type="email" placeholder="Email..."/>
        <input type="text" placeholder="Message..."/>
        <button className="btnSend">Send</button>
        </div>

        <div className="column">
        <i class="fas fa-map-marker-alt fa-lg" ></i><h4>Vanderbijylpark, South Africa</h4>
        <br />
        <i class="fas fa-phone-alt fa-lg"></i><h4>011 435 8893</h4>
        <br />
        <i class="fas fa-envelope fa-lg"></i><h4>meditrust@gmail.com</h4>
        <br />

        <h4>Follow us on Social Media:</h4>
        <div className="faCenter">
          <div className="socialMediaBox">
            <a href="https://www.facebook.com/"><i class="fab fa-facebook-square fa-3x center" id="faIcon"></i></a>
            <a href=""><i class="fab fa-linkedin fa-3x center" id="faIcon"></i></a>
            <a href=""><i class="fab fa-twitter-square fa-3x center" id="faIcon" ></i></a>
            <a href=""><i class="fab fa-instagram-square fa-3x center" id="faIcon"></i></a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
