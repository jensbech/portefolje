import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function AboutBlog({}: Props) {
  return (
    <>
            <h3 className='pt-12 font-sans text-center items-center content-center'>Skriving</h3>
    <div className='flex items-center justify-center content-center'>
        <motion.p
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className='font-sans max-w-screen-sm text-center px-5 items-center content-center'>
I tillegg til alt annet liker jeg også å skrive. Alt det havner under her. </motion.p>
    </div>
    </>
  )
}

export default AboutBlog

// max-w-screen-sm