import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import {UpdateCampaign} from "../actions";
import styled from 'styled-components';
import history from '../components/history';

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

const UpdateForm = (props, {errors,touched,values}) => {
    // console.log("UPFRM Props",props)
    const initialState = {
        name:"",
        blurb:"",
        goal:"",
        country:"",
        duration:"",
        category:""
    }

    const [updateItem, setUpdateItem] = useState(initialState);
console.log("updateItem", updateItem)
    useEffect(() => {
        axiosWithAuth()
        .get(`/restricted/campaigns/${props.match.params.id}`)
        .then(res =>{
            // console.log("get byid res", res);
            setUpdateItem(res.data);
        })
    },[])

    const handleChange = e =>{
        setUpdateItem({...updateItem, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        
        
        props.UpdateCampaign(updateItem,props.match.params.id,redirect)

    } 
    const redirect = () => {
        history.push("/dashboard")
    }

    return (
        <div>
            <h1>Update Your Campaign</h1>
            <div>
            <form onSubmit={handleSubmit} className="form-parent">
                <MarginDiv>
                    <input onChange={handleChange} value={updateItem.name} className="field-style" type="text" name="name"  placeholder="name of campaign"/>
                        {/* {touched.name && errors.name && (
                    <ErrMsg className="error">{errors.name}</ErrMsg> 
                )} */}
                </MarginDiv>
                <MarginDiv>
                    <input onChange={handleChange} value={updateItem.blurb} className="field-style" type="text" name="blurb" placeholder="description"/>
                    {/* {touched.blurb && errors.blurb && (
                <ErrMsg className="error">{errors.blurb}</ErrMsg> */}
            {/* )} */}
                </MarginDiv>
                <GoalCountry>
                    <Goal>
                        <input onChange={handleChange} value={updateItem.goal} className="field-style-child" type="number" name="goal"  placeholder="$goal"/>
                            {/* {touched.goal && errors.goal && (
                        <ErrMsg className="error">{errors.goal}</ErrMsg>
                        // )} */}
                    </Goal>
                    
                
                <Country>
                    <select onChange={handleChange} value={updateItem.country} className="field-style-child"  name="country">
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
                    </select>
                        {/* {touched.country && errors.country && (
                        <ErrMsg className="error">{errors.country}</ErrMsg>
                        )} */}
                    </Country>
                </GoalCountry>
                <DurCate>
                    <Duration>
                        <input onChange={handleChange} value={updateItem.duration} className="field-style-child" type="number" name="duration" placeholder="duration in days"/>
                        {/* {touched.duration && errors.duration && (
                    <ErrMsg className="error">{errors.duration}</ErrMsg> 
                )}*/}
                    </Duration>
                    <Category>
                        <select onChange={handleChange} value={updateItem.category} className="field-style-child"  name="category">
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
                        </select>
                            {/* { touched.category && errors.category && (
                        <ErrMsg className="error">{errors.category}</ErrMsg>
                    )} */}
                    </Category>
                </DurCate>
                <div>
                    <button className="submit-buttons"type="submit">Update Campaign</button>
                </div>
                    
                    
                    
                </form>
                </div>
            </div>
    );
};

// const FormikUpdateForm = withFormik({
//     mapPropsToValues({name,blurb,goal,country,duration,category,UpdateCampaign}){
//         return{
//             name: name || "",
//             blurb: blurb || "",
//             goal: goal || "",
//             country: country || "",
//             duration: duration || "",
//             category: category || "",
//             UpdateCampaign : UpdateCampaign
//         }
//     },

//     validationSchema:Yup.object().shape({
//         name:Yup.string().required("Must include campaign name"),
//         blurb:Yup.string().required("Must include blurb"),
//         goal:Yup.string().required("Must include goal"),
//         country:Yup.string().required("Must include country"),
//         duration:Yup.string().required("Must include duration"),
//         category:Yup.string().required("Must include category")
//     }),


//     handleSubmit(values,props){
//         console.log("values",values)
//         console.log("props",props)
//         values.UpdateCampaign({name: values.name, blurb: values.blurb, goal:values.goal,
//             country:values.country,
//             duration:values.duration,category:values.category},props.match.params.id)
//     }
// })(UpdateForm)

const mapStateToProps = state =>{
    return {
        isPosting: state.re.isPosting,
        error: state.re.error
    }
}

export default connect(mapStateToProps,{UpdateCampaign})(UpdateForm)