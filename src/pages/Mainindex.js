import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Breadcrumb } from "bootstrap-4-react";

// PAGE
import Job from "./job";
import Profile from "./profile";
import Family from "./Family";
import Contact from "./Contact";
import Education from "./Education";
import Training from "./Training";
import CareerHistory from "./CareerHistory";
import Skill from "./Skill";

function getSteps() {
  return [
    "Job Description",
    "Profile",
    "Family",
    "Contact",
    "Education",
    "Training",
    "Career History",
    "Skill"
  ];
}
class Mainindex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      jobstep1: [],
      jobstep2: [],
      jobstep3: [],
      btnStatus: true
    };
    this.getStepContent = this.getStepContent.bind(this);
    this.getUpdateContent = this.getUpdateContent.bind(this);
  }
  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Job
            getUpdateContent={this.getUpdateContent}
            jobstep1={this.state.jobstep1}
          />
        );
      case 1:
        return (
          <Profile
            getUpdateContent={this.getUpdateContent}
            jobstep2={this.state.jobstep2}
          />
        );
      case 2:
        return (
          <Family
            getUpdateContent={this.getUpdateContent}
            jobstep3={this.state.jobstep3}
          />
        );
      case 3:
        return <Contact />;
      case 4:
        return <Education />;
      case 5:
        return <Training />;
      case 6:
        return <CareerHistory />;
      case 7:
        return <Skill />;
      default:
        return "Unknown step";
    }
  }
  handleNext = () => {
    
    if (this.state.activeStep === 0) {
      console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 1) {
      console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
  };

  handleBack = () => {
    
    if (this.state.activeStep === 0) {
      console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 1) {
      console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 2) {
      console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  getUpdateContent = (step, value) => {
    if (step === 1) {
      this.setState({ jobstep1: value, btnStatus: false }, () => {
        console.log(this.state.jobstep1);
        console.log(this.state.btnStatus);
      });
    }
    if (step === 2) {
      this.setState({ jobstep2: value, btnStatus: false }, () => {
        console.log(this.state.jobstep2);
        console.log(this.state.btnStatus);
      });
    }
    if (step === 3) {
      this.setState({ jobstep3: value, btnStatus: false }, () => {
        console.log(this.state.jobstep3);
        console.log(this.state.btnStatus);
      });
    }
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );
    return (
      <div>
        <Grid
          spacing={24}
          style={{ marginTop: 0, marginLeft: 0, marginRight: 0, flexGrow: 1 }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
            <Grid
              container
              style={{
                backgroundColor: "#3f51b5",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 15,
                paddingRight: 15
              }}
            >
              <Grid item lg={8} xl={8} xs={8} sm={8} md={8}>
                <div style={{ fontFamily: "Patua One", color: "#8089a0" }}>
                  <k
                    style={{
                      fontSize: 30,
                      color: "#fff",
                      fontFamily: "Prompt"
                    }}
                  >
                    <strong>แบบฟอร์มสมัครงาน</strong>
                  </k>
                  {"  "}
                  <k
                    style={{
                      fontSize: 18,
                      marginTop: 10,
                      color: "#F2591D"
                      // fontFamily: "Prompt"
                    }}
                  >
                    >> jib-Recruitment Online
                  </k>
                </div>
              </Grid>
              <Grid
                item
                lg={4}
                xl={4}
                xs={4}
                sm={4}
                md={4}
                style={{ textAlign: "right" }}
              >
                <div
                  style={{
                    fontFamily: "Patua One",
                    color: "#8089a0",
                    marginTop: 10
                  }}
                >
                  {/* <div style={{ marginTop: 10 }}> */}
                  <Button
                    disabled={this.state.activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                    style={{ fontFamily: "Patua One", color: "#fff" }}
                  >
                    กลับ
                  </Button>
                  <Button
                    disabled={this.state.btnStatus}
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                    color="secondary"
                    style={{ fontFamily: "Patua One", color: "#fff" }}
                  >
                    {this.state.activeStep === steps.length - 1
                      ? "บันทึกข้อมูล"
                      : "ถัดไป"}
                  </Button>
                </div>
                {/* </div> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
            <Card>
              {/* <Clock className="text-right" style={{marginTop:5}} type="digital" /> */}
              <CardContent>
                <Stepper
                  activeStep={this.state.activeStep}
                  connector={connector}
                >
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {this.state.activeStep === steps.length ? (
                    <div>
                      <Typography
                        className={classes.instructions}
                        style={{ fontFamily: "Prompt", color: "green" }}
                      >
                        All steps completed - you&apos;re finished
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography
                        className={classes.instructions}
                        style={{ fontFamily: "Prompt" }}
                      >
                        {this.getStepContent(this.state.activeStep)}
                      </Typography>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100]
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  }
});

Mainindex.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Mainindex);
