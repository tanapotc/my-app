import '../styles/body.css'
import axios from "axios";
import enurl from "../api/environment";
import React, { useState } from "react";
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper'; 
const Home = () => {
  const url = enurl.apiUrl;
  const [UserList,setUserList] = useState([]);
  const getUser = async () =>  {  
    const myElement = document.getElementById('showTable'); 
     if(myElement.style.display === "none"){
      try{
       await axios.get(`${url}users`).then(response => { 
          setUserList(response.data);  
          myElement.style.display = "table";
        }).catch(ex => console.error(ex)); 
      }catch(ex){
        throw ex;
      }
     } else {
      myElement.style.display = "none";
     }
  } 
  return (
    <>
      <section className="card">
        <button className="btn btn-primary" onClick={ getUser } >Show</button>
        <div className="userTable">
          <table id='showTable' >
            <tr> 
              <th>ID</th>
              <th>Username</th>
              <th>E-Mail</th>
            </tr>
            {UserList.map((val,key ) => {
              return (
                <tr> 
                  <td>{val.User_ID}</td>
                  <td>{val.Username}</td>
                  <td>{val.E_mail}</td> 
                </tr>
              )
            })} 
          </table>
        </div>
      </section>
    </> 
  );
};

export default Home;