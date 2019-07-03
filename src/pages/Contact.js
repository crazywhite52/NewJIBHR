import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { TextInput } from "grommet";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  
  handleOptionChange(e) {
    this.setState({ ...this.state, jib_know: e.target.value },()=>{
      console.log(this.state.jib_know);
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
          &nbsp;ข้อมูลบุคคลตที่ติดต่อ
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              บุคคลที่สามารถติดต่อได้เวลาเร่งด่วน
              
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ exi_name: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              ความสัมพันธ์
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ exi_relation: event.target.value }, () => {
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
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              เบอร์โทรศัพท์
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ exi_tel: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              เบอร์มือถือ
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ exi_phone: event.target.value }, () => {
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
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              ที่อยู่
              
            </h6>
          </Grid>
          <Grid item lg={6} xl={8} xs={8} sm={8} md={6} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ exi_address: event.target.value }, () => {
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
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 20 }}>
            <h6 style={{ textAlign: "left" }}>
              รู้จัก JIB ได้ยังไง
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 5 }}>
            <FormControlLabel
              checked={this.state.jib_know === "1"}
              onChange={this.handleOptionChange}
              value="1"
              control={<Radio color="primary" />}
              label="นิตยาสาร"
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
              label="ป้ายโฆษณา"
              labelPlacement="4"
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 20 }}>
            <h6 style={{ textAlign: "right" }}>
            อื่น ๆ
              
            </h6>
          </Grid>
          <Grid item lg={2} xl={4} xs={4} sm={4} md={4} style={{ padding: 10 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ jib_know_other: event.target.value }, () => {
                  //this.getDataContentFull();
                })
              }
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
