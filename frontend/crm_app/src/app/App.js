import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import ViewCustomers from '../containers/ViewCustomers';
import MainPage from '../containers/MainPage';

function App () {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <Switch>
        <Route
          path="/viewCustomers"
          name="ViewCustomers"
          component={ViewCustomers}
        />
        <Route
          path="/mainPage"
          name="mainPage"
          component={MainPage}
        />
        <Route path="/" name="" component={MainPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
