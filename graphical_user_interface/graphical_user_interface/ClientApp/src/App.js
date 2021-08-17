import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FetchData } from './pages/FetchData';
import { Counter } from './pages/Counter';
import { Switch } from 'react-router';
import { ProtectedRoute } from './protectedRoute';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
        </Switch>
      </Layout>
    );
  }
}
