import React, { useState, useEffect} from 'react';
import {Link, Route } from "react-router-dom"
import './Nav.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const Nav = () => {
    const [page, setPage] = useState()

    //    const scrollToTop = () => {
    //     scroll.scrollToTop();
    //   };

    //   const scrollToBottom = () => {
    //       scroll.scrollToBottom()
    //   }

    // const scrollTo = () => {
    //     scroll.scrollTo()
    // }
    

    return(
        <nav className='nav-wrapper'  >
            <ul className='nav-ul'>
            <a href='#' className='active'>Home</a>
            <a href='#' className='nav-a'>About</a>
            <a href='#' className='nav-a'>Projects</a>
            <a href='#' className='nav-a'>Contact</a>
            </ul>
        </nav>
    )
  
    }

export default Nav;