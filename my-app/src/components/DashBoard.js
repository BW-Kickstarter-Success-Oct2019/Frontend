import React, {useState,useEffect} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
import NavBar from './NavBar'
import Cards from './Cards'
import AddButton from "./AddButton"
import {connect} from "react-redux";
import {GetCampaign} from "../actions"
import {GetUser} from "../actions"

const DashBoard = (props) => {
    
    useEffect(() => {
        props.GetCampaign()
        props.GetUser()
    },[]);

    
    return (
        
        <content >
            <NavBar users={props.user} />
            <AddButton/>
            <div className="cards-container">
                <Cards campaigns={props.campaign} />
            </div>
        </content>
    );
};

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error,
        campaign: state.re.campaign,
        user:state.re.user
    }
}

export default connect(mapStateToProps,{GetCampaign,GetUser})(DashBoard);