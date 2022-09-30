import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "utvikler",
            "psykolog",
            "(╯°□°)╯︵ ┻━┻",
            "hobbydesigner",
            "GM i Rocket League",
        ],
        delaySpeed: 6000,
        deleteSpeed: 1,
        typeSpeed: 100,
        loop: true
        
    });

  return (

    <>
    <div className='font-poppins pt-6 flex flex-col items-center justify-center text-center overflow-hidden select-none'>
        
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
    </>
  )
}

export default Hero 