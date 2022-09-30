import { motion } from 'framer-motion'
import React, { Component } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useState } from 'react'; 

import About from '../components/About'
import HeroBlurb from '../components/HeroBlurb'
import { setTimeout } from 'timers';


type Props = {}

export default function Skills({}: Props) {
    const [isShown, setIsShown] = useState(false);

  return (
    <div className='flex items-center justify-center content-center'>
        <div className='font-sans text-lg max-w-screen-sm text-center px-5 items-center content-center'>


            <HeroBlurb></HeroBlurb>
        {/* <button type="button" onLoad={timer} className="font-sans pt-1 pb-1 px-4 border-none py-2.5 bg-sky-800 text-white text-md rounded-full hover:bg-sky-700">📖 Ferdigheter 🖱️</button>
        <div>
            {isShown && <HeroBlurb />} */}
        {/* </div> */}
        </div>
    </div>
  )
}