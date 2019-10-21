import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

const CampaignForm = () => {
    const [form, setForm] = useState({name:"", description:"", goal:"", country:"", duration:"", category:""});

    const handleChanges = e => {
        setForm({...form, [e.target.name] : e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onChange={handleChanges} placeholder="name..."></input>

                <input type="text" name="description" value={form.description} onChange={handleChanges} placeholder="description..."></input>

                <input type="password" name="goal" value={form.goal} onChange={handleChanges} placeholder="goal..."></input>

                <input type="password" name="country" value={form.country} onChange={handleChanges} placeholder="country..."></input>

                <input type="password" name="duration" value={form.duration} onChange={handleChanges} placeholder="duration..."></input>

                <input type="password" name="category" value={form.category} onChange={handleChanges} placeholder="category..."></input>

                <button type="submit">add Campaign</button>
                
                
            </form>
    );
};

export default CampaignForm