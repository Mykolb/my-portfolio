import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuTwoToneIcon  from '@material-ui/icons/MenuTwoTone';



export default function MobileNav() {

    const [anchorEl, setAnchorEl] = useState(null);
    

    const handleClick = e => {
      setAnchorEl(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };



     //changed width from 5% to auto
    return (
        <div className='nav-wrapper'> 
          <MenuTwoToneIcon style={{ 
            height: '50px', 
            width: 'auto',
             }}   
             onClick={handleClick}>
            Open Menu
          </MenuTwoToneIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <NavLink
            to={`/about`}
            activeClassName='active'  
            name='/about'
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            >About</NavLink>
            <NavLink
            to={`/projects`}
            activeClassName='active'  
            name='projects'
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            >Projects</NavLink>
            <NavLink 
            to={`/contact-page`}
            activeClassName='active'  
            name='contacts'
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            >Contact</NavLink>
            <NavLink
            to={`/sign-in`}
            activeClassName='active'  
            name='signin'
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            >Sign In</NavLink>
          </Menu>
        </div>
      );
    }




