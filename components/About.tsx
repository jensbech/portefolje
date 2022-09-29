import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex items-center justify-center content-center'>
        <motion.p
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className='font-sans max-w-screen-sm text-center px-5 items-center content-center'>
            hei
            {/* HYDRATION ERROR Å FIKSE HER! */}
            {/* <p>
            I Nederland tok jeg psykologutdanning, men jeg har for det meste jobbet pasientnært i helse-, rus- og psykatri i Norge. 
            I senere tid har jeg også jobbet som karriereveileder. I grunn veiledet jeg meg selv til å ta sats for å gjøre yrke av teknologiinteressen min.
            </p>
            <p>
            I våren 2022 gjorde jeg en helomvending i karrieren: Lynutdanning som fullstack-utvikler gjennom Academic Work. Setember 2022 begynte jeg å jobbe som utvikler for Elkjøp. 
            </p> */}
        </motion.p>
    </div>
  )
}

export default About

// max-w-screen-sm