import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/Signup';

import reactDOM from "react-dom";


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About}/>
          <Route path='/Contact' exact component={Contact}/>
          <Route path='/Signup' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
