import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import { TextInput } from "grommet";
export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false,
      activity: "",
      bachelor_from: "",
      bachelor_grade: "",
      bachelor_major: "",
      bachelor_name: "",
      bachelor_to: "",
      high_sc_from: "",
      high_sc_grade: "",
      high_sc_major: "",
      high_sc_name: "",
      high_sc_to: "",
      high_st_from: "",
      high_st_grade: "",
      high_st_major: "",
      high_st_name: "",
      high_st_to: "",
      low_sc_form: "",
      low_sc_grade: "",
      low_sc_major: "",
      low_sc_name: "",
      low_sc_to: "",
      low_st_from: "",
      low_st_grade: "",
      low_st_major: "",
      low_st_name: "",
      low_st_to: "",
      master_from: "",
      master_grade: "",
      master_major: "",
      master_name: "",
      master_to: "",
      other_from: "",
      other_grade: "",
      other_major: "",
      other_name: "",
      other_to: ""
    };
    this.getDataContentFull = this.getDataContentFull.bind(this);
  }
  componentDidMount() {
    //console.log(this.state);
    if (this.props.jobstep5.length === 0) {
    } else {
      this.setState(
        {
          activity: this.props.jobstep5.activity,
          bachelor_from: this.props.jobstep5.bachelor_from,
          bachelor_grade: this.props.jobstep5.bachelor_grade,
          bachelor_major: this.props.jobstep5.bachelor_major,
          bachelor_name: this.props.jobstep5.bachelor_name,
          bachelor_to: this.props.jobstep5.bachelor_to,
          high_sc_from: this.props.jobstep5.high_sc_from,
          high_sc_grade: this.props.jobstep5.high_sc_grade,
          high_sc_major: this.props.jobstep5.high_sc_major,
          high_sc_name: this.props.jobstep5.high_sc_name,
          high_sc_to: this.props.jobstep5.high_sc_to,
          high_st_from: this.props.jobstep5.high_st_from,
          high_st_grade: this.props.jobstep5.high_st_grade,
          high_st_major: this.props.jobstep5.high_st_major,
          high_st_name: this.props.jobstep5.high_st_name,
          high_st_to: this.props.jobstep5.high_st_to,
          low_sc_form: this.props.jobstep5.low_sc_form,
          low_sc_grade: this.props.jobstep5.low_sc_grade,
          low_sc_major: this.props.jobstep5.low_sc_major,
          low_sc_name: this.props.jobstep5.low_sc_name,
          low_sc_to: this.props.jobstep5.low_sc_to,
          low_st_from: this.props.jobstep5.low_st_from,
          low_st_grade: this.props.jobstep5.low_st_grade,
          low_st_major: this.props.jobstep5.low_st_major,
          low_st_name: this.props.jobstep5.low_st_name,
          low_st_to: this.props.jobstep5.low_st_to,
          master_from: this.props.jobstep5.master_from,
          master_grade: this.props.jobstep5.master_grade,
          master_major: this.props.jobstep5.master_major,
          master_name: this.props.jobstep5.master_name,
          master_to: this.props.jobstep5.master_to,
          other_from: this.props.jobstep5.other_from,
          other_grade: this.props.jobstep5.other_grade,
          other_major: this.props.jobstep5.other_major,
          other_name: this.props.jobstep5.other_name,
          other_to: this.props.jobstep5.other_to
        },
        () => {
          console.log("Edit Access.");
        }
      );
    }
  }
  getDataContentFull() {
    //console.log(this.state);
    let newArr = [];
    newArr = {
      activity: this.state.activity,
      bachelor_from: this.state.bachelor_from,
      bachelor_grade: this.state.bachelor_grade,
      bachelor_major: this.state.bachelor_major,
      bachelor_name: this.state.bachelor_name,
      bachelor_to: this.state.bachelor_to,
      high_sc_from: this.state.high_sc_from,
      high_sc_grade: this.state.high_sc_grade,
      high_sc_major: this.state.high_sc_major,
      high_sc_name: this.state.high_sc_name,
      high_sc_to: this.state.high_sc_to,
      high_st_from: this.state.high_st_from,
      high_st_grade: this.state.high_st_grade,
      high_st_major: this.state.high_st_major,
      high_st_name: this.state.high_st_name,
      high_st_to: this.state.high_st_to,
      low_sc_form: this.state.low_sc_form,
      low_sc_grade: this.state.low_sc_grade,
      low_sc_major: this.state.low_sc_major,
      low_sc_name: this.state.low_sc_name,
      low_sc_to: this.state.low_sc_to,
      low_st_from: this.state.low_st_from,
      low_st_grade: this.state.low_st_grade,
      low_st_major: this.state.low_st_major,
      low_st_name: this.state.low_st_name,
      low_st_to: this.state.low_st_to,
      master_from: this.state.master_from,
      master_grade: this.state.master_grade,
      master_major: this.state.master_major,
      master_name: this.state.master_name,
      master_to: this.state.master_to,
      other_from: this.state.other_from,
      other_grade: this.state.other_grade,
      other_major: this.state.other_major,
      other_name: this.state.other_name,
      other_to: this.state.other_to
    };
    if (
      this.state.low_sc_name === "" &&
      this.state.high_sc_name === "" &&
      this.state.high_st_name === "" &&
      this.state.bachelor_name === "" &&
      this.state.low_st_name === "" &&
      this.state.master_name === ""
    ) {
    } else {
      this.setState({ pass: true }, () => {
        this.props.getUpdateContent(5, newArr);
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
          &nbsp;ประวัติการศึกษา/Education Background
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
                  <div align="center">ระดับการศึกษา/Level</div>
                </th>
                <th rowSpan="2">
                  <div align="center">สถาบันการศึกษา/Educational Institution</div>
                </th>
                <th rowSpan="2">
                  <div align="center">สาขาวิชา/Major</div>
                </th>
                <th colspan="2">
                  <div align="center">ปีการศึกษา</div>
                </th>
                <th width="100" rowSpan="2">
                  <div align="center">เกรดเฉลี่ย/G.P.A</div>
                </th>
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="100">
                  <div align="center" style={{fontSize: '13px' }}>จาก/From Year</div>
                </th>
                <th width="100">
                  <div align="center" style={{fontSize: '13px' }}>ถึง/To Year</div>
                </th>
              </tr>
              <tr>
                <td>มัธยมศึกษาตอนต้น/Junior High School</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_sc_name}
                    onChange={event =>
                      this.setState({ low_sc_name: event.target.value }, () => {
                        //console.log(this.state.low_sc_name);
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_sc_major}
                    onChange={event =>
                      this.setState(
                        { low_sc_major: event.target.value },
                        () => {
                          //console.log(this.state.low_sc_major);
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_sc_form}
                    onChange={event =>
                      this.setState({ low_sc_form: event.target.value }, () => {
                        //console.log(this.state.low_sc_form);
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_sc_to}
                    onChange={event =>
                      this.setState({ low_sc_to: event.target.value }, () => {
                        //console.log(this.state.low_sc_to);
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_sc_grade}
                    onChange={event =>
                      this.setState(
                        { low_sc_grade: event.target.value },
                        () => {
                          //console.log(this.state.low_sc_grade);
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>มัธยมศึกษาตอนปลาย/Senior High School</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_sc_name}
                    onChange={event =>
                      this.setState(
                        { high_sc_name: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_sc_major}
                    onChange={event =>
                      this.setState(
                        { high_sc_major: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_sc_from}
                    onChange={event =>
                      this.setState(
                        { high_sc_from: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_sc_to}
                    onChange={event =>
                      this.setState({ high_sc_to: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_sc_grade}
                    onChange={event =>
                      this.setState(
                        { high_sc_grade: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปวช. / Vocational Certificate (Voc. Cert.) </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_st_name}
                    onChange={event =>
                      this.setState({ low_st_name: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_st_major}
                    onChange={event =>
                      this.setState(
                        { low_st_major: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_st_from}
                    onChange={event =>
                      this.setState({ low_st_from: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_st_to}
                    onChange={event =>
                      this.setState({ low_st_to: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.low_st_grade}
                    onChange={event =>
                      this.setState(
                        { low_st_grade: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปวส./อนุปริญญา / High Vocational Certificate (Dip./High Voc. Cert.) </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_st_name}
                    onChange={event =>
                      this.setState(
                        { high_st_name: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_st_major}
                    onChange={event =>
                      this.setState(
                        { high_st_major: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_st_from}
                    onChange={event =>
                      this.setState(
                        { high_st_from: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_st_to}
                    onChange={event =>
                      this.setState({ high_st_to: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.high_st_grade}
                    onChange={event =>
                      this.setState(
                        { high_st_grade: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปริญญาตรี / Bachelor Degrees</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.bachelor_name}
                    onChange={event =>
                      this.setState(
                        { bachelor_name: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.bachelor_major}
                    onChange={event =>
                      this.setState(
                        { bachelor_major: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.bachelor_from}
                    onChange={event =>
                      this.setState(
                        { bachelor_from: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.bachelor_to}
                    onChange={event =>
                      this.setState({ bachelor_to: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.bachelor_grade}
                    onChange={event =>
                      this.setState(
                        { bachelor_grade: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>ปริญญาโท / Master Degrees</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.master_name}
                    onChange={event =>
                      this.setState({ master_name: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.master_major}
                    onChange={event =>
                      this.setState(
                        { master_major: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.master_from}
                    onChange={event =>
                      this.setState({ master_from: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.master_to}
                    onChange={event =>
                      this.setState({ master_to: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.master_grade}
                    onChange={event =>
                      this.setState(
                        { master_grade: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </th>
              </tr>
              <tr>
                <td>อื่น ๆ / Other</td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.other_name}
                    onChange={event =>
                      this.setState({ other_name: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.other_major}
                    onChange={event =>
                      this.setState({ other_major: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.other_from}
                    onChange={event =>
                      this.setState({ other_from: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.other_to}
                    onChange={event =>
                      this.setState({ other_to: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </th>
                <th>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.other_grade}
                    onChange={event =>
                      this.setState({ other_grade: event.target.value }, () => {
                        this.getDataContentFull();
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
            <h6 style={{ textAlign: "left", fontSize: '14px' }}>
              กิจกรรม/กีฬา/รางวัล ระหว่างการศึกษา /Activities / Sports / Awards During study
            </h6>
          </Grid>
          <Grid
            item
            lg={4}
            xl={9}
            xs={9}
            sm={9}
            md={9}
            style={{ marginLeft: 75, padding: 0 }}
          >
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.activity}
              onChange={event =>
                this.setState({ activity: event.target.value }, () => {
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
