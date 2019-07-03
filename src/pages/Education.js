import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { TextInput } from "grommet";
export default class Education extends Component {
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
          &nbsp;ประวัติการศึกษา
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={11} xl={11} xs={11} sm={11} md={11} style={{}}>
            <table border="0" width="100%">
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th rowSpan="2">
                  <div align="center">ระดับการศึกษา</div>
                </th>
                <th rowSpan="2">
                  <div align="center">สถาบันการศึกษา</div>
                </th>
                <th rowSpan="2">
                  <div align="center">สาขาวิชา</div>
                </th>
                <th colspan="2">
                  <div align="center">ปีการศึกษา</div>
                </th>
                <th width="100" rowSpan="2">
                  <div align="center">เกรดเฉลี่ย</div>
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
                <td>มัธยมศึกษาตอนต้น</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_sc_name: event.target.value }, () => {
                        console.log(this.state.low_sc_name);
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_sc_major: event.target.value }, () => {
                        console.log(this.state.low_sc_major);
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_sc_form: event.target.value }, () => {
                        console.log(this.state.low_sc_form);
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_sc_to: event.target.value }, () => {
                        console.log(this.state.low_sc_to);
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_sc_grade: event.target.value }, () => {
                        console.log(this.state.low_sc_grade);
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>มัธยมศึกษาตอนปลาย</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_sc_name: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_sc_major: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_sc_from: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_sc_to: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_sc_grade: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปวช.</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_st_name: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_st_major: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_st_from: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_st_to: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ low_st_grade: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปวส./อนุปริญญา</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_st_name: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_st_major: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_st_from: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_st_to: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ high_st_grade: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปริญญาตรี</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ bachelor_name: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ bachelor_major: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ bachelor_from: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ bachelor_to: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ bachelor_grade: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปริญญาโท</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ master_name: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ master_major: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ master_from: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ master_to: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ master_grade: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>อื่น ๆ</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ other_name: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ other_major: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ other_from: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ other_to: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ other_grade: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </th>
              </tr>
            </table>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={2} xs={2} sm={2} md={2} style={{ padding: 0 }}>
            <h6 style={{ textAlign: "left" }}>
            กิจกรรม/กีฬา/รางวัล ระหว่างการศึกษา
            </h6>
          </Grid>
          <Grid item lg={4} xl={9} xs={9} sm={9} md={9} style={{ marginLeft: 75,padding: 0 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              onChange={event =>
                this.setState({ activity: event.target.value }, () => {
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
