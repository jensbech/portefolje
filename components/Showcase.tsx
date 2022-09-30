import { motion } from 'framer-motion'
import React from 'react'
import ShowCaseItem from './ShowCaseItem'

type Props = {}


const css:string = "font-sans justify-center items-center content-center flex gap-5 border-2"

function Showcase() {
  

  return (
    <>
    <div className='flex items-center justify-center content-center text-2xl font-sans pt-14 pb-6'>Annet jeg er stolt over
        <p
        className='font-sans text-center items-center content-center'></p>
    </div>

      <div className={css}>
            <ShowCaseItem text="Skyen min" imgurl="https://cloud.bechsor.no" imgsrc="/nc.jpg"/>
            <ShowCaseItem text="Kronikk i BT" imgurl="https://www.bt.no/btmeninger/debatt/i/28qgXy/hvem-vil-du-vaere-etter-gjenaapningen" imgsrc="/bt.jpg"/>
      </div>
      <div className={css}>
            <ShowCaseItem text="Publikasjon" imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6" imgsrc="/pub.jpg"/>
      </div>
      
    <div className={css}>
    </div>
    </>
  )
}

export default Showcase