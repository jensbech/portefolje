import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function TypeWriter() {
    const [text, count] = useTypewriter({
        words: [
            "utvikler",
            "psykolog",
            "¯\\_(ツ)_/¯",
            "GM i Rocket League",
        ],
        delaySpeed: 5000,
        deleteSpeed: 10,
        typeSpeed: 100,
        loop: true
    });

  return (
    <div className='pb-4 font-poppins pt-8 flex flex-col items-center justify-center text-center overflow-hidden select-none'>
        <h1>
            <span className='text-4xl'>Jens Bech Sørensen </span>
            <br></br>
            <span style={{ color: '#007FB1' }} className='text-4xl'>{text}
            <Cursor 
                cursorColor="#FFFFFF" 
                cursorStyle='_'
                /></span>
        </h1>
    </div>
  )
}
