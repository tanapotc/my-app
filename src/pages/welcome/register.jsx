import "../../styles/login.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import enurl from "../../api/environment";
// import { useState } from "react";

const Register = () => {
  const url = enurl.apiUrl;
  async function reg() {
    let eMail = document.getElementById('eMail').value; 
    let uname = document.getElementById('uname').value; 
    let psw   = document.getElementById('psw').value; 
    let cpsw  = document.getElementById('cpsw').value; 
    if(psw === cpsw){
      let temp = {
        Username: uname,
        Password: psw,
        E_mail: eMail,
      }
      await axios
      .post(`${url}register`,temp)
      .then(function (response) {
        if(response.data.length > 0){ 
          alert(response.data);
          window.location.href = "/login";
        }else{
          console.log(response)
        }
      }).catch(ex =>{
        throw ex
      })
    } else {
      alert('password is not matched')
    }
  }
  
    return (
      <>
      <div className="container-login">
        <div className="wrap-container">
          <div className="modal-content">
            <div > 
              <span className="login-title">
                  <h1>Register</h1>
              </span>
              <div className="wrap-input"> 
                <label><b>E-mail</b></label>
                  <input type="text" placeholder="Enter E-mail" name="eMail" id="eMail" required />
                <label><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" id="uname" required />
                <label><b>Password</b></label> 
                  <input type="password" placeholder="Enter Password" name="psw" id="psw" required /> 
                <label><b>Confirm Password</b></label> 
                  <input type="password" placeholder="Enter Password" name="cpsw" id="cpsw" required />  
              </div>
              <button onClick={reg}>SUBMIT</button> 
            </div>
          </div>
 
          
        </div>
      </div>
      </>
    );
  };
  
  export default Register;