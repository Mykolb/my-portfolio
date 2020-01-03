import React from 'react'
import Particles from 'react-particles-js';

const ParticleAnimation = () => {
    return(
        <>
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
			"shape": {
			"type": "circle",
			"stroke": {
				"width": 1,
				"color": '#B3A190',
			}
			},
			"color": {
				"value": [ '#E63629', '#EBB604', '#008080' ]
			},
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "speed": 2,
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
	            "out_mode": "bounce"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": ["bubble", "push"]
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 15,
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
				},
		
	        }
	    }
	}} />
        </>
    )
}




export default ParticleAnimation;