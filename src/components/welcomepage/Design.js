import React, { useState } from 'react'
import Particles from 'react-particles-js';
import './Design.css';




const Design = () => {

return(
    <div>
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
	<button classsName='button'>Click me</button>
    </div>


)}



    export default Design;