import React from 'react';
import MyResume from '../resume/my-resume.pdf';
import '../styles/Resume.scss';


const Resume = () => {
    return(
        <> 
            <a href={MyResume} target = "_blank" rel='noopener noreferrer' className='resume-link'>
                <mark>Click here</mark>
                </a>
        </>
    )
}


export default Resume;