import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading"></p>
        <p className="footer-subscription-text"></p>
        <div className="input-areas">
          <form></form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items"></div>
          <div className="footer-link-items"></div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items"></div>
          <div className="footer-link-items"></div>
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
            <span>
              <a
                href="https://web.facebook.com/meditrust.biz?_rdc=1&_rdr"
                className="fab fa-facebook-f"
                target="_blank"
              ></a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/"
                className="fab fa-instagram"
                target="_blank"
              ></a>
            </span>
            <span>
              <a
                href="https://twitter.com/meditrust_biz?lang=en"
                className="fab fa-twitter"
                target="_blank"
              ></a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
