import React from "react";
import "./About.css";
import styled from "styled-components";

function About() {
  // console.log("Äbout")
  return (
    <div className="gridAbout">
      <header className="AboutUsHeader">About Us</header>
      <main className="mainAbout">
        MediTrust is an independent medical scheme advisory, specialising in
        various medical scheme options from some of the largest medical in South
        Africa. MediTrust and its consultants are accredited by the Council for
        Medical Schemes and registered as an Authorised Financial Services
        Provider. We are committed to ensure the best quality advice, best
        suited to our clients’ individual needs and preferences. 
      </main>

      <aside>
        <img
          src="images/national-cancer-institute-uVnRa6mOLOM-unsplash.jpg"
          alt=""
        />
      </aside>
      
    </div>
  );
}

export default About;
