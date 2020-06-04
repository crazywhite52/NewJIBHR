import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { TextInput } from "grommet";
import Checkbox from "@material-ui/core/Checkbox";

export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_name: [],
      bike: 0,
      bike_card: 0,
      car:0,
      car_card: 0,
      pass: false
    };
    this.getDataContentFull = this.getDataContentFull.bind(this);
    this.handleOptionChange1 = this.handleOptionChange1.bind(this);
    this.handleOptionChange2 = this.handleOptionChange2.bind(this);
    this.handleOptionChange3 = this.handleOptionChange3.bind(this);
    this.handleOptionChange4 = this.handleOptionChange4.bind(this);
    this.handleOptionChange5 = this.handleOptionChange5.bind(this);
    this.handleOptionChange6 = this.handleOptionChange6.bind(this);
    this.handleOptionChange7 = this.handleOptionChange7.bind(this);
    this.handleOptionChange8 = this.handleOptionChange8.bind(this);
    this.handleOptionChange9 = this.handleOptionChange9.bind(this);
    this.handleOptionChange10 = this.handleOptionChange10.bind(this);
    this.handleOptionChange11 = this.handleOptionChange11.bind(this);
    this.handleOptionChange12 = this.handleOptionChange12.bind(this);
    this.handleOptionChange13 = this.handleOptionChange13.bind(this);
    this.handleOptionChange14 = this.handleOptionChange14.bind(this);
  }
  componentDidMount() { }
  getDataContentFull() {
    
    let newArr = [];
    newArr = {
      bike: this.state.bike,
      bike_card: this.state.bike_card,
      car: this.state.car,
      car_card: this.state.car_card,
      com_excel_status: this.state.com_excel_status,
      com_other_detail: this.state.com_other_detail === undefined ? '' : this.state.com_other_detail,
      com_other_status: this.state.com_other_status,
      com_windows_status: this.state.com_windows_status,
      com_word_status: this.state.com_word_status,
      ins_ststus: this.state.ins_ststus,
      jib_name: this.state.jib_name === undefined ? '' : this.state.jib_name,
      jib_relation: this.state.jib_relation === undefined ? '' : this.state.jib_relation,
      pim_eng_status: this.state.pim_eng_status === undefined ? '' : this.state.pim_eng_status,
      pim_thai_status: this.state.pim_thai_status === undefined ? '' : this.state.pim_thai_status,
      read_eng_status: this.state.read_eng_status,
      read_other_status: this.state.read_other_status,
      read_thai_status: this.state.read_thai_status,
      reg_detail: this.state.reg_detail === undefined ? '' : this.state.reg_detail,
      skill_other: this.state.skill_other === undefined ? '' : this.state.skill_other,
      speak_eng_status: this.state.speak_eng_status,
      speak_other_detail: this.state.speak_other_detail === undefined ? '' : this.state.speak_other_detail,
      speak_other_status: this.state.speak_other_status,
      speak_thai_status: this.state.speak_thai_status,
      write_eng_status: this.state.write_eng_status,
      write_other_status: this.state.write_other_status,
      write_thai_status: this.state.write_thai_status
    };
    console.log(this.state);
    if (
      this.state.speak_thai_status === undefined ||
      this.state.ins_ststus === undefined ||
      this.state.com_excel_status === undefined ||
      this.state.com_word_status === undefined ||
      this.state.com_windows_status === undefined
    ) {
    } else {
      this.setState({ pass: true }, () => {
        //console.log(newArr);
        this.props.getUpdateContent(8, newArr);
      });
    }
  }
  handleOptionChange1(e) {
    this.setState({ ...this.state, speak_thai_status: e.target.value }, () => {
      this.getDataContentFull();
    });
  }
  handleOptionChange2(e) {
    this.setState({ ...this.state, read_thai_status: e.target.value }, () => {
      //console.log(this.state.read_thai_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange3(e) {
    this.setState({ ...this.state, write_thai_status: e.target.value }, () => {
      //console.log(this.state.write_thai_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange4(e) {
    this.setState({ ...this.state, speak_eng_status: e.target.value }, () => {
      //console.log(this.state.speak_eng_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange5(e) {
    this.setState({ ...this.state, read_eng_status: e.target.value }, () => {
      //console.log(this.state.read_eng_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange6(e) {
    this.setState({ ...this.state, write_eng_status: e.target.value }, () => {
      //console.log(this.state.write_eng_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange7(e) {
    this.setState({ ...this.state, speak_other_status: e.target.value }, () => {
      //console.log(this.state.speak_other_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange8(e) {
    this.setState({ ...this.state, read_other_status: e.target.value }, () => {
      //console.log(this.state.read_other_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange9(e) {
    this.setState({ ...this.state, write_other_status: e.target.value }, () => {
      //console.log(this.state.write_other_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange10(e) {
    this.setState({ ...this.state, com_excel_status: e.target.value }, () => {
      //console.log(this.state.com_excel_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange11(e) {
    this.setState({ ...this.state, com_word_status: e.target.value }, () => {
      //console.log(this.state.com_word_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange12(e) {
    this.setState({ ...this.state, com_windows_status: e.target.value }, () => {
      //console.log(this.state.com_windows_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange13(e) {
    this.setState({ ...this.state, com_other_status: e.target.value }, () => {
      //console.log(this.state.com_other_status);
      this.getDataContentFull();
    });
  }
  handleOptionChange14(e) {
    this.setState({ ...this.state, ins_ststus: e.target.value }, () => {
      //console.log(this.state.ins_ststus);
      this.getDataContentFull();
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h5>
          {this.state.pass === true ? (
            <CheckCircleIcon style={{ color: "green" }} />
          ) : (
              <InfoIcon style={{ color: "orange" }} />
            )}
          &nbsp; ความสามารถ/ทักษะ/ความสามารถพิเศษ/Ability / skill / special ability
        </h5>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{}}>
            <table border="0" width="95%">
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="200" style={{ paddingBottom: 10, paddingTop: 10 }}>
                  <div align="center">ภาษา/Language Ability
</div>
                </th>
                <th>
                  <div align="center">การพูด/Speaking</div>
                </th>
                <th>
                  <div align="center">การอ่าน/The reading/Understanding</div>
                </th>
                <th>
                  <div align="center">การเขียน/Writing</div>
                </th>
              </tr>
              <tr>
                <td>ไทย/Thai</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.speak_thai_status === "1"}
                      onChange={this.handleOptionChange1}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.speak_thai_status === "2"}
                      onChange={this.handleOptionChange1}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.speak_thai_status === "3"}
                      onChange={this.handleOptionChange1}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.read_thai_status === "1"}
                      onChange={this.handleOptionChange2}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />{" "}
                    <FormControlLabel
                      checked={this.state.read_thai_status === "2"}
                      onChange={this.handleOptionChange2}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.read_thai_status === "3"}
                      onChange={this.handleOptionChange2}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.write_thai_status === "1"}
                      onChange={this.handleOptionChange3}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.write_thai_status === "2"}
                      onChange={this.handleOptionChange3}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.write_thai_status === "3"}
                      onChange={this.handleOptionChange3}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>อังกฤษ/English</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.speak_eng_status === "1"}
                      onChange={this.handleOptionChange4}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.speak_eng_status === "2"}
                      onChange={this.handleOptionChange4}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.speak_eng_status === "3"}
                      onChange={this.handleOptionChange4}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.read_eng_status === "1"}
                      onChange={this.handleOptionChange5}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.read_eng_status === "2"}
                      onChange={this.handleOptionChange5}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.read_eng_status === "3"}
                      onChange={this.handleOptionChange5}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.write_eng_status === "1"}
                      onChange={this.handleOptionChange6}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.write_eng_status === "2"}
                      onChange={this.handleOptionChange6}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.write_eng_status === "3"}
                      onChange={this.handleOptionChange6}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    placeholder="อื่นๆ.../Other"
                    onChange={event =>
                      this.setState(
                        { speak_other_detail: event.target.value },
                        () => {
                          //console.log(this.state.speak_other_detail);
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.speak_other_status === "1"}
                      onChange={this.handleOptionChange7}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.speak_other_status === "2"}
                      onChange={this.handleOptionChange7}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.speak_other_status === "3"}
                      onChange={this.handleOptionChange7}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.read_other_status === "1"}
                      onChange={this.handleOptionChange8}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.read_other_status === "2"}
                      onChange={this.handleOptionChange8}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.read_other_status === "3"}
                      onChange={this.handleOptionChange8}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.write_other_status === "1"}
                      onChange={this.handleOptionChange9}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.write_other_status === "2"}
                      onChange={this.handleOptionChange9}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.write_other_status === "3"}
                      onChange={this.handleOptionChange9}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <th width="200" style={{ paddingBottom: 10, paddingTop: 10 }}>
                  <div align="center">&nbsp;</div>
                </th>
                <th>
                  <div align="center">คอมพิวเตอร์/Computer Skill</div>
                </th>
                <th>
                  <div align="center">พิมพ์ดีด/Typing</div>
                </th>
                <th>
                  <div align="center">ความสามารถในการขับรถยนต์/Can you drive a car</div>
                </th>
              </tr>
              <tr>
                <td>MS EXCEL</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.com_excel_status === "1"}
                      onChange={this.handleOptionChange10}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.com_excel_status === "2"}
                      onChange={this.handleOptionChange10}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.com_excel_status === "3"}
                      onChange={this.handleOptionChange10}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  <label>ไทย(คำ/นาที)</label>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    type="number"
                    placeholder=""
                    onChange={event =>
                      this.setState(
                        { pim_thai_status: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td rowSpan="3">
                  <div align="left" style={{ paddingLeft: 100 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.car}
                          onChange={event =>
                            this.setState({ car: event.target.checked===true?1:0 }, () => {
                              this.getDataContentFull();
                            })
                          }
                          color="primary"
                        />
                      }
                      label="ขับรถยนต์ได้/Drive a car"
                    />
                    <br />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.car_card}
                          onChange={event =>
                            this.setState(
                              { car_card: event.target.checked===true?1:0 },
                              () => {
                                this.getDataContentFull();
                              }
                            )
                          }
                          color="primary"
                        />
                      }
                      label="มีใบขับขี่/Driving License"
                    />
                    <br />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.bike}
                          onChange={event =>
                            this.setState(
                              { bike: event.target.checked===true?1:0 },
                              () => {
                                this.getDataContentFull();
                              }
                            )
                          }
                          color="primary"
                        />
                      }
                      label="ขับจักรยานยนต์ได้/Drive a motorcycle"
                    />
                    <br />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.bike_card}
                          onChange={event =>
                            this.setState(
                              { bike_card: event.target.checked===true?1:0 },
                              () => {
                                this.getDataContentFull();
                              }
                            )
                          }
                          color="primary"
                        />
                      }
                      label="สามารถออกไปทำงานต่างจังหวัดได้/able and willing to travel upcountry"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>MS WORD</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.com_word_status === "1"}
                      onChange={this.handleOptionChange11}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.com_word_status === "2"}
                      onChange={this.handleOptionChange11}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.com_word_status === "3"}
                      onChange={this.handleOptionChange11}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td>
                  {" "}
                  <label>อังกฤษ(คำ/นาที)</label>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    type="number"
                    placeholder=""
                    onChange={event =>
                      this.setState(
                        { pim_eng_status: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td />
              </tr>
              <tr>
                <td>MS WINDOWS</td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.com_windows_status === "1"}
                      onChange={this.handleOptionChange12}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.com_windows_status === "2"}
                      onChange={this.handleOptionChange12}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.com_windows_status === "3"}
                      onChange={this.handleOptionChange12}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
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
                      this.setState({ skill_other: event.target.value }, () => {
                        this.getDataContentFull();
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
                    placeholder="อื่นๆ.../Other"
                    onChange={event =>
                      this.setState(
                        { com_other_detail: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <div align="center">
                    <FormControlLabel
                      checked={this.state.com_other_status === "1"}
                      onChange={this.handleOptionChange13}
                      value="1"
                      control={<Radio color="primary" />}
                      label="ดีมาก/Very good"
                      labelPlacement="1"
                    />
                    <FormControlLabel
                      checked={this.state.com_other_status === "2"}
                      onChange={this.handleOptionChange13}
                      value="2"
                      control={<Radio color="primary" />}
                      label="ดี/Good"
                      labelPlacement="2"
                    />
                    <FormControlLabel
                      checked={this.state.com_other_status === "3"}
                      onChange={this.handleOptionChange13}
                      value="3"
                      control={<Radio color="primary" />}
                      label="พอใช้/Fair"
                      labelPlacement="3"
                    />
                  </div>
                </td>
                <td />
                <td />
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.38)" }}>
                <td colSpan="2">
                  <label>
                    <p>-สามารถหาผู้ค้ำประกันได้ในตำแหน่งที่ต้องการค้ำประกัน</p>
                    Can find a guarantor in the position that requires the guarantee
                  </label>
                </td>
                <td colSpan="2">
                  <FormControlLabel
                    checked={this.state.ins_ststus === "1"}
                    onChange={this.handleOptionChange14}
                    value="1"
                    control={<Radio color="primary" />}
                    label="ไม่ขัดข้อง/Consent to"
                    labelPlacement="1"
                  />
                  <FormControlLabel
                    checked={this.state.ins_ststus === "2"}
                    onChange={this.handleOptionChange14}
                    value="2"
                    control={<Radio color="primary" />}
                    label="ขัดข้อง/Have trouble"
                    labelPlacement="2"
                  />
                </td>
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.20)" }}>
                <td colSpan="2">
                  <label>
                    <p>-บุคคลในบริษัท เจ.ไอ.บี. คอมพิวเตอร์ กรุ๊ป จำกัด ที่ท่านรู้จักคุ้นเคยชื่อ</p>
                    <p>Have you any friends or relatives employed here?</p>
                  </label>
                </td>
                <td>
                  <label>ชื่อ/Name</label>
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ jib_name: event.target.value }, () => {
                        this.getDataContentFull();
                      })
                    }
                  />
                </td>
                <td>
                  <label>ความสัมพันธ์/Relations</label>
                  <TextInput
                    style={{ width: "50%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState(
                        { jib_relation: event.target.value },
                        () => {
                          this.getDataContentFull();
                        }
                      )
                    }
                  />
                </td>
              </tr>
              <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
                <td colSpan="2">
                  <label>
                    <p>-บันทึกเพิ่มเติมซึ่งท่านคิดว่าเป็นประโยช์นต่อการสมัครงานของท่าน </p>
                    Other/Additional notes Which you think is useful
                  </label>
                </td>
                <td colSpan="2">
                  {" "}
                  <TextInput
                    style={{ width: "100%" }}
                    size="xsmall"
                    onChange={event =>
                      this.setState({ reg_detail: event.target.value }, () => {
                        this.getDataContentFull();
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
