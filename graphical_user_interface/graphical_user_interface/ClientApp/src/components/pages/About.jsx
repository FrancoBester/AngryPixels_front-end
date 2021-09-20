import React from 'react';
import './About.css';
import styled from "styled-components";


function About() {
  return (
    <>
    <body>
    <div class="container-about">
      <img src='/images/brandon-holmes-GofYo51GQ_4-unsplash.jpg'/>
                <div className="centerHeading">
                    <h1>About Us</h1>
                      <div className="centerPara">
                        <p>
                          MediTrust is an independent medical scheme advisory, specialising in various medical
                          scheme options from some of the largest medical in South Africa. MediTrust and its
                          consultants are accredited by the Council for Medical Schemes and registered as an
                          Authorised Financial Services Provider. We are committed to ensure the best quality advice,
                          best suited to our clients’ individual needs and preferences. MediTrust was founded in
                          2011 by René Coetzee and has become a recognised and well respected name in the
                          healthcare industry. At MediTrust we believe trust is the most important aspect in
                          building a relationship with clients to ensure they enjoy the best service and advice available.
                        </p>
                      </div>
                  </div>
    </div>
    </body>

    </>
  );
}

export default About;
