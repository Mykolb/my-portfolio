import React from 'react';
import nodeIcon from '../assets/icons/nodejs.png';
import jsIcon from '../assets/icons/js.png';
import reactIcon from '../assets/icons/react.png';
import cssIcon from '../assets/icons/css3.png';
import htmlIcon from '../assets/icons/html5.png';
import sassIcon from '../assets/icons/sass.png';


const Skills = () => {
    return(
        <section className='skills-icons'>
            <img src={htmlIcon} alt='HTML5 logo'/>
            <img src={cssIcon} alt='CSS3 logo'/>
            <img src={jsIcon} alt='JavaScript logo'/>
            <img src={reactIcon} alt='react logo'/>
            <img src={nodeIcon} alt='Node logo'/>
            <img src={sassIcon} alt='SASS log'/>
        </section>
    )
}



export default Skills;