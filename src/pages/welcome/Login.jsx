import "../../styles/login.css";
import logo from '../../img/login.png'; 
import { Link } from "react-router-dom";
import axios from "axios";
import enurl from "../../api/environment";

const Login = () => {
  const url = enurl.apiUrl;

  async function auth() {
    let mail = document.getElementById('eMail').value;
    let pass = document.getElementById('psw').value;
    let temp = {
      E_mail: mail,
      Password: pass
    }
    await axios
    .post(`${url}login`,temp)
    .then(function (response) {
      if(response.data === 0){ 
        console.log('response');
        sessionStorage.setItem("user_id",response.data);   
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
        <div className="login-pic"  >
          <img src={logo} alt="IMG" />
        </div>
        <form className="modal-content">
          <div > 
            <span className="login-title">
                <h1>Member Login</h1>
            </span>
            <div> 
              <label><b>E-Mail</b></label>
                <input type="text" placeholder="Enter Username" id="eMail"  />
              <label><b>Password</b></label> 
                <input type="password" placeholder="Enter Password" id="psw" /> 
              <button type="submit" onClick={auth}>Login</button>
            </div>
            <Link to="/register">Create your Account </Link> 
          </div>
          
        </form>
      </div>
    </div>
    
    </>
  )
};
  export default Login;