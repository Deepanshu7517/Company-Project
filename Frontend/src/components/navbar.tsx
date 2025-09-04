import logo from "../assets/LOGO.png";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="iotelligence" className="navbar-logo" />
    </div>
  );
};

export default Navbar;
