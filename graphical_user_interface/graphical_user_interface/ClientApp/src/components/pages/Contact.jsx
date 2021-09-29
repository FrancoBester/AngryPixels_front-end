import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <div class="grid">
      <header className="contactUsHeader">Contact Us</header>
      <main className="leftSideAbout">        
        <input className="contactInput" type="text" placeholder="Your Name..."/>
        <input type="email" placeholder="Email..."/>
        <input type="text" placeholder="Message..."/>
        <button className="btnSend">Send</button>        
      </main>

      <aside className="rightSideAbout">
        <i className="fas fa-map-marker-alt fa-lg" ></i><h4>Vanderbijylpark, South Africa</h4>
        <br />
        <i className="fas fa-phone-alt fa-lg"></i><h4>011 435 8893</h4>
        <br />
        <i className="fas fa-envelope fa-lg"></i><h4>meditrust@gmail.com</h4>
        <br />

        <h4>Follow us on Social Media:</h4>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-square fa-3x center" id="faIcon"></i></a>
            <a href=""><i className="fab fa-linkedin fa-3x center" id="faIcon"></i></a>
            <a href=""><i className="fab fa-twitter-square fa-3x center" id="faIcon" ></i></a>
            <a href=""><i className="fab fa-instagram-square fa-3x center" id="faIcon"></i></a>
      </aside>
    </div>
  );
}

export default Contact;
