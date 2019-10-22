import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import CampaignForm from "./components/CampaignForm";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/addCampaign" component={CampaignForm}/>
    </div>
  );
}

export default App;
