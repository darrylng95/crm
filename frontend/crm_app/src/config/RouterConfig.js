import React from "react";
import { Switch, Route } from 'react-router-dom';
import {  } from 'react-redux';

//Components
import ViewCustomers from '../containers/ViewCustomers';
import MainPage from '../containers/MainPage';


function RouterConfig() {
  console.log("I am in RouterConfig!")
  return (
    <Switch>
      <Route exact path = "/viewCustomers" component = {ViewCustomers} />
      <Route exact path = "/mainPage" component = {MainPage}/>
    </Switch>
  );
}

export default RouterConfig;