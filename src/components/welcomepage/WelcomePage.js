import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
// import { Link } from 'react-router-dom'
import './WelcomePage.css'
import Animation from './animation.mp4'


const words  = ['Hi', "I'm", 'Mykol']
const config = { mass: 5, tension: 2000, friction: 200 }

const WelcomePage = () => {
  const [toggle, set] = useState(true)
  const trail = useTrail(words.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div>
        <video loop autoPlay className='video'>
        <source src={Animation} type='video/mp4' />
        </video>
      <div className="trails-main" onClick={() => set(state => !state)}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={words[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{words[index]}</animated.div>
          </animated.div>
        ))}
        {/* <Link to='about'> */}
         <button className='button'>Click to see more</button>
         {/* </Link> */}
         </div>
    </div>
  )
}


export default WelcomePage;




