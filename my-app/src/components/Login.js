import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import {PostLogin} from "../actions";
import styled from 'styled-components';
import NavBar from "./NavBar";

const FieldContain = styled.div`
    margin-bottom:1%;
`;

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
            <NavBar/>
            <h1>Login</h1>
            <div>
                <Form >
                    <FieldContain>
                        <Field className="field-style" type="text" name="username" placeholder="username"/>
                    </FieldContain>
                    <FieldContain>
                        <Field className="field-style" type="password" name="password" placeholder="password" />
                    </FieldContain>
                    <div>
                        <button className="submit-buttons" type="submit">Login!</button>
                    </div>
                    <Link to="/signup">Need to create an account? Signup Instead</Link>
                </Form>
            </div>
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
        handleSubmit(values, props){
            console.log("values",values)
            console.log("props",props)
            values.PostLogin({username: values.username, password:values.password}, props)
        }
    })(Login)

    const mapStateToProps = state =>{
        return {
            isPosting: state.re.isPosting,
            error: state.re.error
        }
    }

export default connect(mapStateToProps,{PostLogin})(FormikLogin)