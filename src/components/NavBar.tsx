import { NavLink } from "react-router-dom";
import SmallR3Button from "./SmallR3Button/SmallR3Button";
import miniLogo from "../assets/logo/WhiteR3.png";

function NavBar() {
    return (
        <header>
          <nav>
            <NavLink className='homeImg' to="/">
            <input className="miniLogo" type="image" src={miniLogo}/>
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/services">Services</NavLink>
            <SmallR3Button/>
          </nav>
        </header>
    );
}

export default NavBar;