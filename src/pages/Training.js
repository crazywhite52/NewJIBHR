import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { TextInput } from "grommet";

export default class Training extends Component {
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
          &nbsp; ประวัติการฝึกอบรม/สัมมนา/ฝึกงาน
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{}}>
            <table border="0" width="95%">
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="100" style={{paddingBottom:10,paddingTop:10}}><div align="center">ปี พ.ศ.</div></th>
                <th><div align="center">ชื่อหน่วยงาน/สถานที่ฝึกงาน</div></th>
                <th><div align="center">หลักสูตร/กิจกรรม/ลักษณะงาน</div></th>
                <th width="150"><div align="center">ระยะเวลา</div></th>
              </tr>
              <tr>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_year: event.target.value }, () => {
                        console.log(this.state.training_year);
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_name: event.target.value }, () => {
                        console.log(this.state.training_name);
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_course: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_time: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
              </tr>
              <tr>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_year2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_name2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_course2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_time2: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
              </tr>
              <tr>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_year3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_name3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_course3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_time3: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
              </tr>
              <tr>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_year4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_name4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_course4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_time4: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
              </tr>
              <tr>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_year5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_name5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_course5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_time5: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
              </tr>
              <tr>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_year6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_name6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_course6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
                <td><TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ training_time6: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  /></td>
              </tr>
            </table>
          </Grid>
        </Grid>
      </div>
    );
  }
}
