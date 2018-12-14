import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



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
            <Typography component="p">
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
