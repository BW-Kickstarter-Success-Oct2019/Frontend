import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
      <Fab variant="extended" aria-label="delete" className={classes.fab}>
        <AddIcon className={classes.extendedIcon} />
        {/* This button needs to link to the campaign form */}
        Add Campaign
      </Fab>
    </div>
  );
}