import React from 'react'
import { withRouter } from 'react-router-dom';
import '../styles/Home.scss';
import ParticleAnimation from '../particle_animation/ParticleAnimation'
import NameAudio from '../name audio/NameAudio';
import { Link, animateScroll as scroll, scroller, Events } from 'react-scroll';

const Home = () => {


const scrollToTop = () => {
	scroller.scrollTo()
}


return(
	<>
    <div id='home-section' className='welcome-div' > 
	<ParticleAnimation />
	<div className='introduction'>
		<h2 className='intro-header'> mykol <em>(noun)</em></h2>
		<NameAudio />
		<p className='intro-header'>definition: web developer{' '}</p>
		<button>
			<Link
			to='about-section'
			name='about'
			spy={true} 
            smooth={true} 
            offset={-100} 
            duration={700} 
            isDynamic={true} 
			onClick={() => scrollToTop()}>Test</Link>
			</button>
	</div>
    </div>
		</>
)}


const homeWithRouter = withRouter(Home)

    export default homeWithRouter;