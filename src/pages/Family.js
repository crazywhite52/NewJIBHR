import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { TextInput } from "grommet";

export default class Family extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false,
      child: 0,
      child_study: 0,
      child_num: 0
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleOptionChange2 = this.handleOptionChange2.bind(this);
    this.handleOptionChange3 = this.handleOptionChange3.bind(this);
    this.handleOptionChange4 = this.handleOptionChange4.bind(this);
    this.handleOptionChange5 = this.handleOptionChange5.bind(this);
    this.handleOptionChange6 = this.handleOptionChange6.bind(this);
  }
  componentDidMount() {
    if (this.props.jobstep3.length === 0) {
    } else {
      this.setState(
        {
          pass: true,
          home_status: this.props.jobstep3.home_status,
          child: this.props.jobstep3.child,
          child_num: this.props.jobstep3.child_num,
          child_study: this.props.jobstep3.child_study,
          family_status: this.props.jobstep3.family_status,
          father_job: this.props.jobstep3.father_job,
          father_life_status: this.props.jobstep3.father_life_status,
          father_name: this.props.jobstep3.father_name,
          father_tel: this.props.jobstep3.father_tel,
          mate_jlocation: this.props.jobstep3.mate_jlocation,
          mate_job: this.props.jobstep3.mate_job,
          mate_name: this.props.jobstep3.mate_name,
          mother_job: this.props.jobstep3.mother_job,
          mother_life_status: this.props.jobstep3.mother_life_status,
          mother_name: this.props.jobstep3.mother_name,
          mother_tel: this.props.jobstep3.mother_tel,
          soldier_status: this.props.jobstep3.soldier_status,
          with_status: this.props.jobstep3.with_status
        },
        () => {
          console.log(this.state);
          console.log("Edit Access.");
        }
      );
    }
  }
  getDataContentFull() {
    let newArr = [];
    //console.log(this.state);
    newArr = {
      child: this.state.child,
      child_num: this.state.child_num,
      child_study: this.state.child_study,
      family_status: this.state.family_status,
      father_job: this.state.father_job,
      father_life_status: this.state.father_life_status,
      father_name: this.state.father_name,
      father_tel: this.state.father_tel===undefined?'':this.state.father_tel,
      home_status: this.state.home_status,
      mate_jlocation: this.state.mate_jlocation===undefined?'':this.state.mate_jlocation,
      mate_job: this.state.mate_job===undefined?'':this.state.mate_job,
      mate_name: this.state.mate_name===undefined?'':this.state.mate_name,
      mother_job: this.state.mother_job,
      mother_life_status: this.state.mother_life_status,
      mother_name: this.state.mother_name,
      mother_tel: this.state.mother_tel===undefined?'':this.state.mother_tel,
      soldier_status: this.state.soldier_status,
      with_status: this.state.with_status
    };
    if (
      this.state.with_status === undefined ||
      this.state.home_status === undefined ||
      this.state.family_status === undefined ||
      this.state.soldier_status === undefined ||
      this.state.mother_life_status === undefined
    ) {
    } else {
      this.setState({ pass: true }, () => {
        this.props.getUpdateContent(3, newArr);
      });
    }
  }
  handleOptionChange(e) {
    this.setState({ ...this.state, with_status: e.target.value }, () => {
      //console.log(this.state.with_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange2(e) {
    this.setState({ ...this.state, home_status: e.target.value }, () => {
      //console.log(this.state.home_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange3(e) {
    this.setState({ ...this.state, family_status: e.target.value }, () => {
      //console.log(this.state.family_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange4(e) {
    this.setState({ ...this.state, father_life_status: e.target.value }, () => {
      //console.log(this.state.father_life_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange5(e) {
    this.setState({ ...this.state, soldier_status: e.target.value }, () => {
      //console.log(this.state.soldier_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange6(e) {
    this.setState({ ...this.state, mother_life_status: e.target.value }, () => {
      //console.log(this.state.mother_life_status);
      this.getDataContentFull();
    });
  }
  render() {
    return (
      <div>
        <hr />
        <h4>
          {this.state.pass === true ? (
            <CheckCircleIcon style={{ color: "green" }} />
          ) : (
            <InfoIcon style={{ color: "orange" }} />
          )}
          &nbsp;ข้อมูลครอบครัว/Family information
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left", fontSize: '14px' }}>ปัจจุบัน อาศัยอยู่กับ/Currently live with</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "1"}
              onChange={this.handleOptionChange}
              value="1"
              control={<Radio color="primary" />}
              label="บิดา-มารดา/Father-mother"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "2"}
              onChange={this.handleOptionChange}
              value="2"
              control={<Radio color="primary" />}
              label="ญาติพี่น้อง/My relatives"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "3"}
              onChange={this.handleOptionChange}
              value="3"
              control={<Radio color="primary" />}
              label="เพื่อน/Friends"
              labelPlacement="3"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "4"}
              onChange={this.handleOptionChange}
              value="4"
              control={<Radio color="primary" />}
              label="คู่สมรส/Spouse"
              labelPlacement="4"
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "5"}
              onChange={this.handleOptionChange}
              value="5"
              control={<Radio color="primary" />}
              label="อยู่คนเดียว/Alone"
              labelPlacement="5"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left" }}>สถานะที่อยุ่อาศัย/Residence status</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.home_status === "1"}
              onChange={this.handleOptionChange2}
              value="1"
              control={<Radio color="primary" />}
              label="เจ้าของบ้าน/House-Owner"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.home_status === "2"}
              onChange={this.handleOptionChange2}
              value="2"
              control={<Radio color="primary" />}
              label="ผู้อาศัย/Resident"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.home_status === "3"}
              onChange={this.handleOptionChange2}
              value="3"
              control={<Radio color="primary" />}
              label="ผู้เช่า/Tenant"
              labelPlacement="3"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left" }}>สถานะครอบครัว/Family status</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "1"}
              onChange={this.handleOptionChange3}
              value="1"
              control={<Radio color="primary" />}
              label="โสด/Single"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "2"}
              onChange={this.handleOptionChange3}
              value="2"
              control={<Radio color="primary" />}
              label="สมรส/Marry"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "3"}
              onChange={this.handleOptionChange3}
              value="3"
              control={<Radio color="primary" />}
              label="หย่า/Divorce"
              labelPlacement="3"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "4"}
              onChange={this.handleOptionChange3}
              value="4"
              control={<Radio color="primary" />}
              label="ม่าย/Widow"
              labelPlacement="4"
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "5"}
              onChange={this.handleOptionChange3}
              value="5"
              control={<Radio color="primary" />}
              label="แยกกันอยู่/Separated"
              labelPlacement="5"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left" }}>สถานะทหาร/Military status</h6>
          </Grid>
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.soldier_status === "1"}
              onChange={this.handleOptionChange5}
              value="1"
              control={<Radio color="primary" />}
              label="ยังไม่ผ่านการเกณฑ์ทหาร/by being a student"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.soldier_status === "2"}
              onChange={this.handleOptionChange5}
              value="2"
              control={<Radio color="primary" />}
              label="ผ่านการเกณฑ์ทหาร/Completed"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.soldier_status === "3"}
              onChange={this.handleOptionChange5}
              value="3"
              control={<Radio color="primary" />}
              label="ศึกษาวิชาทหาร/Exempted"
              labelPlacement="3"
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.soldier_status === "4"}
              onChange={this.handleOptionChange5}
              value="4"
              control={<Radio color="primary" />}
              label="ได้รับการยกเว้น/Exemption"
              labelPlacement="4"
            />
          </Grid>
        </Grid>
        <hr />
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ชื่อคู่สมรส/Spouse's Name</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.mate_name}
              onChange={event =>
                this.setState({ mate_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>อาชีพ/Career</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.mate_job}
              onChange={event =>
                this.setState({ mate_job: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ที่ทำงาน/Workplace</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.mate_jlocation}
              onChange={event =>
                this.setState({ mate_jlocation: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>จำนวนบุตร/Number of children</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value={this.state.child}
              onChange={event =>
                this.setState({ child: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>กำลังศึกษา/Currently studying</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value={this.state.child_study}
              onChange={event =>
                this.setState({ child_study: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>จำนวนพี่น้อง/Number of siblings</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value={this.state.child_num}
              onChange={event =>
                this.setState({ child_num: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ชื่อบิดา/Father</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.father_name}
              onChange={event =>
                this.setState({ father_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>อาชีพ/Career</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.father_job}
              onChange={event =>
                this.setState({ father_job: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>เบอร์โทร/Contact Number</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.father_tel}
              onChange={event =>
                this.setState({ father_tel: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>สถานะชีวิต/Life status</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.father_life_status === "1"}
              onChange={this.handleOptionChange4}
              value="1"
              control={<Radio color="primary" />}
              label="มีชีวิต/be alive"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.father_life_status === "2"}
              onChange={this.handleOptionChange4}
              value="2"
              control={<Radio color="primary" />}
              label="ถึงแก่กรรม/Pass away"
              labelPlacement="2"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ชื่อมารดา/Mother</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.mother_name}
              onChange={event =>
                this.setState({ mother_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>อาชีพ/Career</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.mother_job}
              onChange={event =>
                this.setState({ mother_job: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>เบอร์โทร/Contact Number</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.mother_tel}
              onChange={event =>
                this.setState({ mother_tel: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>สถานะชีวิต/Life status</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.mother_life_status === "1"}
              onChange={this.handleOptionChange6}
              value="1"
              control={<Radio color="primary" />}
              label="มีชีวิต/be alive"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.mother_life_status === "2"}
              onChange={this.handleOptionChange6}
              value="2"
              control={<Radio color="primary" />}
              label="ถึงแก่กรรม/Pass away"
              labelPlacement="2"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
