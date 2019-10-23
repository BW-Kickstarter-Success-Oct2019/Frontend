import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import { PostSignUp } from "../actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from 'styled-components'
import '../App.css';
import NavBar from "./NavBar";


const FieldContain = styled.div`
    margin-bottom:1%;
`;
const ErrMsg = styled.p`
    color:grey;
    padding:0;
    margin:0;
`;

const SignUp = ({touched, errors}) => {
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
            <NavBar/>
            <h1>Sign Up</h1>
            <div>   
                <Form>
                    <FieldContain>
                        <Field className="field-style" type="email" name="email"  placeholder="email..."/>
                        {touched.email && errors.email && (
                    <ErrMsg className="error">{errors.email}</ErrMsg>
                )}
                    </FieldContain>
                    <FieldContain>
                        <Field className="field-style" type="text" name="username" placeholder="username..."/>
                        {touched.username && errors.username && (
                    <ErrMsg className="error">{errors.username}</ErrMsg>
                )}
                    </FieldContain>
                    <FieldContain>
                        <Field className="field-style" type="password" name="password"  placeholder="password..."/>
                        {touched.password && errors.password && (
                    <ErrMsg className="error">{errors.password}</ErrMsg>
                )}
                    </FieldContain>
                    

                    
                    <div>
                        <button className="submit-buttons" type="submit">SignUp!</button>
                    </div>
                    
                    <Link to="/">Already have an account? Login Instead</Link>
                </Form>
            </div>
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
    validationSchema:Yup.object().shape({
        email:Yup.string().required("Must include email"),
        username:Yup.string().required("Must include username"),
        password:Yup.string().required("Must include password"),
    }),
    handleSubmit(values,props){
        console.log("values",values)
        console.log("props",props)
        values.PostSignUp({email:values.email, username: values.username, password:values.password}, props)
    }
})(SignUp)

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error
    }
}

export default connect(mapStateToProps,{PostSignUp})(FormikSignUp)