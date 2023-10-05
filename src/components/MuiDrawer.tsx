import { Drawer, Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SmallR3Button from "./SmallR3Button/SmallR3Button";
import { useTranslationContext } from '../LangContext';

function MuiDrawer() {

  const [isOpen, setIsOpen] = useState(false);

    const [home, setHome] = useState('Home');
    const [ser, setSer] = useState('Services');
    const [abo, setAbo] = useState('About');
    const [con, setCon] = useState('Contact');


    const { language } = useTranslationContext();

    useEffect(() => {
        if (language) {
            setHome('Domů');
            setSer('Služby');
            setAbo('O Nás');
            setCon('Kontakt');
        } else {
            setHome('Home');
            setSer('Services');
            setAbo('About');
            setCon('Contact');
        }
    }, [language]);

  return (
    <>
      <IconButton 
        onClick={() => setIsOpen(true)}
        sx={{ color: 'white', height: '50px'}}
        >
        <MenuIcon sx={{ color: 'white', height: '50px', width: '50px'}}/>
      </IconButton>

      <Drawer 
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        >

        <Box 
          p={2} width='200px' 
          textAlign='center' 
          role='list'
          sx={{ 
            backgroundColor: '#212121',
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100%',
           }} 
        >
          <NavLink style={{fontSize: '20px', margin: '50px 0 10px 0'}} to="/">{home}</NavLink>
          <NavLink style={{fontSize: '20px', margin: '10px'}} to="/about">{abo}</NavLink>
          <NavLink style={{fontSize: '20px', margin: '10px'}} to="/contact">{con}</NavLink>
          <NavLink style={{fontSize: '20px', margin: '10px 0 30px 0'}} to="/services">{ser}</NavLink>
          <SmallR3Button/>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;