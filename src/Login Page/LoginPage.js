import "./login-page.css";

import Main_login from "../MainLogin/Main_login";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="top">
          <h2>Pankaj</h2>
          <div className="nav">
            <ul className="nav-links">
              <li> <Link   style={{ textDecoration:'none',color:'black' }} to='/' >Home</Link></li>
              <li>About</li>
              <li>Contact</li>
              <li> <Link   style={{ textDecoration:'none',color:'black'  }} to='/mainlogin' >Login</Link></li>
            </ul>
           
          </div>
        </div>
      </div>
    
    </>
  );
};

export default LoginPage;
