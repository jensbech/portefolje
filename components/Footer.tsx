import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'

type Props = {}

function Footer({}: Props) {
  return (
        <footer className="pr-5 pb-2 text-right font-sans select-none">
            {new Date().getFullYear()}
        </footer>
  )
}

export default Footer