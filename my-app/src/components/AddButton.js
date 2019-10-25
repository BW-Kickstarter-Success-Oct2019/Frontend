import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';import history from '../components/history';


    const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    }));

    export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div>
        <Fab onClick={() => history.push("/addCampaign")}variant="extended" aria-label="delete" className={classes.fab}>
            <AddIcon className={classes.extendedIcon} />
            Add Campaign
        </Fab>
        </div>
    );
    }