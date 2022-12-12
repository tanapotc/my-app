import "../../styles/login.css";
import logo from '../../img/login.png'; 
import { Link } from "react-router-dom";
import axios from "axios";
import enurl from "../../api/environment";

const Login = () => {
  const url = enurl.apiUrl;
  async function auth() {
    let temp = {
      Username: document.getElementById('eMail').value,
      Password: document.getElementById('psw').value
    }
    await axios.post(`${url}login`,temp).then(response => {
      if(response.data === 0){
        console.log(response)
        sessionStorage.setItem();   
      }else{
        console.log(response)
      }
    }).catch(ex =>{
      throw ex
    })
  }
  return (
    <>
    <div className="container-login">
      <div className="wrap-container">
        <div className="login-pic" style={{willChange:'tranform'}&&{
          transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)'}}>
          <img src={logo} alt="IMG" />
        </div>
        <form className="modal-content">
          <div > 
            <span className="login-title">
                <h1>Member Login</h1>
            </span>

            <div className="wrap-input"> 
              <label for="uname" id="E_mail"><b>E-Mail</b></label>
                <input type="text" placeholder="Enter Username" name="uname"   />
              <label for="psw" id="psw"><b>Password</b></label> 
                <input type="text" placeholder="Enter Password" name="uname"   /> 
              
              <button type="submit" onClick={auth}>Login</button>
              
              <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
              </label>
              <Link to="/register">Create your Account <i>fa-long-arrow-right</i></Link> 
            </div>
          </div>
          
        </form>
      </div>
    </div>
    
    </>
  )
};
  export default Login;