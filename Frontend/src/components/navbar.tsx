import logo from "../assets/LOGO.png";
import "../css/global.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="iotelligence" className="navbar-logo" />
    </div>
  );
};

export default Navbar;
