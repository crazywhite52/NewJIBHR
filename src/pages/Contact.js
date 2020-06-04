import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { TextInput } from "grommet";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.getDataContentFull = this.getDataContentFull.bind(this);
  }
  getDataContentFull() {
    //console.log(this.state);
    let newArr = [];
    newArr = {
      exi_address: this.state.exi_address===undefined?'':this.state.exi_address,
      exi_name: this.state.exi_name,
      exi_phone: this.state.exi_phone,
      exi_relation: this.state.exi_relation,
      exi_tel: this.state.exi_tel,
      facebook: this.state.facebook,
      jib_know: this.state.jib_know,
      jib_know_other:
        this.state.jib_know_other === undefined
          ? ""
          : this.state.jib_know_other,
      line: this.state.line
    };
    if (
      this.state.exi_name === undefined ||
      this.state.exi_relation === undefined ||
      this.state.exi_phone === undefined
    ) {
    } else {
      this.setState(
        {
          pass: true
        },
        () => {
          this.props.getUpdateContent(4, newArr);
        }
      );
    }
  }
  componentDidMount() {
    //console.log(this.state);
    if (this.props.jobstep4.length === 0) {
    } else {
      this.setState(
        {
          exi_address: this.props.jobstep4.exi_address,
          exi_name: this.props.jobstep4.exi_name,
          exi_phone: this.props.jobstep4.exi_phone,
          exi_relation: this.props.jobstep4.exi_relation,
          exi_tel: this.props.jobstep4.exi_tel,
          facebook: this.props.jobstep4.facebook,
          line: this.props.jobstep4.line,
          jib_know: this.props.jobstep4.jib_know,
          jib_know_other:this.props.jobstep4.jib_know_other
        },
        () => {
          console.log("Edit Access.");
        }
      );
    }
  }
  handleOptionChange(e) {
    this.setState({ ...this.state, jib_know: e.target.value }, () => {
      //console.log(this.state);
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
          &nbsp;ข้อมูลบุคคลที่ติดต่อ/In case of emergency please contact
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              บุคคลที่สามารถติดต่อได้เวลาเร่งด่วน/Name
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.exi_name}
              onChange={event =>
                this.setState({ exi_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ความสัมพันธ์/Relations</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.exi_relation}
              onChange={event =>
                this.setState({ exi_relation: event.target.value }, () => {
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
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>เบอร์โทรศัพท์/Contact Number</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.exi_tel}
              onChange={event =>
                this.setState({ exi_tel: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>เบอร์มือถือ/Mobile No</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.exi_phone}
              onChange={event =>
                this.setState({ exi_phone: event.target.value }, () => {
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
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ที่อยู่/Current Address</h6>
          </Grid>
          <Grid item lg={6} xl={8} xs={8} sm={8} md={6} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.exi_address}
              onChange={event =>
                this.setState({ exi_address: event.target.value }, () => {
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
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 20 }}>
            <h6 style={{ textAlign: "left", fontSize: '14px' }}>รู้จัก JIB ได้ยังไง/How do you know about JIB?</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <FormControlLabel
              checked={this.state.jib_know === "1"}
              onChange={this.handleOptionChange}
              value="1"
              control={<Radio color="primary" />}
              label="นิตยาสาร/Magazine"
              labelPlacement="1"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <FormControlLabel
              checked={this.state.jib_know === "2"}
              onChange={this.handleOptionChange}
              value="2"
              control={<Radio color="primary" />}
              label="Internet"
              labelPlacement="2"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <FormControlLabel
              checked={this.state.jib_know === "3"}
              onChange={this.handleOptionChange}
              value="3"
              control={<Radio color="primary" />}
              label="TV"
              labelPlacement="3"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <FormControlLabel
              checked={this.state.jib_know === "4"}
              onChange={this.handleOptionChange}
              value="4"
              control={<Radio color="primary" />}
              label="ป้ายโฆษณา/Banner"
              labelPlacement="4"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 20 }}>
            <h6 style={{ textAlign: "right" }}>อื่น ๆ</h6>
          </Grid>
          <Grid item lg={2} xl={4} xs={4} sm={4} md={4} style={{ padding: 10 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.jib_know_other}
              onChange={event =>
                this.setState({ jib_know_other: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
        </Grid>
        <hr />
        <h5>&nbsp;ข้อมูลติดต่อผู้สมัคร/Applicant Contact Information</h5>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>LINE ID:</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.line}
              onChange={event =>
                this.setState({ line: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>FACEBOOK:</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.facebook}
              onChange={event =>
                this.setState({ facebook: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
