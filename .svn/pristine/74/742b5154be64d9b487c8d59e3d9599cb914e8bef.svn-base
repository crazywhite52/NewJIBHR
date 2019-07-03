import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { TextInput, CheckBox, RadioButtonGroup, Calendar } from "grommet";
import Select from "react-select";
var options = [
  { value: "75", label: "ออนไลน์" },
  { value: "1000", label: "สำนักงานใหญ่" },
  { value: "100", label: "สาขา อยุธยา" }
];
const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};

let newArr = Array();
export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DDbranchname: [],
      DDjobname: [],
      PTchecked: false,
      re_money: "",
      OWchecked: "",
      dateSelect: "",
      pass: false
      // dateSelect:(new Date()).toISOString(),
    };

    this.onChangeDDl = this.onChangeDDl.bind(this);
  }

  componentDidMount() {
    if (this.props.jobstep1.length === 0) {
    } else {
      this.setState(
        {
          DDbranchname: this.props.jobstep1.ddBranch,
          DDjobname: this.props.jobstep1.DDjobname,
          PTchecked: this.props.jobstep1.PTchecked,
          re_money: this.props.jobstep1.money,
          OWchecked: this.props.jobstep1.OWchecked,
          dateSelect: this.props.jobstep1.dateSelect,
          pass: true
        },
        () => {
          console.log("Edit Access.");
        }
      );
    }
  }

  getDataContent(varname, value) {
    this.setState({ [varname]: value }, () => {
      this.getDataContentFull();
    });
  }
  getDataContentFull() {
    newArr = {
      ddBranch: this.state.DDbranchname,
      DDjobname: this.state.DDjobname,
      PTchecked: this.state.PTchecked,
      money: this.state.re_money,
      OWchecked: this.state.OWchecked,
      dateSelect: this.state.dateSelect
    };
    if (
      this.state.DDbranchname.length === 0 ||
      this.state.DDjobname.length < 2 ||
      this.state.re_money === "" ||
      this.state.OWchecked === "" ||
      this.state.dateSelect === ""
    ) {
      this.setState({ pass: false }, () => {
        console.log("กรุณาป้อนข้อมูลให้ครบถ้วน");
      });
    } else {
      this.setState({ pass: true }, () => {
        this.props.getUpdateContent(1, newArr);
      });
    }
  }

  onChangeDDl(value, { action, removedValue }) {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = options.filter(v => v.isFixed);
        break;
    }
    value = orderOptions(value);
    if (value.length < 3) {
      this.setState({ DDjobname: value }, () => {
        this.getDataContentFull();
      });
    }
  }

  render() {
    if (this.state.pass === true) {
      var passchk = <CheckCircleIcon style={{ color: "green" }} />;
    } else {
      var passchk = <InfoIcon style={{ color: "orange" }} />;
    }
    return (
      <div>
        <div>
          {" "}
          <hr />
          <h4>
            {passchk}
            &nbsp;ลักษณะงานที่ต้องการ
          </h4>
        </div>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right" }}>
              แผนก/สาขา<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <Select
              value={this.state.DDbranchname}
              placeholder="--เลือกแผนก/สาขาที่สมัคร---"
              size="xsmall"
              style={{ width: 300 }}
              options={options}
              onChange={event => this.getDataContent("DDbranchname", event)}
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right" }}>
              ตำแหน่งงานที่ต้องการ 2 ตำแหน่ง<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={4} xl={4} xs={4} sm={4} md={4} style={{ padding: 5 }}>
            <Select
              value={this.state.DDjobname}
              isMulti
              isClearable={this.state.DDjobname.some(v => !v.isFixed)}
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              options={options}
              onChange={this.onChangeDDl}
            />
          </Grid>

          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <CheckBox
              checked={this.state.PTchecked}
              label="PartTime?"
              onChange={event =>
                this.setState({ PTchecked: event.target.checked }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right" }}>
              เงินเดือนที่ต้องการ<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.re_money}
              onChange={event =>
                this.setState({ re_money: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right" }}>
              สถานะภาพการทำงาน(ปัจจุบัน)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={6} xl={6} xs={6} sm={6} md={6} style={{ padding: 5 }}>
            <RadioButtonGroup
              name="doc"
              options={[
                "ว่างงาน",
                "ทำงานประจำ",
                "Part Time",
                "กำลังจบการศึกษา"
              ]}
              value={this.state.OWchecked}
              onChange={event =>
                this.setState({ OWchecked: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right" }}>
              วันที่คิดว่าพร้อมเริ่มงาน<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <Calendar
              size="small"
              locale="en-US"
              margin="xsmall"
              date={this.state.dateSelect}
              onSelect={date => {
                this.setState({ dateSelect: date }, () => {
                  this.getDataContentFull();
                });
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
