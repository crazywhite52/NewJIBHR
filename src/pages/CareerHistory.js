import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { TextInput } from "grommet";
export default class CareerHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false
    };
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
          &nbsp; การทำงาน/ประสบการณ์
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{}}>
            <table border="0" width="95%">
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th
                  rowSpan="2"
                  width=""
                  style={{ paddingBottom: 10, paddingTop: 10 }}
                >
                  <div align="center">ชื่อสถานประกอบการ</div>
                </th>
                <th colSpan="2">
                  <div align="center">ระยะเวลาเดือน/พ.ศ.</div>
                </th>
                <th rowSpan="2">
                  <div align="center">เงินเดือน</div>
                </th>
                <th rowSpan="2" width="">
                  <div align="center">ตำแหน่ง</div>
                </th>
                <th rowSpan="2" width="">
                  <div align="center">สาเหตุที่ออก</div>
                </th>
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="100">
                  <div align="center">จาก</div>
                </th>
                <th width="100">
                  <div align="center">ถึง</div>
                </th>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_location: event.target.value }, () => {
                        console.log(this.state.work_location);
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_from: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_to: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_salary: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_job: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_out: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_location2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_from2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_to2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_salary2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_job2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_out2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_location3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_from3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_to3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_salary3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_job3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_out3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_location4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_from4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_to4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_salary4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_job4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_out4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_location5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_from5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_to5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_salary5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_job5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_out5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_location6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_from6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_to6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_salary6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_job6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_out6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>

              
            </table>
          </Grid>
        </Grid>
      </div>
    );
  }
}
