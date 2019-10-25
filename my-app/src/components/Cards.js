import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VertButton from './VertButton';
import { FormattedNumber } from "react-intl";


const useStyles = makeStyles(theme => ({
  card: {
    width: '30%',
    maxHeight: 600,
    margin: '25px 25px'
  },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
// pass ID into vert button 
// console.log("card prop", props)
  return (
    
    <>
    
    {props.campaigns.map(campaign => (
      // <p>{campaign.blurb}</p>
      
    <Card  className={classes.card}>
      <CardHeader 
        className="cardHeader"
        title={campaign.name}
        action={
            <VertButton id={campaign.id}/> 
          }
      />   
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {campaign.blurb}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <typography>Show More</typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Goal:  {"$" + campaign.goal}
          </Typography>
          <Typography paragraph>
          Country:  {campaign.country}
          </Typography>
          <Typography paragraph>
          Duration: {campaign.duration + " days"}
          </Typography>
          <Typography>
            Category: {campaign.category} 
          </Typography>
          <Typography paragraph>
            Success Rate: <FormattedNumber style="percent" value={campaign.success} minimumFractionDigits={2}/>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    ) )}

    </> 
  );
  
}