import React from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { FetchData } from "./pages/FetchData";
import { Counter } from "./pages/Counter";
import { Switch } from "react-router";
import { ProtectedRoute } from "./protectedRoute";
import LandingPage from "./pages/unAuthenticated/LandingPage";
import LoginPage from "./pages/unAuthenticated/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";

import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import "./custom.css";

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/Signup" component={Signup} />
          <Route path="/About" exact component={About}/>
          <Route path="/Contact" exact component={Contact}/>
          <ProtectedRoute path="/counter" component={Counter} />
          <Route path="/fetch-data" component={FetchData} />
        </Switch>
      </Router>
    </Layout>
  );
}