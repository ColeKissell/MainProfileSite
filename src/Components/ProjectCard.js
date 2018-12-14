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


// function SimpleCard(props) {
//   const { classes } = props;
  
//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           {this.props.name}
//         </Typography>
//         <Typography component="p">
//         {this.props.description}
//           <br />
//           the link is:{this.props.link}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <a href={this.porps.link} target='_blank' rel="noopener noreferrer">
//           <Button size="small">Learn More</Button>
//         </a>
        
//       </CardActions>
//     </Card>
//   );
// }

// SimpleCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export class ProjectCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      props: props,
  }
  }
    
    render() {   
       
        return (
          <Card >
          <CardContent>
            <Typography variant='h6' gutterBottom>
              {this.props.name}
            </Typography>
            <Typography variant="paragraph" component="p">
            {this.props.description}
            </Typography>
          </CardContent>
          <CardActions>

            {this.props.link ? 
              <a href={this.props.link} target='_blank' rel="noopener noreferrer">
              <Button size="small">Live Site</Button>
              </a> : null
            }
            
            {this.props.link2? <a href={this.props.link2} target='_blank' rel="noopener noreferrer">
              <Button size="small">Git Repo</Button>
            </a>: null}
            
          </CardActions>
        </Card>
        );
      }

}


export default withStyles(styles)(ProjectCard);
