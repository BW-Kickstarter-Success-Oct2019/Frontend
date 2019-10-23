import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import history from '../components/history';


const SimpleMenu = (props) => {
    console.log("vertbutton props",props)
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

    // const handleEdits = () => {
    //     history.push(`/edit-campaign/${props.id}`)
    //     };

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

            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
    </div>
    );
};

// const mapStateToProps = state => {
//     return{
//         campaign: state.re.campaign
//     };
// };

export default SimpleMenu