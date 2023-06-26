import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavbarWrapper">
        <div className="NavbarLeft">
          <p>
            <b>A</b>ravinth.
          </p>
        </div>
        <div className="NavbarRight">
          <div className="NavbarRightText">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="NavbarRightText">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="NavbarRightText">
            <Link className="link" to="/course">
              Courses
            </Link>
          </div>
          <div className="NavbarRightText">
            <Link className="link" to="/project">
              Portfolio
            </Link>
          </div>
          <div className="NavbarRightText">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
