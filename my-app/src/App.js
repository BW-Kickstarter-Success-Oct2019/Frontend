import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CampaignForm from "./components/CampaignForm";
import {PrivateRoute} from "./components/PrivateRoute";
import DashBoard from './components/DashBoard';
import UpdateCampaign from './components/UpdateCampaign';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <PrivateRoute path="/dashboard" component={DashBoard}/>
      <PrivateRoute path="/addCampaign" component={CampaignForm}/>
      <PrivateRoute path="/edit-campaign/:id" component={UpdateCampaign}/>
    </div>
  );
}

export default App;
