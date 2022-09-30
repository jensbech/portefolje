import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProfileImage from '../components/ProfileImage'
import About from '../components/About'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

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
      <Skills></Skills>
      <Showcase />
      <Footer></Footer>
      

    </div>
  )
}

export default Home
