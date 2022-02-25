import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import Layout from '../components/Layout';
import People from '../containers/People';
import PersonDetail from '../containers/People/detail';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/home" />)} />
      <PublicRoute
        path="/home"
        exact
        component={People}
        layout={Layout}
      />

      <PublicRoute
        path="/home/:id"
        exact
        component={PersonDetail}
        layout={Layout}
      />
    </Switch>
  )};

export default Routes;
