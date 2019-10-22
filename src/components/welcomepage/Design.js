import React from 'react'
import Particles from 'react-particles-js';
import { Link, withRouter} from 'react-router-dom';
import './Design.css';




const Design = (props) => {



const onClick = () => {
	console.log(onClick)
	props.history.push('/about')
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
	<Link to='/about'>
	<button 
	className='welcome-btn'
	onClick={onClick}
	>Click me
	&nbsp;  
	<i class="fas fa-arrow-alt-circle-right" data-fa-transform="rotate--30" />
	</button>
	</Link>
    </div>

//font awesome has rotating option for svg icons, need to install fontawesome as dependency to use it for my button arrow
)}


const designWithRouter = withRouter(Design)

    export default designWithRouter;