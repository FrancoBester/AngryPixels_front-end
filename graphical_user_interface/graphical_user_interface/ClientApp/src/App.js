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
import clientFileUploadDocument from "./pages/client/clientFileUploadDocument";

import "./custom.css";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/client/uploadFile" component={clientFileUploadDocument} />
      </Switch>
    </Layout>
  );
}
