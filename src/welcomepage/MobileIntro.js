import React from 'react'



const MobileIntro = () => {

    let audio = new Audio('https://media.merriam-webster.com/soundc11/bix/bixmic01.wav')

    const soundEffect = () => {
        audio.play()
    }

    return(
        <div className='mobile-intro'>
            <h2 className='intro-header'> mykol <em>(noun)</em></h2>
		<i className="fas fa-volume-up fa-2x" id='volume-icon' onClick={soundEffect}></i>
		<p className='intro-header'>definition: web developer{' '}</p>
        </div>
    )
}



export default MobileIntro;