import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({username:"", password:""});

    const handleChanges = e => {
        setForm({...form, [e.target.name] : e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("",form)
        .then(res =>{
            console.log("login post res",res)
            localStorage.setItem("token", )
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={form.username} onChange={handleChanges} placeholder="username"></input>
                <input type="password" name="password" value={form.password} onChange={handleChanges} placeholder="password" ></input>
                <button type="submit">Login!</button>
                <p>Need to create an account?</p>
                <Link to="/signup">Signup Instead</Link>
            </form>
        </div>
    );
};

export default Login