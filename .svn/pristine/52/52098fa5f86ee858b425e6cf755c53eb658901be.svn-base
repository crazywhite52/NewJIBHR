import jwt from "jwt-simple";

export default class ApiService {
  constructor(domain) {
    this.domain = "http://172.18.0.135:8013";
    //  this.host_get = "http://172.18:5011/gateway/get/routeapiget";
    this.host_get =
      "http://" + window.location.hostname + ":5011/gateway/get/routeapiget";
    //  this.host_post = "http://172.18:5011/gateway/post/routeapipost";
    this.host_post =
      "http://" + window.location.hostname + ":5011/gateway/post/routeapipost";

    this.brdata = "http://172.18.0.135:8013/hr/branchdata";

    //this.token = "VmriPq93P-jQc=HItb6IpU~go?#UAQ";
  }

  OgDepartment() {
    var mis = "mis999*";
    var secretcode = "123456";
    var secret = jwt.encode(secretcode, mis);
    var token = jwt.encode("VmriPq93P-jQc=HItb6IpU~go?#UAQ", secretcode);
    var urlbr = jwt.encode(
      "http://172.18.0.135:8013/hr/branchdata",
      secretcode
    );
    try {
      let bodypass = Array([]);
      bodypass = {
        Urlpass: urlbr,
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": token,
          "mis-access-secret": secret
        },
        body: JSON.stringify(bodypass)
      };
      //const urlOg1 = "http://172.18.24.113:5013/gateway/api/routeapi";
      const urlOg1 = "http://" + window.location.hostname + ":5013/gateway/api/routeapi";
      return fetch(urlOg1, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (error) {
      return error;
    }
  }
  OgDepartment2() {
    var mis = "mis999*";
    var secretcode = "123456";
    var secret = jwt.encode(secretcode, mis);
    var token = jwt.encode("VmriPq93P-jQc=HItb6IpU~go?#UAQ", secretcode);
    var urlbr = jwt.encode("http://172.18.0.135:8013/hr/position", secretcode);
    try {
      let bodypass = Array([]);
      bodypass = {
        Urlpass: urlbr,
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": token,
          "mis-access-secret": secret
        },
        body: JSON.stringify(bodypass)
      };
      //const urlOg2 = "http://172.18.24.113:5013/gateway/api/routeapi";
      const urlOg2 = "http://" + window.location.hostname + ":5013/gateway/api/routeapi";
 
      return fetch(urlOg2, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (error) {
      return error;
    }
  }
  addregister(result){
    var mis = "mis999*";
    var secretcode = "123456";
    var secret = jwt.encode(secretcode, mis);
    var token = jwt.encode("VmriPq93P-jQc=HItb6IpU~go?#UAQ", secretcode);
    var urlbr = jwt.encode("http://172.18.0.135:8013/hr/update/addregister", secretcode);

    try {
        let bodypass = Array();
        bodypass = {
          Urlpass: urlbr,
          Datapass: result,
          Methodpass: "POST"
        };
        var options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "mis-access-token": token,
            "mis-access-secret": secret
          },
          body: JSON.stringify(bodypass)
        };
        const urladd ="http://" + window.location.hostname + ":5013/gateway/api/routeapi";
        return fetch(urladd, options)
          .then(response => response.json())
          .then(responseData => {
            return Promise.resolve(responseData);
          });
      } catch (error) {
        return error;
      }

  }
  


}
