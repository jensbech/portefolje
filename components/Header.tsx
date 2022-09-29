import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'

type Props = {}

const socialsize = 50;

function Header({}: Props) {
  return (
    
    <header className='
    
    top-0 
    flex items-start 
    justify-between 
    max-w-7xl 
    mx-auto 
    z-0
    xl:items-center 
    p-2
    bg-black
    '>

        <motion.div 
          initial={{
            x: -50,
            opacity: 0,
            scale:0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
            transition={{
            duration: 1
          }}

          className="flex flex-row items-center">
              <SocialIcon 
                  url="https://www.linkedin.com/in/jensbs/"
                  fgColor="#007FB1"         
                  bgColor="black"       
                  style={{ height: socialsize, width: socialsize}} 
                  />
                  
              <SocialIcon 
                  url="https://github.com/jebeso" 
                  fgColor="#F0F6FC" 
                  bgColor="black"
                  style={{ height: socialsize, width: socialsize}}                   
                  />

        </motion.div>

        <motion.div 
          initial={{
            x: 50,
            opacity: 0,
            scale:0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
            transition={{
            duration: 1
          }}
          className='flex flex-row items-center text-gray cursor-pointer'>
          
            <SocialIcon 
                url="mailto:jens@bechsor.no" 
                fgColor="white"
                bgColor="black"
                style={{ height: socialsize, width: socialsize}} 
                />
        </motion.div>
        
    </header>
  )
}



export default Header