import React from 'react'
import { withRouter } from 'react-router-dom';
import '../styles/Home.scss';
import ParticleAnimation from '../particle_animation/ParticleAnimation'
import NameAudio from '../name audio/NameAudio';

const Home = () => {

return(
	<>
    <div id='home-section' className='welcome-div' > 
	<ParticleAnimation />
	<div className='introduction'>
		<h2 className='intro-header'> mykol <em>(noun)</em></h2>
		<NameAudio />
		<p className='intro-header'>definition: web developer{' '}</p>
	</div>
	
    </div>
		</>
)}


const homeWithRouter = withRouter(Home)

    export default homeWithRouter;