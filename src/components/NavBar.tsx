import { NavLink } from "react-router-dom";
import SmallR3Button from "./SmallR3Button/SmallR3Button";
import miniLogo from "../assets/logo/WhiteR3.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function NavBar() {

    const [navName, setNavName] = useState<string | undefined>(undefined);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        
        if (currentPath === "/") {
            setNavName('home-nav');
        } else {
            setNavName('def-nav');
        }
    }, [location.pathname]);


    return (
        <header>
          <nav className={navName}>
            <NavLink className='homeImg' to="/">
            <input className="miniLogo" type="image" alt='R3 Logo' src={miniLogo}/>
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