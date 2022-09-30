import { motion } from 'framer-motion'
import React from 'react'
import ShowCaseItem from './ShowCaseItem'

type Props = {}


const css:string = "gap-10 pb-4 flex font-sans text-center items-center content-center justify-center text-lg"


function Showcase() {
  

  return (
    <>
    <div className='flex items-center justify-center content-center text-2xl font-sans pt-14 pb-6'>Jeg er stolt over ... 😎
        <motion.p
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className='font-sans text-center items-center content-center'></motion.p>
    </div>

    <div className={css}>
      <ShowCaseItem text="RasPi Cloud" imgurl="https://cloud.bechsor.no" imgsrc="/nc.jpg"/>
      <ShowCaseItem text="Kronikk i BT" imgurl="https://www.bt.no/btmeninger/debatt/i/28qgXy/hvem-vil-du-vaere-etter-gjenaapningen" imgsrc="/bt.jpg"/>
    </div>

    <div className={css}>
      <ShowCaseItem text="Publikasjon" imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6" imgsrc="/pub.jpg"/>
    </div>

    </>
  )
}

export default Showcase