import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { TextInput } from "grommet";
import Checkbox from "@material-ui/core/Checkbox";

export default class Skill extends Component {
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
          &nbsp; ความสามารถ/ทักษะ/ความสามารถพิเศษ
        </h4>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{}}>
            <table border="0" width="95%">
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="200" style={{ paddingBottom: 10, paddingTop: 10 }}>
                  <div align="center">ภาษาต่าง</div>
                </th>
                <th>
                  <div align="center">การพูด</div>
                </th>
                <th>
                  <div align="center">การอ่าน</div>
                </th>
                <th>
                  <div align="center">การเขียน</div>
                </th>
              </tr>
              <tr>
                <td>ไทย</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />{" "}
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>อังกฤษ</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    placeholder="อื่นๆ..."
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="200" style={{ paddingBottom: 10, paddingTop: 10 }}>
                  <div align="center">&nbsp;</div>
                </th>
                <th>
                  <div align="center">คอมพิวเตอร์</div>
                </th>
                <th>
                  <div align="center">พิมพ์ดีด</div>
                </th>
                <th>
                  <div align="center">ความสามารถในการขับรถยนต์</div>
                </th>
              </tr>
              <tr>
                <td>MS EXCEL</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <label>ไทย(คำ/นาที)</label>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    placeholder=""
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td rowSpan="3">
                <div align="left" style={{paddingLeft:100}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={this.state.checkedB}
                       // onChange={this.handleChange("checkedA")}
                        //onClick={this.chkFrom}
                        value="checkedA"
                        color="primary"
                      />
                    }
                    label="ขับรถยนต์ได้"
                  /><br/>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={this.state.checkedB}
                       // onChange={this.handleChange("checkedA")}
                        //onClick={this.chkFrom}
                        value="checkedA"
                        color="primary"
                      />
                    }
                    label="มีใบขับขี่"
                  /><br/>
                   <FormControlLabel
                    control={
                      <Checkbox
                        //checked={this.state.checkedB}
                       // onChange={this.handleChange("checkedA")}
                        //onClick={this.chkFrom}
                        value="checkedA"
                        color="primary"
                      />
                    }
                    label="ขับจักรยานยนต์ได้"
                  /><br/>
                   <FormControlLabel
                    control={
                      <Checkbox
                        //checked={this.state.checkedB}
                       // onChange={this.handleChange("checkedA")}
                        //onClick={this.chkFrom}
                        value="checkedA"
                        color="primary"
                      />
                    }
                    label="สามารถออกไปทำงานต่างจังหวัดได้"
                  />
                  </div>
                </td>
              </tr>
              <tr>
                <td>MS WORD</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  {" "}
                  <label>อังกฤษ(คำ/นาที)</label>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    placeholder=""
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>MS WINDOWS</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td>
                  <label>ความสามารถอื่นๆ</label>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    placeholder=""
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    placeholder="อื่นๆ..."
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดีมาก"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ดี"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="พอใช้"
                      labelPlacement="a"
                    />
                  </div>
                </td>
                <td />
                <td />
              </tr>
              <tr>
              <td colSpan="2"><label>สามารถหาผู้ค้ำประกันได้ในตำแหน่งที่ต้องการค้ำประกัน</label></td>
                  <td colSpan="2">
                  <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ไม่ขัดข้อง"
                      labelPlacement="a"
                    />
                    <FormControlLabel
                      checked={this.state.selectedValue === "a"}
                      onChange={this.handleOptionChange}
                      value="a"
                      control={<Radio color="primary" />}
                      label="ขัดข้อง"
                      labelPlacement="a"
                    />
                  </td>
              </tr>
              <tr>
              <td colSpan="2"><label>บุคคลในบริษัท เจ.ไอ.บี. คอมพิวเตอร์ กรุ๊ป จำกัด ที่ท่านรู้จักคุ้นเคยชื่อ</label></td>
                  <td>
                  <label>ชื่อ</label>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                  </td>
                  <td>
                  <label>ความสัมพันธ์</label>
                  <TextInput
                    style={{ width: "50%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
                        //this.getDataContentFull();
                      })
                    }
                  />
                  </td>
              </tr>
              <tr>
                  <td colSpan="2">
                  <label>บันทึกเพิ่มเติม ซึ่งท่านคิดว่าเป็นประโยช์นต่อการสมัครงานของท่าน</label>
                  </td>
                  <td colSpan="2"> <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ job_family: event.target.value }, () => {
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
