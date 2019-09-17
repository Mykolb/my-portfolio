import React from 'react'
import './Footer.css'
//fa-spin makes icons spin 

 const Footer = () => {
     return(
         <div className='footer-container'>
             <div classname='icons'>

             <a href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
                <i className="fab fa-github fa-2x  fa-border" 
                id='icon1'
                />
            </a>

            <a href='https://Linkedin.com' target='_blank' rel='noopener noreferrer'>
                <i className="fab fa-linkedin-in fa-2x  fa-border" 
                 id='icon2'
                 />
            </a>

            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className="fab fa-twitter fa-2x  fa-border" 
                id='icon3'
                />
            </a>
            </div>
        </div>
     )
 }
 

 export default Footer;