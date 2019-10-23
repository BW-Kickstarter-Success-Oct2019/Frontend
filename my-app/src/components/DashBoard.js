import React from 'react'
import NavBar from './NavBar'
import Cards from './Cards'
import AddButton from "./AddButton"

// USeeffect for getting all campaigns of user here
// once have arrays of cAMPAIGNS then map over. Pass each campaign as prop into the cards

const DashBoard = () => {
    return (
        <content >
            <NavBar />
            <AddButton/>
            <Cards/>
        </content>
    );
};

export default DashBoard;