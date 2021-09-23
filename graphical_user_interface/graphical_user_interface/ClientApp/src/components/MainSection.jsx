import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/Black-1.mp4' autoPlay loop muted />
      <h1>MEDITRUST</h1>
      <p>Trusted Medical Scheme Advisors</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
