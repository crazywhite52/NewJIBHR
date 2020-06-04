import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { TextInput } from "grommet";
import Select from "react-select";
import TextField from "@material-ui/core/TextField";
import InputMask from 'react-input-mask';


let newArr = [];

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro_name: [],
      pass: false,
      age: 0,
      intro_namechk: false,
      checkedA: false,
      add_no: "",
      birthdaysub: "",
      add_group: "",
      add_village: "",
      add_road: "",
      add_zone: "",
      add_area: "",
      add_city: "",
      add_post: "",
      add_tel: "",
      add_phone: "",
      add_fax: "",
      sex_status: "",
      height: "",
      weight: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.chkFrom = this.chkFrom.bind(this);

    // this.onChangeDDl = this.onChangeDDl.bind(this);
  }
  componentDidMount() {
    if (this.props.jobstep2.length === 0) {
      //console.log(this.props.jobstep2.length);
    } else {
      //console.log(this.props.jobstep2.length);
      this.setState(
        {
          intro_name: this.props.jobstep2.intro_name,
          first_name: this.props.jobstep2.first_name,
          last_name: this.props.jobstep2.last_name,
          nick_name: this.props.jobstep2.nick_name,
          first_name_eng: this.props.jobstep2.first_name_eng,
          last_name_eng: this.props.jobstep2.last_name_eng,
          nick_name_eng: this.props.jobstep2.nick_name_eng,
          birthday: this.props.jobstep2.birthday,
          person_id: this.props.jobstep2.person_id,
          sex_status: this.props.jobstep2.sex_status,
          age: this.props.jobstep2.age,
          group_blood: this.props.jobstep2.group_blood,
          height: this.props.jobstep2.height,
          weight: this.props.jobstep2.weight,
          nationlity: this.props.jobstep2.nationlity,
          race: this.props.jobstep2.race,
          religion: this.props.jobstep2.religion,
          home_land: this.props.jobstep2.home_land,
          cur_no: this.props.jobstep2.cur_no,
          cur_group: this.props.jobstep2.cur_group,
          cur_village: this.props.jobstep2.cur_village,
          cur_road: this.props.jobstep2.cur_road,
          cur_zone: this.props.jobstep2.cur_zone,
          cur_area: this.props.jobstep2.cur_area,
          cur_city: this.props.jobstep2.cur_city,
          cur_post: this.props.jobstep2.cur_post,
          cur_tel: this.props.jobstep2.cur_tel,
          cur_phone: this.props.jobstep2.cur_phone,
          cur_fax: this.props.jobstep2.cur_fax,
          cur_email: this.props.jobstep2.cur_email,
          add_no: this.props.jobstep2.add_no,
          add_group: this.props.jobstep2.add_group,
          add_village: this.props.jobstep2.add_village,
          add_road: this.props.jobstep2.add_road,
          add_zone: this.props.jobstep2.add_zone,
          add_area: this.props.jobstep2.add_area,
          add_city: this.props.jobstep2.add_city,
          add_post: this.props.jobstep2.add_post,
          add_tel: this.props.jobstep2.add_tel,
          add_phone: this.props.jobstep2.add_phone,
          add_fax: this.props.jobstep2.add_fax,
          pass: true
        },
        () => {
          console.log("Edit Access.");
        }
      );
    }
  }
  onKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\+|-/.test(keyValue)) event.preventDefault();
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
    //console.log(this.state);
  };
  chkFrom() {
    this.timeout = setTimeout(() => {
      if (this.state.checkedA === true) {
        this.setState(
          {
            add_no: this.state.cur_no,
            add_group: this.state.cur_group,
            add_village: this.state.cur_village,
            add_road: this.state.cur_road,
            add_zone: this.state.cur_zone,
            add_area: this.state.cur_area,
            add_city: this.state.cur_city,
            add_post: this.state.cur_post,
            add_tel: this.state.cur_tel,
            add_phone: this.state.cur_phone,
            add_fax: this.state.cur_fax
          },
          () => {
            this.getDataContentFull();
            //console.log('------->'+this.state.add_no);
          }
        );
      } else {
        this.setState({
          add_no: "",
          add_group: "",
          add_village: "",
          add_road: "",
          add_zone: "",
          add_area: "",
          add_city: "",
          add_post: "",
          add_tel: "",
          add_phone: "",
          add_fax: ""
        });
      }
    }, 500);
  }

  calBirthDay() {
    //console.log(this.state.birthday);
    var difference = "";
    var years = "";
    var now = "";
    var countTo = "";
    var days = "";
    now = new Date(); // วันที่ปัจจุบัน object

    // var yy = this.state.birthday;
    // var yres = yy.substring(0,4);
    // var yyyy =  yres-543;
    // var mm = yy.substring(4,7);
    // var dd = yy.substring(7,10);
    countTo = new Date(this.state.birthday); // ทำค่าที่รับเข้ามาจาก countTo วันที่ให้เป็น object
    //console.log(this.state.birthday);
    //console.log('-->'+now);
    //console.log('---->'+countTo);
    difference = now - countTo; // นำวันเวลาปัจจุบันกับค่าที่ได้รับมาลบกัน

    // ในส่วนนี้เป็นการคำนวณหาจำนวนวัน ชั่วโมง นาที และวินาที
    days = Math.floor((difference / (60 * 60 * 1000 * 24)) * 1);
    years = Math.floor(days / 365);
    if (years > 1) {
      days = days - years * 365;
    }
    this.timeout = setTimeout(() => {
      this.setState({ age: years }, () => { });
      //console.log(countTo);
    }, 500);
  }
  getDataContent(varname, value) {
    //console.log(value);
    this.setState({ [varname]: value }, () => {
      this.getDataContentFull();
    });
    //console.log(this.state);

    this.setState({ intro_namechk: this.state.intro_name["value"] });
  }
  getDataContentFull() {
    newArr = {
      intro_name: this.state.intro_name,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      nick_name: this.state.nick_name,
      first_name_eng: this.state.first_name_eng,
      last_name_eng: this.state.last_name_eng,
      nick_name_eng: this.state.nick_name_eng,
      birthday: this.state.birthday,
      person_id: this.state.person_id,
      sex_status: this.state.sex_status,
      age: this.state.age,
      group_blood: this.state.group_blood,
      height: this.state.height,
      weight: this.state.weight,
      nationlity: this.state.nationlity,
      race: this.state.race,
      religion: this.state.religion,
      home_land: this.state.home_land,
      cur_no: this.state.cur_no,
      cur_group: this.state.cur_group,
      cur_village: this.state.cur_village,
      cur_road: this.state.cur_road,
      cur_zone: this.state.cur_zone,
      cur_area: this.state.cur_area,
      cur_city: this.state.cur_city,
      cur_post: this.state.cur_post,
      cur_tel: this.state.cur_tel === undefined ? '' : this.state.cur_tel,
      cur_phone: this.state.cur_phone,
      cur_fax: this.state.cur_fax === undefined ? '' : this.state.cur_fax,
      cur_email: this.state.cur_email,
      add_no: this.state.add_no,
      add_group: this.state.add_group,
      add_village: this.state.add_village,
      add_road: this.state.add_road,
      add_zone: this.state.add_zone,
      add_area: this.state.add_area,
      add_city: this.state.add_city,
      add_post: this.state.add_post,
      add_tel: this.state.add_tel === undefined ? '' : this.state.add_tel,
      add_phone: this.state.add_phone,
      add_fax: this.state.add_fax === undefined ? '' : this.state.add_fax
    };
    if (
      this.state.first_name === undefined ||
      this.state.last_name === undefined ||
      this.state.intro_namechk === false ||
      this.state.person_id === undefined ||
      this.state.cur_email === undefined ||
      this.state.cur_post === undefined ||
      this.state.home_land === undefined ||
      this.state.cur_no === undefined ||
      this.state.cur_phone === undefined ||
      this.state.sex_status === "" ||
      this.state.group_blood === undefined

      //this.state.height === "" ||
      //this.state.weight === ""
      // this.state.cur_phone === undefined ||
      // this.state.add_phone === undefined
    ) {
      this.setState({ pass: false }, () => {
        console.log("กรุณาป้อนข้อมูลให้ครบถ้วน");
      });
    } else {
      this.setState({ pass: true }, () => {
        console.log(newArr);
        this.props.getUpdateContent(2, newArr);
      });
    }

    // if (this.state.intro_name["value"] === 0) {
    //   this.setState({ pass: false }, () => {
    //     console.log("กรุณาป้อนข้อมูลให้ครบถ้วน");
    //   });
    // } else {
    //   this.setState({ pass: true }, () => {
    //     this.props.getUpdateContent(1, newArr);
    //   });
    // }
  }

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
            &nbsp;ประวัติส่วนตัวผู้สมัครงาน (Personal profile)
          </h4>
        </div>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              คำนำหน้าชื่อ (Title)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <Select
              value={this.state.intro_name}
              placeholder="--เลือก--"
              size="xsmall"
              name="intro_name"
              style={{ width: 300, padding: 5 }}
              options={[
                { value: "0", label: "นาย/Mr." },
                { value: "1", label: "นาง/Mrs." },
                { value: "2", label: "นางสาว/Ms." }
              ]}
              onChange={event => this.getDataContent("intro_name", event)}
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ชื่อจริง/Name(TH)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.first_name}
              onChange={event =>
                this.setState({ first_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '12px' }}>
              นามสกุลจริง/SurName(TH)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.last_name}
              onChange={event =>
                this.setState({ last_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ชื่อเล่น/NickName(TH)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.nick_name}
              onChange={event =>
                this.setState({ nick_name: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />
          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              First_Name(EN)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              autoComplete="off"
              value={this.state.first_name_eng}
              onChange={event =>
                this.setState({ first_name_eng: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              Last_Name(EN)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.last_name_eng}
              onChange={event =>
                this.setState({ last_name_eng: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              Nick_Name(EN)<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.nick_name_eng}
              onChange={event =>
                this.setState({ nick_name_eng: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />
          <Grid
            item
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            style={{ padding: 15 }}
          />
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              เลขประจำตัวประชาชน/identity card no.<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              onKeyPress={this.onKeyPress.bind(this)}
              maxLength="13"
              value={this.state.person_id}
              onChange={event =>
                this.setState({ person_id: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              เพศ/Sex<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <Select
              value={this.state.sex_status}
              placeholder="--เลือก--"
              size="xsmall"
              style={{ width: 300 }}
              options={[
                { value: "0", label: "ชาย" },
                { value: "1", label: "หญิง" }
              ]}
              onChange={event => this.getDataContent("sex_status", event)}
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              วันเกิด (คศ.)/Birthday<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <InputMask
              mask="9999-99-99"
              maskChar=" "
              style={{ width: "160px", height: "38px", borderRadius: "4px", outline: "none", padding: "11px" }}
              id="birthday"
              //label="ตัวอย่าง : 01/01/1990"
              placeholder="ปี(Y)-เดือน(M)-วัน(D)"
              type="input"
              autoComplete="off"
              value={this.state.birthday}
              onChange={event =>
                this.setState({ birthday: event.target.value }, () => {
                  this.calBirthDay();
                  this.getDataContentFull();
                  //console.log(this.state.birthday);
                })
              }
            /> <k style={{ color: "red" }}>*ตัวอย่าง 1990-12-01</k>
            {/* <TextField
            style={{ width: "100%" }}
              id="birthday"
              label="ตัวอย่าง : 01/12/2529"
              type="input"
              autoComplete="off"
              value={this.state.birthday}
              //   defaultValue={(new Date()).toISOString()}
              //   className={classes.textField}

              onChange={event =>
                this.setState({ birthday: event.target.value }, () => {
                  this.calBirthDay();
                  this.getDataContentFull();
                  //console.log(this.state.birthday);
                })
              }
              InputLabelProps={{
                shrink: true
              }}
            /> */}
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>อายุ/Age.</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value={this.state.age}
              onChange={event =>
                this.setState({ age: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid
            item
            lg={1}
            xl={1}
            xs={1}
            sm={1}
            md={1}
            style={{ padding: 3 }}
          />

          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              กรุ๊ปเลือด/Blood<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <Select
              value={this.state.group_blood}
              placeholder="--เลือก--"
              size="xsmall"
              style={{ width: 300 }}
              options={[
                { value: "0", label: "A" },
                { value: "1", label: "B" },
                { value: "2", label: "O" },
                { value: "3", label: "AB" }
              ]}
              onChange={event => this.getDataContent("group_blood", event)}
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ส่วนสูง/Height<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value={this.state.height}
              onChange={event =>
                this.setState({ height: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              น้ำหนัก/Weight<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              type="number"
              value={this.state.weight}
              onChange={event =>
                this.setState({ weight: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              สัญชาติ/Nationality<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.nationlity}
              onChange={event =>
                this.setState({ nationlity: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />

          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              เชื้อชาติ/Race<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.race}
              onChange={event =>
                this.setState({ race: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          {/* <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          /> */}
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ศาสนา/Religion<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.religion}
              onChange={event =>
                this.setState({ religion: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ภูมิลำเนาจังหวัด/Province<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.home_land}
              onChange={event =>
                this.setState({ home_land: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid
            item
            lg={7}
            xl={7}
            xs={7}
            sm={7}
            md={7}
            style={{ padding: 3 }}
          />
          <Grid
            item
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            style={{ padding: 3 }}
          >
            <hr />
          </Grid>

          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ที่อยู่ที่สามารถติดต่อได้ เลขที่/Address, contact number.<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_no}
              onChange={event =>
                this.setState({ cur_no: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              หมู่ที่/Village<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_group}
              onChange={event =>
                this.setState({ cur_group: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ชื่อหมู่บ้าน/Village name<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_village}
              onChange={event =>
                this.setState({ cur_village: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ถนน/Road<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_road}
              onChange={event =>
                this.setState({ cur_road: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              แขวง/District<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_zone}
              onChange={event =>
                this.setState({ cur_zone: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              เขต/County<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_area}
              onChange={event =>
                this.setState({ cur_area: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              จังหวัด/Province<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_city}
              onChange={event =>
                this.setState({ cur_city: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              รหัสไปรษณีย์/Post code<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_post}
              onChange={event =>
                this.setState({ cur_post: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>เบอร์โทรศัพท์/Phone number</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_tel}
              onChange={event =>
                this.setState({ cur_tel: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              เบอร์มือถือ/Mobile Phone Number<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_phone}
              onChange={event =>
                this.setState({ cur_phone: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>FAX</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_fax}
              onChange={event =>
                this.setState({ cur_fax: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              E-mail<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.cur_email}
              onChange={event =>
                this.setState({ cur_email: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <hr />

          {/* ที่อยู่ตามทะเบียนบ้าน */}
        </Grid>
        <hr />
        <Grid item lg={3} xl={3} xs={3} sm={3} md={3} style={{ padding: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleChange("checkedA")}
                onClick={this.chkFrom}
                value="checkedA"
                color="primary"
              />
            }
            label="ในกรณีข้อมูลที่อยู่เหมือนกัน/ In case the data is the same."
          />
        </Grid>
        <Grid
          container
          spacing={24}
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
        >
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 1 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              ที่อยู่ตามทะเบียนบ้าน เลขที่/House Registration Address<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_no}
              onChange={event =>
                this.setState({ add_no: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>หมู่ที่/Village</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_group}
              onChange={event =>
                this.setState({ add_group: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ชื่อหมู่บ้าน/Village name</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_village}
              onChange={event =>
                this.setState({ add_village: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>ถนน/Road</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_road}
              onChange={event =>
                this.setState({ add_road: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>แขวง/District</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_zone}
              onChange={event =>
                this.setState({ add_zone: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>

          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>เขต/County</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_area}
              onChange={event =>
                this.setState({ add_area: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>จังหวัด/Province</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_city}
              onChange={event =>
                this.setState({ add_city: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>รหัสไปรษณีย์/Post code</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_post}
              onChange={event =>
                this.setState({ add_post: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          />
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>เบอร์โทรศัพท์/Phone number</h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_tel}
              onChange={event =>
                this.setState({ add_tel: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right", fontSize: '14px' }}>
              เบอร์มือถือ/Mobile Phone Number<k style={{ color: "red" }}>*</k>
            </h6>
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_phone}
              onChange={event =>
                this.setState({ add_phone: event.target.value }, () => {
                  this.getDataContentFull();
                })
              }
            />
          </Grid>
          <Grid item lg={1} xl={1} xs={1} sm={1} md={1} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>FAX</h6>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <TextInput
              style={{ width: "100%" }}
              size="xsmall"
              value={this.state.add_fax}
              onChange={event =>
                this.setState({ add_fax: event.target.value }, () => {
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
