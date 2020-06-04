import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes, { array } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LoadingScreen from "react-loading-screen";
import SweetAlert from "react-bootstrap-sweetalert";
import Logo from "../image_main/jib-logo-white2.png";
// PAGE
import Job from "./job";
import Profile from "./profile";
import Family from "./Family";
import Contact from "./Contact";
import Education from "./Education";
import Training from "./Training";
import CareerHistory from "./CareerHistory";
import Skill from "./Skill";

import ApiService from "../actions/api_hr.js";
import load from "../image_main/loading.gif";

let dataArr1 = Array([]);
let dataArr2 = Array([]);
let dataArr3 = Array([]);
let result = Array([]);
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
      jobstep4: [],
      jobstep5: [],
      jobstep6: [],
      jobstep7: [],
      jobstep8: [],
      btnStatus: true,
      isLoading: false,
      saveto: false
    };
    this.getStepContent = this.getStepContent.bind(this);
    this.getUpdateContent = this.getUpdateContent.bind(this);
    this.ApiCall = new ApiService();
  }
  componentDidMount() {
    //console.log(this.state);
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
        return (
          <Contact
            getUpdateContent={this.getUpdateContent}
            jobstep4={this.state.jobstep4}
          />
        );
      case 4:
        return (
          <Education
            getUpdateContent={this.getUpdateContent}
            jobstep5={this.state.jobstep5}
          />
        );
      case 5:
        return (
          <Training
            getUpdateContent={this.getUpdateContent}
            jobstep6={this.state.jobstep6}
          />
        );
      case 6:
        return (
          <CareerHistory
            getUpdateContent={this.getUpdateContent}
            jobstep7={this.state.jobstep7}
          />
        );
      case 7:
        return (
          <Skill
            getUpdateContent={this.getUpdateContent}
            jobstep8={this.state.jobstep8}
          />
        );
      default:
        return "Unknown step";
    }
  }
  Save = () => {
    dataArr1 = {
      branch: this.state.jobstep1.ddBranch.value,
      job_first: this.state.jobstep1.DDjobname[0].label,
      job_second: this.state.jobstep1.DDjobname[1].label,
      salary: this.state.jobstep1.money,
      start_date: this.state.jobstep1.dateSelect,
      work_status: this.state.jobstep1.OWchecked, // 0,1
      parttime: this.state.jobstep1.PTchecked === "false" ? "0" : "1"
    };

    dataArr2 = {
      intro_name: this.state.jobstep2.intro_name.value,
      first_name: this.state.jobstep2.first_name,
      last_name: this.state.jobstep2.last_name,
      nick_name: this.state.jobstep2.nick_name,
      first_name_eng: this.state.jobstep2.first_name_eng,
      last_name_eng: this.state.jobstep2.last_name_eng,
      nick_name_eng: this.state.jobstep2.nick_name_eng,
      birthday: this.state.jobstep2.birthday,
      person_id: this.state.jobstep2.person_id,
      sex_status: this.state.jobstep2.sex_status.value,
      age: this.state.jobstep2.age,
      group_blood: this.state.jobstep2.group_blood.value,
      height: this.state.jobstep2.height,
      weight: this.state.jobstep2.weight,
      nationlity: this.state.jobstep2.nationlity,
      race: this.state.jobstep2.race,
      religion: this.state.jobstep2.religion,
      home_land: this.state.jobstep2.home_land,
      cur_no: this.state.jobstep2.cur_no,
      cur_group: this.state.jobstep2.cur_group,
      cur_village: this.state.jobstep2.cur_village,
      cur_road: this.state.jobstep2.cur_road,
      cur_zone: this.state.jobstep2.cur_zone,
      cur_area: this.state.jobstep2.cur_area,
      cur_city: this.state.jobstep2.cur_city,
      cur_post: this.state.jobstep2.cur_post,
      cur_tel: this.state.jobstep2.cur_tel,
      cur_phone: this.state.jobstep2.cur_phone,
      cur_fax: this.state.jobstep2.cur_fax,
      cur_email: this.state.jobstep2.cur_email,
      add_no: this.state.jobstep2.add_no,
      add_group: this.state.jobstep2.add_group,
      add_village: this.state.jobstep2.add_village,
      add_road: this.state.jobstep2.add_road,
      add_zone: this.state.jobstep2.add_zone,
      add_area: this.state.jobstep2.add_area,
      add_city: this.state.jobstep2.add_city,
      add_post: this.state.jobstep2.add_post,
      add_tel: this.state.jobstep2.add_tel,
      add_phone: this.state.jobstep2.add_phone,
      add_fax: this.state.jobstep2.add_fax
    };

    result = {
      stp1: dataArr1,
      stp2: dataArr2,
      stp3: this.state.jobstep3,
      stp4: this.state.jobstep4,
      stp5: this.state.jobstep5,
      stp6: this.state.jobstep6,
      stp7: this.state.jobstep7,
      stp8: this.state.jobstep8
    };
    //console.log(JSON.stringify(result));
    //console.log(result);
    this.ApiCall.addregister(result).then(res => {
      console.log("----------SAVE-----------");
      console.log(res);
      if (res.status === true) {
        this.setState({ isLoading: true });
        this.timeout = setTimeout(() => {
          this.setState({ isLoading: false, saveto: true });

          //window.location.replace("/");
        }, 4000);
        //window.location.replace("/");
      }
    });
  };

  handleNext = () => {
    if (this.state.activeStep === 0) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 1) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 2) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 3) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 4) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 5) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 6) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
    if (this.state.activeStep === 7) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        btnStatus: true
      }));
    }
  };

  handleBack = () => {
    if (this.state.activeStep === 0) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 1) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 2) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 3) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 4) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 5) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 6) {
      //console.log(this.state.activeStep);
      this.setState(state => ({
        activeStep: state.activeStep - 1,
        btnStatus: false
      }));
    }
    if (this.state.activeStep === 7) {
      //console.log(this.state.activeStep);
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
    //console.log(JSON.stringify(step));
    if (step === 1) {
      this.setState({ jobstep1: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep1);
        //console.log(this.state.btnStatus);
      });
    }
    if (step === 2) {
      this.setState({ jobstep2: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep2);
        //console.log(this.state.btnStatus);
      });
    }
    if (step === 3) {
      this.setState({ jobstep3: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep3);
        //console.log(this.state.btnStatus);
      });
    }
    if (step === 4) {
      this.setState({ jobstep4: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep4);
        //console.log(this.state.btnStatus);
      });
    }
    if (step === 5) {
      this.setState({ jobstep5: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep5);
        //console.log(this.state.btnStatus);
      });
    }
    if (step === 6) {
      this.setState({ jobstep6: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep6);
        //console.log(this.state.btnStatus);
      });
    }
    if (step === 7) {
      this.setState({ jobstep7: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep7);
        //console.log(this.state.btnStatus);
      });
    }
    if (step === 8) {
      this.setState({ jobstep8: value, btnStatus: false }, () => {
        //console.log(this.state.jobstep8);
        //console.log(this.state.btnStatus);
      });
    }
  };

  render() {
    const { isLoading,saveto } = this.state;
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
    if (isLoading) {
      return (
        <div>
          <Grid
            spacing={24}
            style={{ marginTop: 0, marginLeft: 0, marginRight: 0, flexGrow: 1 }}
          >
            <LoadingScreen
              loading={true}
              bgColor="#f1f1f1"
              spinnerColor="#9ee5f8"
              textColor="#676767"
              logoSrc={load}
              text="--กำลังบันทึกข้อมูล--"
            >
              <div>Loadable content</div>
            </LoadingScreen>
          </Grid>
        </div>
      );
    }
    if (saveto) {
      return (
        <div>
          <SweetAlert
            show={this.state.show}
            success
            title="บึนทึกข้อมูลเรียบร้อยแล้ว!"
            onConfirm={() => {
              console.log("confirm");
              window.location.replace("/");
              this.setState({ show: false,saveto:false });
            }}
          />
        </div>
      );
    }
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
                <img src={Logo} alt="logo" width={50} ></img>
                  <k
                    style={{
                      fontSize: 27,
                      color: "#fff",
                      fontFamily: "Prompt"
                    }}
                  >
                    <strong> สมัครงาน </strong>
                    
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
                   {' '} >> jib-Recruitment
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
                  {this.state.activeStep === 8 ? (
                    <Button
                      //disabled={this.state.btnStatus}
                      variant="contained"
                      color="secondary"
                      onClick={this.Save}
                      className={classes.button}
                      style={{ fontFamily: "Patua One", color: "#fff" }}
                    >
                      บันทึก
                    </Button>
                  ) : (
                    <Button
                      disabled={this.state.btnStatus}
                      variant="contained"
                      color="secondary"
                      onClick={this.handleNext}
                      className={classes.button}
                      style={{ fontFamily: "Patua One", color: "#fff" }}
                    >
                      ถัดไป
                    </Button>
                  )}
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
