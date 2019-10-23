import React from 'react'
import NavBar from './NavBar'
import Cards from './Cards'
import AddButton from "./AddButton"

const DashBoard = () => {
    return (
        <content >
            <NavBar />
            <AddButton/>
            <Cards />
        </content>
    );
};

export default DashBoard;