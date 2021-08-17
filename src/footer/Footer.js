import React from 'react'
import '../styles/Footer.scss';

 const Footer = () => {
     return(
         <div className='footer-container'>
             <div className='icons'>

             <a href='https://github.com/Mykolb' target='_blank' rel='noopener noreferrer'>
                <i className="fab fa-github fa-2x  fa-border github" 
                id='icon1'
                />
            </a>

            <a href='https://Linkedin.com' target='_blank' rel='noopener noreferrer'>
                <i className="fab fa-linkedin-in fa-2x  fa-border linkedin" 
                 id='icon2'
                 />
            </a>

            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className="fab fa-twitter fa-2x  fa-border twitter" 
                id='icon3'
                />
            </a>
            </div>
        </div>
     )
 }
 

 export default Footer;