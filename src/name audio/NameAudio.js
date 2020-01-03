import React from 'react'
//created component for sound clip 


const NameAudio = () => {

    let audio = new Audio('https://media.merriam-webster.com/soundc11/bix/bixmic01.wav')

	const soundEffect = () => {
		audio.play()
  }

    return <i className="fas fa-volume-up fa-2x" id='volume-icon' onClick={soundEffect}></i>
}




export default NameAudio