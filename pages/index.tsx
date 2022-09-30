import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import ProfileImage from '../components/ProfileImage'
import About from '../components/About'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Jens Bech-Sørensen</title>
      </Head>

      <Header />

      <ProfileImage />

      <Hero />
      <About />
      <Showcase />
      <Footer></Footer>
      

    </div>
  )
}

export default Home
