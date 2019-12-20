import React from "react";
import { Switch, Route } from 'react-router-dom';
import {  } from 'react-redux';
import RouterConfig from "../config/RouterConfig";

//Components
import ViewCustomers from '../containers/ViewCustomers';
import MainPage from '../containers/MainPage';


function App() {
  console.log("I am in App!")
  return (
    <div>
      <RouterConfig/>
    </div>
  );
}

export default App;
