import React from 'react';
import MyResume from '../resume/my-resume.pdf';
import '../styles/Resume.scss';


const Resume = () => {
    return(
        <> 
            <a href={MyResume} target = "_blank" rel='noopener noreferrer' className='resume-link'>
                <mark style={{backgroundColor: '#008080', color: '#FFFFFF', opacity: '0.9'}}>Click here</mark>
                </a>
        </>
    )
}


export default Resume;