import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js';
import { withRouter } from 'react-router-dom';
import '../styles/Design.scss';




//color scheme
// poppy #E63629 
//yarrow #EBB604 
//fawn #B3A190 
//teal #008080 


// hwi:
// hw: "Mi*chael"
// prs: Array(1)
// 0:
// mw: "ˈmī-kəl"
// sound:
// audio: "bixmic01"
// ref: "c"
// stat: "1"

// An audio reference URL should be in the following form: https://media.merriam-webster.com/soundc11/[subdirectory]/[base filename].wav where [base filename] equals the value of audio, and [subdirectory] is determined as follows:

// if audio begins with "bix", the subdirectory should be "bix",
// if audio begins with "gg", the subdirectory should be "gg",
// if audio begins with a number or punctuation (eg, "_"), the subdirectory should be "number",
// otherwise, the subdirectory is equal to the first letter of audio.
// For example, the URL for the object {"audio":"3d000001","ref":"c","stat":"1"} in the entry "3-D" would be: https://media.merriam-webster.com/soundc11/number/3d000001.wav



// https://media.merriam-webster.com/soundc11/bix/bixmic01.wav
const Design = props => {

	let audio = new Audio('https://media.merriam-webster.com/soundc11/bix/bixmic01.wav')

	const soundEffect = () => {
		audio.play()
	}

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
		{/* <p className='intro-header'>mi-chael</p> */}
<p className='intro-header'>definition: web developer{' '}</p>
<i className="fas fa-volume-up fa-2x" id='volume-icon' onClick={soundEffect}></i>
	</div>

    </div>

//font awesome has rotating option for svg icons, need to install fontawesome as dependency to use it for my button arrow
)}


const designWithRouter = withRouter(Design)

    export default designWithRouter;