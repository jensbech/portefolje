import type { NextPage } from 'next'
import Head from 'next/head'
import SocialIcons from '../components/SocialIcons'
import TypeWriter from '../components/TypeWriter'
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

      <ProfileImage />

      <TypeWriter />

      <SocialIcons />

      <About />

      <Skills></Skills>

      <Showcase />

      <Footer></Footer>

    </div>
  )
}

export default Home
