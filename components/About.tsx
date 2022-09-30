import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex items-center justify-center content-center'>
        <motion.p
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className='font-sans text-lg max-w-screen-sm text-center px-5 items-center content-center'>
            I Nederland tok jeg psykologutdanning, 
            men for det meste har jeg jobbet pasientnært med helse-, rus- og psykatri i Oslo. 
            I senere tid har jeg jobbet som karriereveileder, 
            men endte opp med å veilede meg til selv til et karriereskifte.
            Våren 2022 tok jeg intensivutdanning i C# .NET
            gjennom Academic Work. 
            I september 2022 begynte jeg å jobbe som utvikler for Elkjøp.
        </motion.p>
    </div>
  )
}

export default About

// max-w-screen-sm