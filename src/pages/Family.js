import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { TextInput } from "grommet";

export default class Family extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false
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
          pass: true
        },
        () => {
          console.log("Edit Access.");
        }
      );
    }
  }
  getDataContentFull() {
    
  }
  handleOptionChange(e) {
    this.setState({ ...this.state, with_status: e.target.value },()=>{
      console.log(this.state.with_status);
    });
  }
  handleOptionChange2(e) {
    this.setState({ ...this.state, home_status: e.target.value },()=>{
      console.log(this.state.home_status);
    });
  }
  handleOptionChange3(e) {
    this.setState({ ...this.state, family_status: e.target.value },()=>{
      console.log(this.state.family_status);
    });
  }
  handleOptionChange4(e) {
    this.setState({ ...this.state, father_life_status: e.target.value },()=>{
      console.log(this.state.father_life_status);
    });
  }
  handleOptionChange5(e) {
    this.setState({ ...this.state, mother_life_status: e.target.value },()=>{
      console.log(this.state.mother_life_status);
    });
  }
  handleOptionChange6(e) {
    this.setState({ ...this.state, mother_life_status: e.target.value },()=>{
      console.log(this.state.mother_life_status);
    });
  }
  render() {
    if (this.state.pass === true) {
      var passchk = <CheckCircleIcon style={{ color: "green" }} />;
    } else {
      var passchk = <InfoIcon style={{ color: "orange" }} />;
    }
    return (
      <div>
        <hr />
        <h4>
          {passchk}
          &nbsp;ข้อมูลครอบครัว
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left" }}>
              ปัจจุบัน อาศัยอยู่กับ
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "1"}
              onChange={this.handleOptionChange}
              value="1"
              control={<Radio color="primary" />}
              label="บิดา-มารดา"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "2"}
              onChange={this.handleOptionChange}
              value="2"
              control={<Radio color="primary" />}
              label="ญาติพี่น้อง"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "3"}
              onChange={this.handleOptionChange}
              value="3"
              control={<Radio color="primary" />}
              label="เพื่อน"
              labelPlacement="3"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "4"}
              onChange={this.handleOptionChange}
              value="4"
              control={<Radio color="primary" />}
              label="คู่สมรส"
              labelPlacement="4"
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.with_status === "5"}
              onChange={this.handleOptionChange}
              value="5"
              control={<Radio color="primary" />}
              label="อยู่คนเดียว"
              labelPlacement="5"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left" }}>
              สถานะที่อยุ่อาศัย
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.home_status === "1"}
              onChange={this.handleOptionChange2}
              value="1"
              control={<Radio color="primary" />}
              label="เจ้าของบ้าน"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.home_status === "2"}
              onChange={this.handleOptionChange2}
              value="2"
              control={<Radio color="primary" />}
              label="ผู้อาศัย"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.home_status === "3"}
              onChange={this.handleOptionChange2}
              value="3"
              control={<Radio color="primary" />}
              label="ผู้เช่า"
              labelPlacement="3"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left" }}>
              สถานะครอบครัว
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "1"}
              onChange={this.handleOptionChange3}
              value="1"
              control={<Radio color="primary" />}
              label="โสด"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "2"}
              onChange={this.handleOptionChange3}
              value="2"
              control={<Radio color="primary" />}
              label="สมรส"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "3"}
              onChange={this.handleOptionChange3}
              value="3"
              control={<Radio color="primary" />}
              label="หย่า"
              labelPlacement="3"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "4"}
              onChange={this.handleOptionChange3}
              value="4"
              control={<Radio color="primary" />}
              label="ม่าย"
              labelPlacement="4"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.family_status === "5"}
              onChange={this.handleOptionChange3}
              value="5"
              control={<Radio color="primary" />}
              label="แยกกันอยู่"
              labelPlacement="5"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "left" }}>
              สถานะทหาร
            </h6>
          </Grid>
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.soldier_status === "1"}
              onChange={this.handleOptionChange5}
              value="1"
              control={<Radio color="primary" />}
              label="ยังไม่ผ่านการเกณฑ์ทหาร"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.soldier_status === "2"}
              onChange={this.handleOptionChange5}
              value="2"
              control={<Radio color="primary" />}
              label="ผ่านการเกณฑ์ทหาร"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.soldier_status === "3"}
              onChange={this.handleOptionChange5}
              value="3"
              control={<Radio color="primary" />}
              label="ศึกษาวิชาทหาร"
              labelPlacement="3"
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
            <h6 style={{ textAlign: "right" }}>
              ชื่อคู่สมรส
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ mate_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              อาชีพ
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ mate_job: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              ที่ทำงาน
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ mate_jlocation: event.target.value }, () => {
                  //this.getDataContentFull();
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
            <h6 style={{ textAlign: "right" }}>
              จำนวนบุตร 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value="0"
              onChange={event =>
                this.setState({ child: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              กำลังศึกษา 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value="0"
              onChange={event =>
                this.setState({ child_study: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              จำนวนพี่น้อง 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value="0"
              onChange={event =>
                this.setState({ child_num: event.target.value }, () => {
                  //this.getDataContentFull();
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
            <h6 style={{ textAlign: "right" }}>
              ชื่อบิดา 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ father_name: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              อาชีพ 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ father_job: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              เบอร์โทร 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ father_tel: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              สถานะชีวิต 
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.father_life_status === "1"}
              onChange={this.handleOptionChange4}
              value="1"
              control={<Radio color="primary" />}
              label="มีชีวิต"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.father_life_status === "2"}
              onChange={this.handleOptionChange4}
              value="2"
              control={<Radio color="primary" />}
              label="ถึงแก่กรรม"
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
            <h6 style={{ textAlign: "right" }}>
              ชื่อมารดา 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ mother_name: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              อาชีพ 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ mother_job: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              เบอร์โทร 
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ mother_tel: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              สถานะชีวิต 
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.mother_life_status === "1"}
              onChange={this.handleOptionChange6}
              value="1"
              control={<Radio color="primary" />}
              label="มีชีวิต"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 0 }}>
            <FormControlLabel
              checked={this.state.mother_life_status === "2"}
              onChange={this.handleOptionChange6}
              value="2"
              control={<Radio color="primary" />}
              label="ถึงแก่กรรม"
              labelPlacement="2"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
