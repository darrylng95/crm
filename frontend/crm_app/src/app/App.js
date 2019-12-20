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
        <Route exact
          path="/viewCustomers"
          name="ViewCustomers"
          component={ViewCustomers}
        />  
        <Route exact
          path="/mainPage"
          name="mainPage"
          component={MainPage}
        />
        <Route path="/" name="" component={ViewCustomers}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
