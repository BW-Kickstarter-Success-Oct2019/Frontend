import React, {useState,useEffect} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
import NavBar from './NavBar'
import Cards from './Cards'
import AddButton from "./AddButton"
import {connect} from "react-redux";
import {GetCampaign} from "../actions"
// USeeffect for getting all campaigns of user here
// once have arrays of cAMPAIGNS then map over. Pass each campaign as prop into the cards

const DashBoard = (props) => {
    
    // console.log("dashboardprops",props);
    useEffect(() => {
        props.GetCampaign()
    },[]);

    
    return (
        
        <content >
            <NavBar />
            <AddButton/>
            <Cards campaigns={props.campaign} />
        </content>
    );
};

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error,
        campaign: state.re.campaign
    }
}

export default connect(mapStateToProps,{GetCampaign})(DashBoard);