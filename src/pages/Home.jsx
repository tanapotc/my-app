import '../styles/body.css'
import axios from "axios";
import enurl from "../api/environment";
import React, { useState ,useEffect} from "react";
 
const Home = () => { 
  const url = enurl.apiUrl;
  const [UserList,setUserList] = useState([]);
  
  useEffect(() => {
    document.title = 'Home';
    const getData = async () =>  {  
      const myElement = document.getElementById('showTable'); 
      myElement.style.display = "table"; 
        try{
         await axios.get(`${url}users`)
         .then(response => { 
            setUserList(response.data);   
          }).catch(ex => console.error(ex)); 
        }catch(ex){
          throw ex;
        } 
    }
    getData()
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
      <section className="card">
        {/* <button className="btn btn-primary" onClick={ getUser } >Show</button> */}
        <div className="userTable">
          <table id='showTable'>
            <tr> 
              <th>ID</th>
              <th>Username</th>
              <th>E-Mail</th>
            </tr>
            {UserList.map((val) => {
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