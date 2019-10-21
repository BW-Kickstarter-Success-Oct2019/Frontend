import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import {PostCampaign} from "../actions"

const CampaignForm = () => {
    // const [form, setForm] = useState({name:"", description:"", goal:"", country:"", duration:"", category:""});

    // const handleChanges = e => {
    //     setForm({...form, [e.target.name] : e.target.value})
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
        
    // }

    return (
        <Form>
                <Field type="text" name="name"  placeholder="name..."/>

                <Field type="text" name="description" placeholder="description..."/>

                <Field type="password" name="goal"  placeholder="goal..."/>

                <Field type="password" name="country"  placeholder="country..."/>

                <Field type="password" name="duration" placeholder="duration..."/>

                <Field type="password" name="category" placeholder="category..."/>

                <button type="submit">add Campaign</button>
            </Form>
    );
};

const FormikCampaignForm = withFormik({
    mapPropsToValues({name,description,goal,country,duration,category,PostCampaign}){
        return{
            name: name || "",
            description: description || "",
            goal: goal || "",
            country: country || "",
            duration: duration || "",
            category: category || "",
            PostCampaign : PostCampaign
        }
    },
    handleSubmit(values){
        values.PostCampaign({name: values.name, description: values.description, goal:values.goal,country:values.country,duration:values.duration,category:values.category})
    }
})(CampaignForm)

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error
    }
}

export default connect(mapStateToProps,{PostCampaign})(FormikCampaignForm)

