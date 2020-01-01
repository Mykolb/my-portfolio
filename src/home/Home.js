import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js';
import { withRouter } from 'react-router-dom';
import '../styles/Home.scss';
import ParticleAnimation from '../particle_animation/ParticleAnimation'

const Home = () => {

// created variable for sound clip 
let audio = new Audio('https://media.merriam-webster.com/soundc11/bix/bixmic01.wav')

const soundEffect = () => {
	audio.play()
}

return(
	<>
    <div id='home-section' className='welcome-div' > 
	<ParticleAnimation />
	<div className='introduction'>
		<h2 className='intro-header'> mykol <em>(noun)</em></h2>
		<i className="fas fa-volume-up fa-2x" id='volume-icon' onClick={soundEffect}></i>
		<p className='intro-header'>definition: web developer{' '}</p>
	</div>
	
    </div>
		</>
//font awesome has rotating option for svg icons, need to install fontawesome as dependency to use it for my button arrow
)}


const homeWithRouter = withRouter(Home)

    export default homeWithRouter;