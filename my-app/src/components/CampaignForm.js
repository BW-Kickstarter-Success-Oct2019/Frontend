import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import {PostCampaign} from "../actions";
import styled from 'styled-components';

const MarginDiv = styled.div`
margin-bottom:1%;
`;

const GoalCountry = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:1%;
    margin-right:2%;
    width:100%;
`;
const DurCate = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:1%;
    
`;

const Goal = styled.div`
    
    width:15%
`;

const Country = styled.div`
width:15%
`;
const Duration = styled.div`
    
    width:15%
`;

const Category = styled.div`
width:15%
`;


const ErrMsg = styled.p`
    color:grey;
    padding:0;
    margin:0;
`;

const CampaignForm = ({errors,touched,value}) => {
    // const [form, setForm] = useState({name:"", description:"", goal:"", country:"", duration:"", category:""});

    // const handleChanges = e => {
    //     setForm({...form, [e.target.name] : e.target.value})
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
        
    // }

    return (
        <div>
            <h1>Add Your Campaign</h1>
            <div>
            <Form className="form-parent">
                <MarginDiv>
                    <Field className="field-style" type="text" name="name"  placeholder="name of campaign"/>
                        {touched.name && errors.name && (
                    <ErrMsg className="error">{errors.name}</ErrMsg>
                )}
                </MarginDiv>
                <MarginDiv>
                    <Field className="field-style" type="text" name="blurb" placeholder="description"/>
                    {touched.blurb && errors.blurb && (
                <ErrMsg className="error">{errors.blurb}</ErrMsg>
            )}
                </MarginDiv>
                <GoalCountry>
                    <Goal>
                        <Field className="field-style-child" type="number" name="goal"  placeholder="$goal"/>
                            {touched.goal && errors.goal && (
                        <ErrMsg className="error">{errors.goal}</ErrMsg>
                        )}
                    </Goal>
                    
                
                <Country>
                    <Field className="field-style-child" component="select" name="country">
                        <option>Choose your country...</option>
                        <option value="us">US</option>
                        <option value="nz">NZ</option>
                        <option value="ca">CA</option>
                        <option value="GB">GB</option>
                        <option value="SE">SE</option>
                        <option value="DK">DK</option>
                        <option value="IT">IT</option>
                        <option value="DE">DE</option>
                        <option value="AU">AU</option>
                        <option value="FR">FR</option>
                        <option value="IE">IE</option>
                        <option value="CH">CH</option>
                        <option value="ES">ES</option>
                        <option value="BE">BE</option>
                        <option value="NL">NL</option>
                        <option value="MX">MX</option>
                        <option value="JP">JP</option>
                        <option value="HK">HK</option>
                        <option value="AT">AT</option>
                        <option value="SG">SG</option>
                        <option value="NO">NO</option>
                        <option value="LU">LU</option>
                    </Field>
                        {touched.country && errors.country && (
                        <ErrMsg className="error">{errors.country}</ErrMsg>
                        )}
                    </Country>
                </GoalCountry>
                <DurCate>
                    <Duration>
                        <Field className="field-style-child" type="number" name="duration" placeholder="duration in days"/>
                        {touched.duration && errors.duration && (
                    <ErrMsg className="error">{errors.duration}</ErrMsg>
                )}
                    </Duration>
                    <Category>
                        <Field className="field-style-child" component="select" name="category">
                            <option>Choose a category...</option>
                            <option value="art">art</option>
                            <option value="comics">comics</option>
                            <option value="crafts">crafts</option>
                            <option value="dance">dance</option>
                            <option value="design">design</option>
                            <option value="fashion">fashion</option>
                            <option value="film/video">film/video</option>
                            <option value="food">food</option>
                            <option value="games">games</option>
                            <option value="journalism">journalism</option>
                            <option value="music">music</option>
                            <option value="photography">photography</option>
                            <option value="publishing">publishing</option>
                            <option value="technology">technology</option>
                            <option value="theater">theater</option>
                        </Field>
                            {touched.category && errors.category && (
                        <ErrMsg className="error">{errors.category}</ErrMsg>
                    )}
                    </Category>
                </DurCate>
                <div>
                    <button className="submit-buttons"type="submit">Add Campaign</button>
                </div>
                    
                    
                    
                </Form>
                </div>
            </div>
    );
};

const FormikCampaignForm = withFormik({
    mapPropsToValues({name,blurb,goal,country,duration,category,PostCampaign}){
        return{
            name: name || "",
            blurb: blurb || "",
            goal: goal || "",
            country: country || "",
            duration: duration || "",
            category: category || "",
            PostCampaign : PostCampaign
        }
    },

    validationSchema:Yup.object().shape({
        name:Yup.string().required("Must include campaign name"),
        blurb:Yup.string().required("Must include blurb"),
        goal:Yup.string().required("Must include goal"),
        country:Yup.string().required("Must include country"),
        duration:Yup.string().required("Must include duration"),
        category:Yup.string().required("Must include category")
    }),


    handleSubmit(values){
        values.PostCampaign({name: values.name, blurb: values.blurb, goal:values.goal,
        country:values.country,
        duration:values.duration,category:values.category})
    }
})(CampaignForm)

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error
    }
}

export default connect(mapStateToProps,{PostCampaign})(FormikCampaignForm)

