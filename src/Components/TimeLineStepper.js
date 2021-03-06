import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SimpleCard from './ProjectCard';
import StepButton from '@material-ui/core/StepButton';

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: "steelBlue",
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    completed: {
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
    return ["Utah Stars App",'Team Show Project', 'Simple Tracker React', 'Simple Tracker Vue', 'Simple Tracker Angular'];
}
function getStepContent(step) {
    switch (step) {
        case 0:
        return getCard(
            "Utah Stars App",
            "A mobile application for the Utah Stars Team that pulls data from the existing WordPress site.  Conducted research on available technologies and helped set up the ui/ux of the mobile application.Git Repo will not be availiable",
            "in production still",
        );
        case 1:
        return getCard(
            "Team Show Project",
            "A work in progress. We attempted to build a show management system. This is connected to a database and an API.",
            "https://team-this-store.netlify.com/",
            'https://github.com/Donohoo13/StoreV4'
        );
        case 2:
        return getCard(
            "Simple Tracker in React",
            "A simple app to track the name and description of whatever you want. This was built using React, Hapi, Mongoose, and MongoDB. This is part one of my exploration of front end frameworks. If the page does not display with individual items in the database reload the page. The API can be found here: https://github.com/ColeKissell/TrackerAPI",
            "https://fervent-bose-db13b6.netlify.com/",
            "https://github.com/ColeKissell/simpleTrackerReact"
        );
        case 3:
        return getCard( 
            "Simple Tracker in Vue",
            "A simple app to track the name and description of whatever you want. This was built using Vue, Hapi, Mongoose, and MongoDB. This is part two of my exploration of front end frameworks. Live site coming soon.",
            null,
            "https://github.com/ColeKissell/vueSimpleTracker"
        );
        case 4:
        return getCard( 
            "Simple Tracker in Angular",
            "A simple app to track the name and description of whatever you want. This was built using Angular, Hapi, Mongoose, and MongoDB. This is part three of my exploration of front end frameworks. Live site coming soon.",
            null,
            "https://github.com/ColeKissell/simpleTracker"
        );
        default:
        return 'Unknown step';
    }
}

function getCard(title, description,link, link2) {
    return <SimpleCard name={title} description={description} link ={link} link2={link2}/>;
}

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 0,
        completed: new Set(),
        skipped: new Set(),
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

    // handleReset = () => {
    //     this.setState({
    //     activeStep: 0,
    //     completed: new Set(),
    //     skipped: new Set(),
    //     });
    // };


    totalSteps = () => {
        return getSteps().length;
    };

    // isStepOptional = step => {
    //     return step === 1;
    // };

    // handleSkip = () => {
    //     const { activeStep } = this.state;
    //     if (!this.isStepOptional(activeStep)) {
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     this.setState(state => {
    //         const skipped = new Set(state.skipped.values());
    //         skipped.add(activeStep);
    //         return {
    //             activeStep: state.activeStep + 1,
    //             skipped,
    //         };
    //     });
    // };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    // handleComplete = () => {
    //     const completed = new Set(this.state.completed);
    //     completed.add(this.state.activeStep);
    //     this.setState({
    //         completed,
    //     });

    //     if (completed.size !== this.totalSteps() - this.skippedSteps()) {
    //         this.handleNext();
    //     }
    // };

    skippedSteps() {
        return this.state.skipped.size;
    };

    // isStepSkipped(step) {
    //     return this.state.skipped.has(step);
    // };

    // isStepComplete(step) {
    //     return this.state.completed.has(step);
    // }

    completedSteps() {
        return this.state.completed.size;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps() - this.skippedSteps();
    }
    
    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }
    

    handleStep = step => () => {
        this.setState({
          activeStep: step,
        });
      };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepButton
                            onClick={this.handleStep(index)}
                            className={classes.button}
                            >
                            <StepLabel>{label}</StepLabel>
                            </StepButton>
                            
                                
                            <StepContent>
                                <div>{getStepContent(index)}</div>
                                <div className={classes.actionsContainer}>
                                {/* bottom buttons */}
                                    <div>
                                        {/* back button */}
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                            className={classes.button}>
                                            Back
                                        </Button>
                                        {/* next or to top button */}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}>
                                            {activeStep === steps.length - 1 ? 'Top of List' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&quot;re finished</Typography>
                    <Button onClick={this.handleReset} className={classes.button}>
                    Reset
                    </Button>
                </Paper>
            )}
            
        </div>
        );
    }
}

VerticalLinearStepper.propTypes = {
classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
