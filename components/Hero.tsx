import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "utvikler",
            "psykolog",
            "korist",
            "skribent?",
            "bergenser",
            "gamer",
            "grei gutt",
            "dnd-fan",
            "(╯°□°)╯︵ ┻━┻",
            "...",
        ],
        loop: 5,
        delaySpeed: 7000,
        deleteSpeed: 1,
        typeSpeed: 100,
        
    });

  return (

    <>
    <div className='font-poppins pt-6 pb-10 flex flex-col items-center justify-center text-center overflow-hidden select-none'>
        
        <h1>
            <span className='text-3xl'>Jens Bech Sørensen </span>
            <br></br>
            <span style={{ color: '#007FB1' }} className='text-3xl'>{text}
            <Cursor 
                cursorColor="#007FB1" 
                cursorStyle='_'
                /></span>
        </h1>

    </div>
    </>
  )
}

export default Hero 