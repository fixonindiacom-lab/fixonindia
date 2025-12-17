import { NavLink } from "react-router-dom";
import "./PageNotFound.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PageNotFound = () => {
  return (
   <>
    <Navbar/>
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">Oops! The page you're looking for doesn't exist.</p>
        <NavLink to="/" className="notfound-btn">
          Go Back Home
        </NavLink>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default PageNotFound;
