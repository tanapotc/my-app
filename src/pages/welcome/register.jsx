import "../../styles/login.css";
// import logo from '../../img/login.png'; 
// import { Link } from "react-router-dom";
// import axios from "axios";
// import enurl from "../../api/environment";
// import { useState } from "react";

const Register = () => {

  
  const reg = () =>  {  
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
      console.log(temp)
      // axios.post(enurl.apiUrl+'register').then(response => { 
        
      //     setUserList(response.data);  
      //   }); 
    }else{
      alert('password is not matched')
    }
    
    let temp = {
      Username: uname,
      Password: psw,
      E_mail: eMail,
    }
    console.log(temp)
    // axios.post(enurl.apiUrl+'register').then(response => { 
      
    //     setUserList(response.data);  
    //   }); 
}

// const uname = this.state.uname;
// const psw = this.state.uname;
// const cpsw = this.state.uname;
    return (
      <>
      <div className="container-login">
        <div className="wrap-container">
          <form className="modal-content">
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
                  <input type="text" placeholder="Enter Password" name="psw" id="psw" required /> 
                <label><b>Confirm Password</b></label> 
                  <input type="text" placeholder="Enter Password" name="cpsw" id="cpsw" required />  
              </div>
              <button onClick={reg}>SUBMIT</button> 
            </div>
          </form>
 
          
        </div>
      </div>
      </>
    );
  };
  
  export default Register;