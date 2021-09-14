import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

/* Nav Bar adjusts according to screen size*/
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

/*Stop signup button from being dumb*/
  useEffect(() => {
    showButton()
  },[]);

  /*------------------------------------------*/

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick ={closeMobileMenu}>
            MediTrust
            <i className="fas fa-heartbeat"/>
          </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='./About' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                  <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                  </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Register
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
