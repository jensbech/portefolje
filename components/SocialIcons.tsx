import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'

const socialsize = 55;

export default function SocialIcons() {

  const hover:string = "opacity-70 hover:opacity-100 transition duration-300 ease-in-out"

  return (
    
    <header>
        <motion.div 
          initial={{
            x: 0,
            opacity: 0,
            scale:0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            ease: "easeOut", 
            duration: 0.5
          }}
          className="justify-center flex">

            <div className={hover}>
              <SocialIcon 
                  url="https://www.linkedin.com/in/jensbs/"
                  fgColor="#007FB1"         
                  bgColor="black"       
                  style={{ height: socialsize, width: socialsize}} 
                  />
            </div>
                  
            <div className={hover}>
              <SocialIcon 
                  url="https://github.com/jebeso" 
                  fgColor="#F0F6FC" 
                  bgColor="black"
                  style={{ height: socialsize, width: socialsize}}                   
                  />
            </div>

            <div className={hover}>
              <SocialIcon 
                  url="mailto:jens@bechsor.no" 
                  fgColor="white"
                  bgColor="black"
                  style={{ height: socialsize, width: socialsize}} 
                  />
            </div>
                  
        </motion.div>
    </header>
  )
}
