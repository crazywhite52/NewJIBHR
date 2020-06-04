import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { TextInput, CheckBox, RadioButtonGroup, Calendar } from "grommet";
import Select from "react-select";
import ApiService from "../actions/api_hr.js";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SweetAlert from "react-bootstrap-sweetalert";
import { from } from "rxjs";
let newArr = Array([]);
const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};
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
      st_work: "",
      options: [],
      options2: [],
      pass: false
      // dateSelect:(new Date()).toISOString(),
    };

    this.onChangeDDl = this.onChangeDDl.bind(this);
    this.ApiCall = new ApiService();
    this.loaddataOg = this.loaddataOg.bind(this);
  }

  loaddataOg() {
    this.ApiCall.OgDepartment().then(res => {
      if (res.status === true) {
        this.setState({
          options: res.data
        });
      }
    });
    this.ApiCall.OgDepartment2().then(res => {
      if (res.status === true) {
        this.setState({
          options2: res.data
        });
      }
    });
  }

  onChangeDDl(value, { action, removedValue }) {
    switch (action) {
      case "remove-value":
        break;
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = this.state.options2.filter(v => v.isFixed);
        break;
    }
    value = orderOptions(value);
    if (value.length < 3) {
      this.setState({ DDjobname: value }, () => {
        this.getDataContentFull();
      });
    }
  }

  componentDidMount() {
    this.loaddataOg();
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
    if (this.state.OWchecked === "ว่างงาน (Unemployed)") {
      this.setState({ st_work: 0 }, () => {
        //console.log(this.state.st_work);
      });
    } else if (this.state.OWchecked === "ทำงานประจำ (Full Time)") {
      this.setState({ st_work: 1 }, () => {
        //console.log(this.state.st_work);
      });
    } else if (this.state.OWchecked === "Part Time") {
      this.setState({ st_work: 2 }, () => {
        //console.log(this.state.st_work);
      });
    } else if (this.state.OWchecked === "กำลังจบการศึกษา (I will be graduating)") {
      this.setState({ st_work: 3 }, () => {
        //console.log(this.state.st_work);
      });
    }

    newArr = {
      ddBranch: this.state.DDbranchname,
      DDjobname: this.state.DDjobname,
      PTchecked: this.state.PTchecked,
      money: this.state.re_money,
      OWchecked: this.state.st_work,
      dateSelect: this.state.dateSelect.substring(0, 10)
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
  hideAlert() {}
  render() {
    return (
      <div>
       
        <div>
          {" "}
          <hr />
          <h4>
            {this.state.pass === true ? (
              <CheckCircleIcon style={{ color: "green" }} />
            ) : (
              <InfoIcon style={{ color: "orange" }} />
            )}
            &nbsp;ลักษณะงานที่ต้องการ (Job Requirements)
          </h4>
        </div>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              แผนก/สาขา (Department/Branch)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <Select
              value={this.state.DDbranchname}
              placeholder="--เลือกแผนก/สาขาที่สมัคร---"
              size="xsmall"
              style={{ width: 300 }}
              options={this.state.options}
              onChange={event => this.getDataContent("DDbranchname", event)}
            />
          </Grid>
          <Grid item lg={3} xl={3} xs={3} sm={3} md={3} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ตำแหน่งงานที่ต้องการ 2 ตำแหน่ง (position applied for)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={3} xl={3} xs={3} sm={3} md={3} style={{ padding: 5 }}>
            <Select
              value={this.state.DDjobname}
              isMulti
              isClearable={this.state.DDjobname.some(v => !v.isFixed)}
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              options={this.state.options2}
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
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              เงินเดือนที่ต้องการ (Salary)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value={this.state.re_money}
              onChange={event =>
                this.setState({ re_money: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              สถานะภาพการทำงาน (Work Status)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={6} xl={6} xs={6} sm={6} md={6} style={{ padding: 5 }}>
            <RadioButtonGroup
              name="doc"
              options={[
                "ว่างงาน (Unemployed)",
                "ทำงานประจำ (Full Time)",
                "Part Time",
                "กำลังจบการศึกษา (I will be graduating)"
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
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              วันที่พร้อมเริ่มงาน (The day began with)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 5 }}>
            <Calendar
              size="small"
              locale="en-US"
              //date={(new Date()).toISOString()}
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
