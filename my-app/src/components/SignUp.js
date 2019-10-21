import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import { PostSignUp } from "../actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
    // const [form, setForm] = useState({email:"", username:"", password:""});

    // const handleChanges = e => {
    //     setForm({...form, [e.target.name] : e.target.value})
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     PostSignUp(form)
    // }

    return(
        <div>
            <Form>
                <Field type="email" name="email"  placeholder="email..."/>

                <Field type="text" name="username" placeholder="username..."/>

                <Field type="password" name="password"  placeholder="password..."/>

                <button type="submit">SignUp!</button>
                <p>Already have an account?</p>
                <Link to="/login">Login Instead</Link>
            </Form>
        </div>
    );
};

const FormikSignUp = withFormik({
    mapPropsToValues({email,username,password,PostSignUp}){
        return{
            email: email || "",
            username: username || "",
            password: password || "",
            PostSignUp : PostSignUp
        }
    },
    handleSubmit(values){
        values.PostSignUp({email:values.email, username: values.username, password:values.password})
    }
})(SignUp)

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error
    }
}

export default connect(mapStateToProps,{PostSignUp})(FormikSignUp)