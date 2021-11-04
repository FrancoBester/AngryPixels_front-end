import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
         
        </p>
        <p className="footer-subscription-text">
          
        </p>
        <div className="input-areas">
          <form>
           
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            
          </div>
          <div className="footer-link-items">
            
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            
          </div>
          <div className="footer-link-items">
            
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              AngryPixels
              <i className="fas fa-tools" />
            </Link>
          </div>
          <small className="website-rights">AngryPixels © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              
              <a href="https://www.google.com/url?q=https://www.facebook.com/meditrust.biz&sa=D&source=docs&ust=1636044097172000&usg=AOvVaw0jF_1iALl12eX_VWaOQBu9"
              className="fab fa-facebook-f"
              ></a>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <a href="https://www.instagram.com/"
              className="fab fa-instagram"
              ></a>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <a href="https://www.youtube.com/"
              className="fab fa-youtube"
              ></a>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <a href="https://twitter.com/"
              className="fab fa-twitter"
              ></a>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <a href="https://www.linkedin.com/"
              className="fab fa-linkedin"
              ></a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
