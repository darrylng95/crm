import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

// Material Ui stufsf
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { If } from 'rc-if-else';

import AddUserForm from '../components/AddUserForm';
import ConfirmAddUser from '../components/ConfirmAddUser';

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  stepIcon: {
    color: 'pink'
  }
});

function getSteps() {
  return ['Add User', 'Confirmation', 'Success!'];
}
class AddUser extends Component {
  state = {
    activeStep: 0,
    user: {
      firstname: '',
      lastname: '',
      role: ''
    }
  };

  getStepContent(step, values) {
    switch (step) {
      case 0:
        return (
          <AddUserForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <ConfirmAddUser
            nextStep={this.nextStep}
            handleNext={this.handleNext}
            values={values}
          />
        );
      case 2:
        return (
          <div>
            <p>Success!</p>
            setTimeout(()=> {<Redirect to="/ViewCustomers" />},1000)
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const { firstname, lastname, role } = this.state;
    const values = { firstname, lastname, role }; //to pass to each component

    return (
      <div className={classes.root} py={2} px={0}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            return (
              <Step key={label} {...props}>
                <StepLabel
                  StepIconProps={{
                    classes: { root: classes.stepIcon }
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {this.getStepContent(activeStep, values)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <If
                  condition={
                    (activeStep === 0 &&
                      this.state.firstname !== undefined &&
                      this.state.lastname !== undefined &&
                      this.state.role !== undefined &&
                      this.state.role !== '(Select a Job Title)') ||
                    activeStep === 2
                  }
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </If>
                {console.log('position', this.state.position)}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

AddUser.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(AddUser);
