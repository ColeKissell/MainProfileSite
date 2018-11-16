import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { IconContext } from "react-icons";


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


// need to add a function to fill out the card based on props passed to the class


function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Team Show Project
        </Typography>
        <Typography component="p">
          A work in progress. We attempted to build a show management system. This is connected to a database and an API.
          <br />
          the link is: https://team-this-store.netlify.com/
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://team-this-store.netlify.com/" target='_blank' rel="noopener noreferrer">
          <Button size="small">Learn More</Button>
        </a>
        
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export class ProjectCard extends React.Component {
    state = {
        props: { },
    }
    render(props) {    
        return (
              SimpleCard(props)
        );
      }

}


export default withStyles(styles)(SimpleCard);
