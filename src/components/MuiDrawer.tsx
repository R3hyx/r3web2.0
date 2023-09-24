import { Drawer, Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SmallR3Button from "./SmallR3Button/SmallR3Button";

function MuiDrawer() {

  const [isOpen, setIsOpen] = useState(false);

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
          p={2} width='150px' 
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
          <NavLink style={{margin: '10px'}} to="/">Home</NavLink>
          <NavLink style={{margin: '10px'}} to="/about">About</NavLink>
          <NavLink style={{margin: '10px'}} to="/contact">Contact</NavLink>
          <NavLink style={{margin: '10px 0 30px 0'}} to="/services">Services</NavLink>
          <SmallR3Button/>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;