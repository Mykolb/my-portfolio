import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuTwoToneIcon  from '@material-ui/icons/MenuTwoTone';


export default function MobileNav() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    
    const handleClick = e => {
      setAnchorEl(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setOpenMenu(false)
    };

     //changed width from 5% to auto
    return (
        <div className='nav-wrapper'> 
          <MenuTwoToneIcon 
             id='ham-icon' 
             onClick={handleClick}
             >
            Open Menu
          </MenuTwoToneIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            //prevents popup err from displaying due to max-height
            marginThreshold={0}
            >
            <NavLink
            to={`/about`}
            activeClassName='active'  
            name='/about'
            style={{color: '#B3A190', textDecoration: 'none'}}
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            onClick={handleClose}
            >About</NavLink>
            <NavLink
            to={`/projects`}
            activeClassName='active'  
            name='projects'
            style={{color: '#B3A190', textDecoration: 'none'}}
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            onClick={handleClose}
            >Projects</NavLink>
            <NavLink 
            to={`/contact`}
            activeClassName='active'  
            name='contacts'
            style={{color: '#B3A190', textDecoration: 'none'}}
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            onClick={handleClose}
            >Contact</NavLink>
            <NavLink
            to={`/sign-in`}
            activeClassName='active'  
            name='signin'
            style={{color: '#B3A190', textDecoration: 'none'}}
            activeStyle={{ color: "#E63629", cursor: "pointer", textDecoration: 'none' }}
            onClick={handleClose}
            >Sign In</NavLink>
          </Menu>
        </div>
      );
    }




  