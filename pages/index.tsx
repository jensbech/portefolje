import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import ProfileImage from '../components/ProfileImage'
import About from '../components/About'
import AboutBlog from '../components/AboutBlog'
import Blog from '../components/Blog'

const Home: NextPage = () => {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll z-0'>

      <Head>
        <title>Jens Bech-Sørensen</title>
      </Head>

      <Header />

      <ProfileImage />

      <Hero />
      <About />
      {/* <AboutBlog />
      <Blog></Blog> */}

    </div>
  )
}

export default Home
