import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js';
import { withRouter } from 'react-router-dom';
import '../styles/Design.scss';

const Design = () => {


let audio = new Audio('https://media.merriam-webster.com/soundc11/bix/bixmic01.wav')

const soundEffect = () => {
	audio.play()
}

return(
	<>
    <div classNme='welcome-div'> 
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
				"width": 2,
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
		<h2 className='intro-header'> mykol <em>(noun)</em></h2>
		<i className="fas fa-volume-up fa-2x" id='volume-icon' onClick={soundEffect}></i>
		<p className='intro-header'>definition: web developer{' '}</p>
	</div>
	
    </div>
		</>
//font awesome has rotating option for svg icons, need to install fontawesome as dependency to use it for my button arrow
)}


const designWithRouter = withRouter(Design)

    export default designWithRouter;