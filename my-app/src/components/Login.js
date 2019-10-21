import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import {PostLogin} from "../actions"

const Login = () => {
    // const [form, setForm] = useState({username:"", password:""});

    // const handleChanges = e => {
    //     setForm({...form, [e.target.name] : e.target.value})
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post("",form)
    //     .then(res =>{
    //         console.log("login post res",res)
    //         localStorage.setItem("token", )
    //     })
    // }

    return(
        <div>
            <Form >
                <Field type="text" name="username" placeholder="username"/>

                <Field type="password" name="password" placeholder="password" />

                <button type="submit">Login!</button>
                <p>Need to create an account?</p>
                <Link to="/signup">Signup Instead</Link>
            </Form>
        </div>
    );
};

    const FormikLogin = withFormik({
        mapPropsToValues({username,password,PostLogin}){
            return{
                username: username || "",
                pasword: password || "",
                PostLogin:PostLogin
            }
        },
        handleSubmit(values){
            values.PostLogin({username: values.username, password:values.password})
        }
    })(Login)

    const mapStateToProps = state =>{
        return {
            isPosting: state.re.isPosting,
            error: state.re.error
        }
    }

export default connect(mapStateToProps,{PostLogin})(FormikLogin)