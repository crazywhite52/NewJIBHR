import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import { TextInput } from "grommet";

export default class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false
    };
    this.getDataContentFull = this.getDataContentFull.bind(this);
  }
  componentDidMount() {
    if (this.props.jobstep6.length === 0) {
    } else {
      this.setState(
        {
          training_year1: this.props.jobstep6[0].training_year,
          training_name1:this.props.jobstep6[0].training_name,
          training_course1:this.props.jobstep6[0].training_course,
          training_time1:this.props.jobstep6[0].training_time,
          training_year2: this.props.jobstep6[1].training_year,
          training_name2:this.props.jobstep6[1].training_name,
          training_course2:this.props.jobstep6[1].training_course,
          training_time2:this.props.jobstep6[1].training_time,
          training_year3: this.props.jobstep6[2].training_year,
          training_name3:this.props.jobstep6[2].training_name,
          training_course3:this.props.jobstep6[2].training_course,
          training_time3:this.props.jobstep6[2].training_time,
        },
        () => {
          //console.log(this.props.jobstep6[0].training_year);
          console.log("Edit Access.");
        }
      );
    }
  }

  getDataContentFull() {
    //console.log(this.state);

    let newArr1 = [];
    let newArr2 = [];
    let newArr3 = [];
    let newArr4 = [];
    let newArr5 = [];
    let newArr6 = [];
    let dataArr = [];

    newArr1 = {
      training_year: this.state.training_year1,
      training_name: this.state.training_name1,
      training_course: this.state.training_course1,
      training_time: this.state.training_time1
    };
    newArr2 = {
      training_year: this.state.training_year2,
      training_name: this.state.training_name2,
      training_course: this.state.training_course2,
      training_time: this.state.training_time2
    };
    newArr3 = {
      training_year: this.state.training_year3,
      training_name: this.state.training_name3,
      training_course: this.state.training_course3,
      training_time: this.state.training_time3
    };
    newArr4 = {
      training_year: this.state.training_year4,
      training_name: this.state.training_name4,
      training_course: this.state.training_course4,
      training_time: this.state.training_time4
    };
    newArr5 = {
      training_year: this.state.training_year5,
      training_name: this.state.training_name5,
      training_course: this.state.training_course5,
      training_time: this.state.training_time5
    };
    newArr6 = {
      training_year: this.state.training_year6,
      training_name: this.state.training_name6,
      training_course: this.state.training_course6,
      training_time: this.state.training_time6
    };

    dataArr = [newArr1, newArr2, newArr3, newArr4, newArr5, newArr6];
    //console.log(dataArr);

    if (
      this.state.training_year1 === undefined ||
      this.state.training_name1 === undefined ||
      this.state.training_course1 === undefined ||
      this.state.training_time1 === undefined
    ) {
    } else {
      this.setState({ pass: true }, () => {
        this.props.getUpdateContent(6, dataArr);
      });
    }
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
          &nbsp; ประวัติการฝึกอบรม/สัมมนา/ฝึกงาน / Job Training/Inspection/Apprenticeship
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{}}>
            <table border="0" width="95%">
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="100" style={{ paddingBottom: 10, paddingTop: 10 }}>
                  <div align="center">ปี พ.ศ./Year</div>
                </th>
                <th>
                  <div align="center">ชื่อหน่วยงาน/สถานที่ฝึกงาน /Institute</div>
                </th>
                <th>
                  <div align="center">หลักสูตร/กิจกรรม/ลักษณะงาน/Course</div>
                </th>
                <th width="150">
                  <div align="center">ระยะเวลา/Period</div>
                </th>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_year1}
                    onChange={event =>
                      this.setState(
                        {training_year1: event.target.value },
                        () => {
                          //console.log(this.state.training_year);
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_name1}
                    onChange={event =>
                      this.setState(
                        { training_name1: event.target.value },
                        () => {
                          //console.log(this.state.training_name);
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_course1}
                    onChange={event =>
                      this.setState(
                        { training_course1: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_time1}
                    onChange={event =>
                      this.setState(
                        { training_time1: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_year2}
                    onChange={event =>
                      this.setState(
                        { training_year2: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_name2}
                    onChange={event =>
                      this.setState(
                        { training_name2: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_course2}
                    onChange={event =>
                      this.setState(
                        { training_course2: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_time2}
                    onChange={event =>
                      this.setState(
                        { training_time2: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_year3}
                    onChange={event =>
                      this.setState(
                        { training_year3: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_name3}
                    onChange={event =>
                      this.setState(
                        { training_name3: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_course3}
                    onChange={event =>
                      this.setState(
                        { training_course3: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_time3}
                    onChange={event =>
                      this.setState(
                        { training_time3: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_year4}
                    onChange={event =>
                      this.setState(
                        { training_year4: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_name4}
                    onChange={event =>
                      this.setState(
                        { training_name4: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_course4}
                    onChange={event =>
                      this.setState(
                        { training_course4: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_time4}
                    onChange={event =>
                      this.setState(
                        { training_time4: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_year5}
                    onChange={event =>
                      this.setState(
                        { training_year5: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_name5}
                    onChange={event =>
                      this.setState(
                        { training_name5: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_course5}
                    onChange={event =>
                      this.setState(
                        { training_course5: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_time5}
                    onChange={event =>
                      this.setState(
                        { training_time5: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_year6}
                    onChange={event =>
                      this.setState(
                        { training_year6: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_name6}
                    onChange={event =>
                      this.setState(
                        { training_name6: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_course6}
                    onChange={event =>
                      this.setState(
                        { training_course6: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.training_time6}
                    onChange={event =>
                      this.setState(
                        { training_time6: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
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
