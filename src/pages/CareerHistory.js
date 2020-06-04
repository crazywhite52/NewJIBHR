import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import { TextInput } from "grommet";
import Select from "react-select";
const Month = [
  { label: "มกราคม", value: "01" },
  { label: "กุมภาพันธ์", value: "02" },
  { label: "มีนาคม", value: "03" },
  { label: "เมษายน", value: "04" },
  { label: "พฤษภาคม", value: "05" },
  { label: "มิถุนายน", value: "06" },
  { label: "กรกฎาคม", value: "07" },
  { label: "สิงหาคม", value: "08" },
  { label: "กันยายน", value: "09" },
  { label: "ตุลาคม", value: "10" },
  { label: "พฤศจิกายน", value: "11" },
  { label: "ธันวาคม", value: "12" }
];

export default class CareerHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      pass: false,
      work_from_m1: "",
      work_from_y1: "",
      work_from_m2: "",
      work_from_y2: "",
      work_from_m3: "",
      work_from_y3: "",
      work_from_m4: "",
      work_from_y4: "",
      work_from_m5: "",
      work_from_y5: "",
      work_from_m6: "",
      work_from_y6: "",
      work_to_m1: "",
      work_to_y1: "",
      work_to_m2: "",
      work_to_y2: "",
      work_to_m3: "",
      work_to_y3: "",
      work_to_m4: "",
      work_to_y4: "",
      work_to_m5: "",
      work_to_y5: "",
      work_to_m6: "",
      work_to_y6: ""
    };
    this.getDataContentFull = this.getDataContentFull.bind(this);
  }
  getDataContentFull() {
    let newArr1 = [];
    let newArr2 = [];
    let newArr3 = [];
    let newArr4 = [];
    let newArr5 = [];
    let newArr6 = [];
    let dataArr = [];
    newArr1 = {
      work_from_m: this.state.work_from_m1.value === undefined ? '' : this.state.work_from_m1.value,
      work_from_y: this.state.work_from_y1.value === undefined ? '' : this.state.work_from_y1.value,
      work_job: this.state.work_job1 === undefined ? '' : this.state.work_job1,
      work_location: this.state.work_location1 === undefined ? '' : this.state.work_location1,
      work_out: this.state.work_out1 === undefined ? '' : this.state.work_out1,
      work_salary: this.state.work_salary1 === undefined ? '' : this.state.work_salary1,
      work_to_m: this.state.work_to_m1.value === undefined ? '' : this.state.work_to_m1.value,
      work_to_y: this.state.work_to_y1.value === undefined ? '' : this.state.work_to_y1.value
    };
    newArr2 = {
      work_from_m: this.state.work_from_m2.value === undefined ? '' : this.state.work_from_m2.value,
      work_from_y: this.state.work_from_y2.value === undefined ? '' : this.state.work_from_y2.value,
      work_job: this.state.work_job2 === undefined ? '' : this.state.work_job2,
      work_location: this.state.work_location2 === undefined ? '' : this.state.work_location2,
      work_out: this.state.work_out2 === undefined ? '' : this.state.work_out2,
      work_salary: this.state.work_salary2 === undefined ? '' : this.state.work_salary2,
      work_to_m: this.state.work_to_m2.value === undefined ? '' : this.state.work_to_m2.value,
      work_to_y: this.state.work_to_y2.value === undefined ? '' : this.state.work_to_y2.value
    };
    newArr3 = {
      work_from_m: this.state.work_from_m3.value === undefined ? '' : this.state.work_from_m3.value,
      work_from_y: this.state.work_from_y3.value === undefined ? '' : this.state.work_from_y3.value,
      work_job: this.state.work_job3 === undefined ? '' : this.state.work_job3,
      work_location: this.state.work_location3 === undefined ? '' : this.state.work_location3,
      work_out: this.state.work_out3 === undefined ? '' : this.state.work_out3,
      work_salary: this.state.work_salary3 === undefined ? '' : this.state.work_salary3,
      work_to_m: this.state.work_to_m3.value === undefined ? '' : this.state.work_to_m3.value,
      work_to_y: this.state.work_to_y3.value === undefined ? '' : this.state.work_to_y3.value
    };
    newArr4 = {
      work_from_m: this.state.work_from_m4.value === undefined ? '' : this.state.work_from_m4.value,
      work_from_y: this.state.work_from_y4.value === undefined ? '' : this.state.work_from_y4.value,
      work_job: this.state.work_job4 === undefined ? '' : this.state.work_job4,
      work_location: this.state.work_location4 === undefined ? '' : this.state.work_location4,
      work_out: this.state.work_out4 === undefined ? '' : this.state.work_out4,
      work_salary: this.state.work_salary4 === undefined ? '' : this.state.work_salary4,
      work_to_m: this.state.work_to_m4.value === undefined ? '' : this.state.work_to_m4.value,
      work_to_y: this.state.work_to_y4.value === undefined ? '' : this.state.work_to_y4.value
    };
    newArr5 = {
      work_from_m: this.state.work_from_m5.value === undefined ? '' : this.state.work_from_m5.value,
      work_from_y: this.state.work_from_y5.value === undefined ? '' : this.state.work_from_y5.value,
      work_job: this.state.work_job5 === undefined ? '' : this.state.work_job5,
      work_location: this.state.work_location5 === undefined ? '' : this.state.work_location5,
      work_out: this.state.work_out5 === undefined ? '' : this.state.work_out5,
      work_salary: this.state.work_salary5 === undefined ? '' : this.state.work_salary5,
      work_to_m: this.state.work_to_m5.value === undefined ? '' : this.state.work_to_m5.value,
      work_to_y: this.state.work_to_y5.value === undefined ? '' : this.state.work_to_y5.value
    };
    newArr6 = {
      work_from_m: this.state.work_from_m6.value === undefined ? '' : this.state.work_from_m6.value,
      work_from_y: this.state.work_from_y6.value === undefined ? '' : this.state.work_from_y6.value,
      work_job: this.state.work_job6 === undefined ? '' : this.state.work_job6,
      work_location: this.state.work_location6 === undefined ? '' : this.state.work_location6,
      work_out: this.state.work_out6 === undefined ? '' : this.state.work_out6,
      work_salary: this.state.work_salary6 === undefined ? '' : this.state.work_salary6,
      work_to_m: this.state.work_to_m6.value === undefined ? '' : this.state.work_to_m6.value,
      work_to_y: this.state.work_to_y6.value === undefined ? '' : this.state.work_to_y6.value
    };
    dataArr = [newArr1, newArr2, newArr3, newArr4, newArr5, newArr6];
    console.log(dataArr);
    //console.log(this.state.work_salary1);
    if (this.state.work_salary1 == undefined || this.state.work_location1 == undefined || this.state.work_job1 == undefined || this.state.work_out1 == undefined ||
      this.state.work_from_m1.value == undefined || this.state.work_from_y1.value == undefined || this.state.work_to_m1.value == undefined || this.state.work_to_y1.value == undefined
    ) {
      this.setState({ pass: false }, () => {
        console.log("กรุณาป้อนข้อมูลให้ครบถ้วน");
      });
    } else {
      this.setState({ pass: true }, () => {
        this.props.getUpdateContent(7, dataArr);
      });
    }

  }
  componentDidMount() {
    if (this.props.jobstep7.length === 0) {

    } else {
      console.log(this.props.jobstep7);
      this.setState({
        work_location1: this.props.jobstep7[0].work_location,
        work_salary1: this.props.jobstep7[0].work_salary,
        work_job1: this.props.jobstep7[0].work_job,
        work_out1: this.props.jobstep7[0].work_out,
        work_location2: this.props.jobstep7[1].work_location,
        work_salary2: this.props.jobstep7[1].work_salary,
        work_job2: this.props.jobstep7[1].work_job,
        work_out2: this.props.jobstep7[1].work_out,
        work_location3: this.props.jobstep7[2].work_location,
        work_salary3: this.props.jobstep7[2].work_salary,
        work_job3: this.props.jobstep7[2].work_job,
        work_out3: this.props.jobstep7[2].work_out,
      }, () => {
        console.log("Edit Access.");
      });
    }
  }
  getDataContent(varname, value) {
    this.setState({ [varname]: value }, () => {
      this.getDataContentFull();
      //this.getDataContentFull();
      //console.log(this.state);
    });
  }
  getDropList = () => {
    const year = new Date().getFullYear() + 543;
    return Array.from(new Array(50), (v, i) => ({
      label: String(year - i),
      value: String(year - i)
    }));
    // <option key={i} value={year + i}>
    //   {year + i}
    // </option>
  };

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
          &nbsp; การทำงาน/ประสบการณ์/ Working Experience
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{}}>
            <table border="0" width="98%">
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th
                  rowSpan="2"
                  width=""
                  style={{ paddingBottom: 10, paddingTop: 10 }}
                >
                  <div align="center">ชื่อสถานประกอบการ/Company's Name</div>
                </th>
                <th colSpan="2">
                  <div align="center">ระยะเวลาเดือน/พ.ศ. / Duration Month / Year</div>
                </th>
                <th rowSpan="2">
                  <div align="center">เงินเดือน/Salary</div>
                </th>
                <th rowSpan="2" width="">
                  <div align="center">ตำแหน่ง/Position</div>
                </th>
                <th rowSpan="2" width="">
                  <div align="center">สาเหตุที่ออก/Reason For Leaving</div>
                </th>
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="250">
                  <div align="center">จาก/From</div>
                </th>
                <th width="250">
                  <div align="center">ถึง/To</div>
                </th>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.work_location1}
                    onChange={event =>
                      this.setState(
                        { work_location1: event.target.value },
                        () => {
                          //console.log(this.state.work_location);
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_m1}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_from_m1", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_y1}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_from_y1", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_m1}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_to_m1", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_y1}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_to_y1", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <TextInput
                    type="number"
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.work_salary1}
                    onChange={event =>
                      this.setState(
                        { work_salary1: event.target.value },
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
                    value={this.state.work_job1}
                    onChange={event =>
                      this.setState({ work_job1: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.work_out1}
                    onChange={event =>
                      this.setState({ work_out1: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    value={this.state.work_location2}
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState(
                        { work_location2: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_m2}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_from_m2", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_y2}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_from_y2", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_m2}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_to_m2", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_y2}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_to_y2", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <TextInput
                    value={this.state.work_salary2}
                    type="number"
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState(
                        { work_salary2: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <TextInput
                    value={this.state.work_job2}
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_job2: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    value={this.state.work_out2}
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ work_out2: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    value={this.state.work_location3}
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState(
                        { work_location3: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_m3}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_from_m3", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_y3}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_from_y3", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_m3}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_to_m3", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_y3}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_to_y3", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <TextInput

                    type="number"
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.work_salary3}
                    onChange={event =>
                      this.setState(
                        { work_salary3: event.target.value },
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
                    value={this.state.work_job3}
                    onChange={event =>
                      this.setState({ work_job3: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    value={this.state.work_out3}
                    onChange={event =>
                      this.setState({ work_out3: event.target.value }, () => {
                        this.getDataContentFull();
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
                      this.setState(
                        { work_location4: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_m4}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_from_m4", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_y4}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_from_y4", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_m4}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_to_m4", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_y4}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_to_y4", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <TextInput
                    type="number"
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState(
                        { work_salary4: event.target.value },
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
                    onChange={event =>
                      this.setState({ work_job4: event.target.value }, () => {
                        this.getDataContentFull();
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
                        this.getDataContentFull();
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
                      this.setState(
                        { work_location5: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_m5}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_from_m5", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_y5}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_from_y5", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_m5}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_to_m5", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_y5}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_to_y5", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <TextInput
                    type="number"
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState(
                        { work_salary5: event.target.value },
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
                    onChange={event =>
                      this.setState({ work_job5: event.target.value }, () => {
                        this.getDataContentFull();
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
                        this.getDataContentFull();
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
                      this.setState(
                        { work_location6: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_m6}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_from_m6", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_from_y6}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_from_y6", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_m6}
                      placeholder="--เดือน--"
                      size="xsmall"
                      options={Month}
                      onChange={event =>
                        this.getDataContent("work_to_m6", event)
                      }
                    />
                  </td>
                  <td width="150">
                    <Select
                      value={this.state.work_to_y6}
                      placeholder="--ปี--"
                      size="xsmall"
                      options={this.getDropList()}
                      onChange={event =>
                        this.getDataContent("work_to_y6", event)
                      }
                    />
                  </td>
                </td>
                <td>
                  <TextInput
                    type="number"
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState(
                        { work_salary6: event.target.value },
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
                    onChange={event =>
                      this.setState({ work_job6: event.target.value }, () => {
                        this.getDataContentFull();
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
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
              </tr>
            </table>
            <Grid
              container
              spacing={24}
              style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
            >
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
