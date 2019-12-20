import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'react-redux';

//Components
import ViewCustomers from '../containers/ViewCustomers';
import MainPage from '../containers/MainPage';
import MainLayout from '../layout/MainLayout';

function RouterConfig () {
  console.log ('I am in RouterConfig!');
  return (
    <Switch>
        <Route exact path="/viewCustomers" component={ViewCustomers} />
        <Route exact path="/mainPage" component={MainPage} />
        <Route exact path="/" component={ViewCustomers} />
    </Switch>
  );
}

export default RouterConfig;
