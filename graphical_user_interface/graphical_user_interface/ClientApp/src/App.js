import React from "react";
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

import Signup from "./components/pages/Signup";
import About from "./pages/globalPages/About";
import Contact from "./pages/globalPages/Contact";
import Client from "./pages/client/Client";
import Admin from "./pages/admin/Admin";
import Application from "./pages/globalPages/Application";
import Documentation from "./components/pages/Documentation";
import clientFileUploadDocument from "./pages/client/clientFileUploadDocument";
import UserDetailsAdmin from "./components/pages/UserDetailsAdmin";
import EditProfileClient from "./pages/client/EditProfileClient";
import UserPolicy from "./components/pages/UserPolicy";
import ProfilePage from "./pages/globalPages/ProfilePage";
import ViewClientProfile from "./pages/client/ViewClientProfile";
import ViewAdminInformation from "./pages/admin/ViewAdminInformation";
import ViewQueries from "./pages/admin/ViewQueries";
import CreateQuery from "./pages/client/CreateQuery";

import ViewPolicies from "./pages/client/ViewPolicies";
import ViewSinglePolicy from "./pages/client/ViewSinglePolicy";

import "./custom.css";

import Test from "./pages/Test";

export default function App() {
  return (
    <Layout>
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
        <Route path="/Documentation" exact component={Documentation} />
        <ProtectedRoute path="/counter" component={Counter} />
        <ProtectedRoute path="/myProfile" component={ProfilePage} />
        <ProtectedRoute path="/viewPolicies" component={ViewPolicies} />
        <ProtectedRoute path="/viewSinglePolicy" component={ViewSinglePolicy} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/client/uploadFile" component={clientFileUploadDocument} />
        <Route path="/UserDetailsAdmin" component={UserDetailsAdmin} />
        <Route path="/EditProfileClient" component={EditProfileClient} />
        <Route path="/UserPolicy" component={UserPolicy} />
        <Route path="/Test" component={Test} />
        <Route path="/ViewClientProfile" component={ViewClientProfile} />
        <Route path="/ViewAdminInformation" component={ViewAdminInformation} />
        <Route path="/ViewQueries" component={ViewQueries} />
        <Route path="/CreateQuery" component={CreateQuery} />
      </Switch>
    </Layout>
  );
}
