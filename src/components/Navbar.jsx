import { Outlet, Link } from "react-router-dom";
import "../styles/navbar.css"; 
const Navbar = () => {
    const name = sessionStorage.getItem('username')
    function logout() {
        sessionStorage.setItem('username','')
        sessionStorage.setItem('user_id','')
        sessionStorage.setItem("isLoggedIn",false); 
    }
    
  return (
    <>
      <nav className="flex-container">
        <div className="logo">
            <h1>Welcome : {name}</h1>
        </div>
        <ul className="menu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login" onClick={logout}>Loguot</Link>
          </li>
        </ul>
      </nav>
      <section className="body-container">
      <Outlet />
      </section>
    </>
  )
};

// const styles = {
//     text:{
//         fontSize: "1rem",
//     },
//     flexContainer:{
//         display: "flex",
//         margin: "10px",
//         padding: "20px",
//         fontSize: "1rem",
//         flexwrap: "wrap",
//         justifyContent: "flex-end",
//     },
//     section: {
//       fontFamily: "-apple-system",
//       fontSize: "1rem",
//       fontWeight: 1.5,
//       lineHeight: 1.5,
//       color: "#292b2c",
//       backgroundColor: "#fff",
//       padding: "0 2em"
//     },
//     wrapper: {
//       textAlign: "center",
//       maxWidth: "950px",
//       margin: "0 auto",
//       border: "1px solid #e6e6e6",
//       padding: "40px 25px",
//       marginTop: "50px"
//     },
//     avatar: {
//       margin: "-90px auto 30px",
//       width: "100px",
//       borderRadius: "50%",
//       objectFit: "cover",
//       marginBottom: "0"
//     },
//     quote: {
//       lineHeight: 1.5,
//       fontWeight: 300,
//       marginBottom: "25px",
//       fontSize: "1.375rem"
//     },
//     name: {
//       marginBottom: "0",
//       fontWeight: 600,
//       fontSize: "1rem"
//     },
//     position: { fontWeight: 400 }
//   };
  
export default Navbar;