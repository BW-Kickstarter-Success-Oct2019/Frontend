import React, {useState,useEffect} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import history from '../components/history';
import {DeleteCampaign} from "../actions";
import {connect} from "react-redux";


const SimpleMenu = (props) => {
    // console.log("vertbutton props",props)

    // const initialState = {
    //     name:"",
    //     blurb:"",
    //     goal:"",
    //     country:"",
    //     duration:"",
    //     category:""
    // }

    // const [current, setCurrent] = useState(initialState);
// console.log("current", current)
    // useEffect(() => {
    //     axiosWithAuth()
    //     .get(`/restricted/campaigns/${props.id}`)
    //     .then(res =>{
    //         // console.log("get byid res", res);
    //         setCurrent(res.data);
    //     })
    // },[])
    // console.log("vertbutton props",props)
    // const item = props.campaign.find(
    //     thing => `${thing.id}` === props.match.
    // )


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    
    };

    const handleDelete = () => {
        props.DeleteCampaign(props.id)
        
        };

    const handleEdits = () => {
        history.push(`/edit-campaign/${props.id}`)
        };

    return (
        <div>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon />
        </IconButton >
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >

            <MenuItem onClick={handleEdits}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    </div>
    );
};

const mapStateToProps = state => {
    return{
        campaign: state.re.campaign
    };
};

export default connect(mapStateToProps,{DeleteCampaign})(SimpleMenu)
