import React from "react";
import { Switch, Route } from 'react-router-dom';
import {  } from 'react-redux';
import RouterConfig from "../config/RouterConfig";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import Main from "../layout/MainLayout";

//Components
import ViewCustomers from '../containers/ViewCustomers';
import MainPage from '../containers/MainPage';


function App() {
  console.log("I am in App!")
  return (
    <div>
      <Sidebar/>
      <RouterConfig/>
      <Footer/>
    </div>
  );
}

export default App;
