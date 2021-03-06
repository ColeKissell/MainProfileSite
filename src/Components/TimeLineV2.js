import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import SimpleCard from './ProjectCard';


const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  backButton: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  completed: {
    marginTop: theme.spacing.unit,
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Start', 'Next', 'In Progress'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return getCard();
    case 1:
      return getCard();
    case 2:
      return getCard();
    default:
      return 'Unknown step';
  }
}

function getCard() {
  return <SimpleCard/>;
}

class TimelineV2 extends React.Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
  };

  totalSteps = () => {
    return getSteps().length;
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed,
    });

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== this.totalSteps() - this.skippedSteps()) {
      this.handleNext();
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
    });
  };

  skippedSteps() {
    return this.state.skipped.size;
  }

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps() - this.skippedSteps();
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper  activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            const props = {};
            const buttonProps = {};
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                  <StepButton
                    onClick={this.handleStep(index)}
                    completed={this.isStepComplete(index)}
                    {...buttonProps}
                    className={classes.button}
                  >
                    {label}
                  </StepButton>
                <StepContent>
                  <div> {getStepContent(index)}</div>
                  <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >Back</Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >Next</Button>
                  {this.isStepOptional(activeStep) &&
                    !this.state.completed.has(this.state.activeStep) && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleSkip}
                        className={classes.button}
                      >Skip</Button>
                    )}
                    {activeStep !== steps.length &&
                      (this.state.completed.has(this.state.activeStep) ? (
                        <Typography className={classes.completed}>
                          Step {activeStep + 1} already completed
                      </Typography>
                      ) : (
                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.handleComplete}
                        className={classes.button}
                      >
                          {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                        </Button>
                      ))}
                </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        
        <div>
          {this.allStepsCompleted() ? (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </Paper>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            </div>
          )}
        </div>
      </div>
    );
  }
}

TimelineV2.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TimelineV2);
