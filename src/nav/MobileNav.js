import React, { useState, useEffect } from 'react'
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
            height: '65px', 
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
            >About</NavLink>
            <NavLink
            to={`/projects`}
            activeClassName='active'  
            name='projects'
            >Projects</NavLink>
            <NavLink 
            to={`/contact-page`}
            activeClassName='active'  
            name='contacts'
            >Contact</NavLink>
            <NavLink
            to={`/sign-in`}
            activeClassName='active'  
            name='signin'
            >Sign In</NavLink>
          </Menu>
        </div>
      );
    }




