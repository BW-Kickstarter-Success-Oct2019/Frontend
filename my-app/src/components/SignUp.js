import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import { PostSignUp } from "../actions/Actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [form, setForm] = useState({email:"", username:"", password:""});

    const handleChanges = e => {
        setForm({...form, [e.target.name] : e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        PostSignUp(form)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={form.email} onChange={handleChanges} placeholder="email..."></input>

                <input type="text" name="username" value={form.username} onChange={handleChanges} placeholder="username..."></input>

                <input type="password" name="password" value={form.password} onChange={handleChanges} placeholder="password..."></input>

                <button type="submit">SignUp!</button>
                <p>Already have an account?</p>
                <Link to="/login">Login Instead</Link>
            </form>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error
    }
}

export default connect(mapStateToProps,{PostSignUp})(SignUp)