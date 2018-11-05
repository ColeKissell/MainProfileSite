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

    handleReset = () => {
        this.setState({
        activeStep: 0,
        completed: new Set(),
        skipped: new Set(),
        });
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

    skippedSteps() {
        return this.state.skipped.size;
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    };

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
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <div>{getStepContent(index)}</div>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                            className={classes.button}>
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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
