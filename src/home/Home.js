import React from 'react'
import { withRouter } from 'react-router-dom';
import '../styles/home-page.scss';
import ParticleAnimation from '../particle_animation/ParticleAnimation'
import NameAudio from '../name audio/NameAudio';
import { Link } from "react-router-dom";



const Home = () => {




return(
	<>
    <div id='home-section' className='welcome-div' > 
	<ParticleAnimation />
	<div className='introduction'>
		<h2 className='intro-header'> mykol <em>(noun)</em></h2>
		<NameAudio />
		<p className='intro-header'>definition: web developer{' '}</p>
		{/* wrapping icon in link tag */}
			<Link
			to={`/about`}
			name='about'
			><i className="fas fa-arrow-right fa-2x" id='arrow-icon'/>
			</Link>
	</div>
    </div>
		</>
)}


const homeWithRouter = withRouter(Home)

    export default homeWithRouter;