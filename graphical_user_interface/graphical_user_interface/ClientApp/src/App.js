import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import { FetchData } from "./pages/FetchData";
import { Counter } from "./pages/Counter";
import { Switch } from "react-router";
import { ProtectedRoute } from "./protectedRoute";
import LandingPage from "./pages/unAuthenticated/LandingPage";
import LoginPage from "./pages/unAuthenticated/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";
import Email from "./pages/globalPages/Email";

import Signup from "./pages/globalPages/Signup";
import About from "./pages/globalPages/About";
import Contact from "./pages/globalPages/Contact";
import Client from "./pages/client/Client";
import Admin from "./pages/admin/Admin";
import Application from "./pages/globalPages/Application";
import clientFileUploadDocument from "./pages/client/clientFileUploadDocument";
import UserDetailsAdmin from "./pages/admin/UserDetailsAdmin";
import EditProfileClient from "./pages/client/editProfileClient";
import UserPolicy from "./components/pages/UserPolicy";
import ProfilePage from "./pages/globalPages/ProfilePage";
import ViewClientProfile from "./pages/client/ViewClientProfile";
import ViewAdminInformation from "./pages/admin/ViewAdminInformation";
import ViewQueries from "./pages/admin/ViewQueries";
import CreateNewQuery from "./pages/client/CreateNewQuery";

import ViewPolicies from "./pages/client/ViewPolicies";
import ViewSinglePolicy from "./pages/client/ViewSinglePolicy";
import ViewSchemaRequests from "./pages/admin/ViewSchemaRequests";
import ViewSingleSchemaRequest from "./pages/admin/ViewSingleSchemaRequest";
import CreateNewPolicy from "./pages/admin/CreateNewPolicy";
import QueryDetails from "./pages/admin/QueryDetails";
import ViewSingleQuery from "./pages/admin/ViewSingleQuery";
import ViewClientDetails from "./pages/admin/ViewClientDetails";
import ViewPolicyDetails from "./pages/admin/ViewPolicyDetails";
import ViewQuery from "./pages/client/ViewQuery";

import "./custom.css";

import Test from "./pages/Test";

import PopUp from "./components/Popup.jsx";
import "./components/popup.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popUpContent, setPopUpContent] = useState({});

  useEffect(() => {
    window.addEventListener("ShowPopUp", (e, p) => {
      debugger;
      setPopUpContent(e.popUpContent);
      setShowPopup(true);
    });
    return () => {};
  }, []);

  return (
    <Layout>
      <PopUp trigger={showPopup} setTrigger={setShowPopup}>
        {popUpContent}
      </PopUp>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/Signup" component={Signup} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Client" exact component={Client} />
        <Route path="/Admin" exact component={Admin} />
        <Route path="/Application" exact component={Application} />
        <Route path="/Email" excat component={Email}/>
        <ProtectedRoute path="/counter" component={Counter} />
        <ProtectedRoute path="/myProfile" component={ProfilePage} />
        <ProtectedRoute path="/viewPolicies" component={ViewPolicies} />
        <ProtectedRoute path="/viewSinglePolicy" component={ViewSinglePolicy} />
        <ProtectedRoute
          path="/admin/viewSchemaRequests"
          component={ViewSchemaRequests}
        />
        <ProtectedRoute
          path="/admin/viewSingleSchemaRequest"
          component={ViewSingleSchemaRequest}
        />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/client/uploadFile" component={clientFileUploadDocument} />
        <Route path="/UserDetailsAdmin" component={UserDetailsAdmin} />
        <Route path="/EditProfileClient" component={EditProfileClient} />
        <Route path="/UserPolicy" component={UserPolicy} />
        <Route path="/Test" component={Test} />
        <Route path="/ViewClientProfile" component={ViewClientProfile} />
        <Route path="/ViewAdminInformation" component={ViewAdminInformation} />
        <Route path="/ViewQueries" component={ViewQueries} />
        <Route path="/CreateNewQuery" component={CreateNewQuery} />
        <Route path="/CreateNewPolicy" component={CreateNewPolicy} />
        <Route path="/QueryDetails" component={QueryDetails} />
        <Route path="/ViewSingleQuery" component={ViewSingleQuery} />
        <Route path="/ViewClientDetails" component={ViewClientDetails} />
        <Route path="/ViewPolicyDetails" component={ViewPolicyDetails} />
        <Route path="/ViewQuery" component={ViewQuery}/>

      </Switch>
    </Layout>
  );
}
