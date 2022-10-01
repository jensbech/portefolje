import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'

const socialsize = 55;

export default function SocialIcons() {
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
