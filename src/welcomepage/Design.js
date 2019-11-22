import React, { useState } from 'react'
import Particles from 'react-particles-js';
import { Link, withRouter} from 'react-router-dom';
import '../styles/Design.scss';




const Design = props => {



return(
    <div className='welcome-div'>
       <Particles
	className='design-background'
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false,
	            }
			},
			// "shape": {
			// "type": "image",
			// // "src": ""
			// }
			"color": {
				"value": '#B0C4DE',
			},
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "speed": 1,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 3,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
				},
		
	        }
	    }
	}} />
	<div className='introduction'>
		<h2 className='intro-header'>Hi, I'm Mykol B.</h2>
		<h2 className='intro-header'>I'm a web developer.</h2>
	</div>

    </div>

//font awesome has rotating option for svg icons, need to install fontawesome as dependency to use it for my button arrow
)}


const designWithRouter = withRouter(Design)

    export default designWithRouter;