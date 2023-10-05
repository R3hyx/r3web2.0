import { NavLink } from "react-router-dom";
import SmallR3Button from "./SmallR3Button/SmallR3Button";
import miniLogo from "../assets/logo/WhiteR3.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import MuiDrawer from './MuiDrawer';
import { useTranslationContext } from "../LangContext";

function NavBar() {
    const [navName, setNavName] = useState<string | undefined>(undefined);
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const currentPath = location.pathname;
        
        if (currentPath === "/") {
            setNavName('home-nav');
        } else {
            setNavName('def-nav');
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Update windowWidth when the window resizes
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const [ser, setSer] = useState('Services');
    const [abo, setAbo] = useState('About');
    const [con, setCon] = useState('Contact');


    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setSer('Služby');
            setAbo('O Nás');
            setCon('Kontakt');
        } else {
            setSer('Services');
            setAbo('About');
            setCon('Contact');
        }
    }, [language]);

    return (
        <header>
          { windowWidth > 800 ? (
            <nav className={navName}>
                <NavLink className='homeImg' to="/">
                    <input className="miniLogo" type="image" alt='R3Tech digital solutions' src={miniLogo}/>
                </NavLink>

                <button className="aButton">
                    <NavLink to="/about">{abo}</NavLink>
                </button>

                <button className="aButton">
                    <NavLink to="/contact">{con}</NavLink>
                </button>

                <button className="aButton">
                    <NavLink to="/services">{ser}</NavLink>
                </button>

                <div className="smallBtn">
                    <SmallR3Button/>
                </div>
            </nav>
          ) : (
            <nav className='home-nav'>
                <NavLink className='homeImg' to="/">
                    <input className="miniLogo" type="image" alt='R3Tech digital solutions' src={miniLogo}/>
                </NavLink>
                <MuiDrawer/>
            </nav>
          )}
        </header>
    );
}

export default NavBar;
