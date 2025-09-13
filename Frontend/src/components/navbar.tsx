import logo from "../assets/LOGO.png";
import "../css/global.css";

const Navbar = () => {
console.log(location);
  return (
    <div className="navbar fixed">
      <img src={logo} alt="iotelligence" className="navbar-logo" />
    </div>
  );
};

export default Navbar;
