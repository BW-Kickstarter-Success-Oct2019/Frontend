import React, {useState,useEffect} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
import NavBar from './NavBar'
import Cards from './Cards'
import AddButton from "./AddButton"

// USeeffect for getting all campaigns of user here
// once have arrays of cAMPAIGNS then map over. Pass each campaign as prop into the cards

const DashBoard = () => {
    const [campaigns, setCampaigns] = useState([])
    console.log("campainff",campaigns);
    useEffect(() => {
        axiosWithAuth()
        .get("/restricted/campaigns")
        .then(res =>{
            console.log("get res", res);
            setCampaigns(res.data);
        })
    },[]);

    
    return (
        
        <content >
            <NavBar />
            <AddButton/>
            <Cards campaigns={campaigns} />
        </content>
    );
};

export default DashBoard;