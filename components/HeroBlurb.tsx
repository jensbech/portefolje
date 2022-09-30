import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

let codeskills = [
    "C#", 
    "ASP.NET Core",
    "Javascript",
    "SQL",
    "Typescript",
    "ADO.NET",
    "React"]
codeskills.sort()
let skillstostring = codeskills.toString();
let sortedstringcode = skillstostring.replace(/,/g, ' ⌨️ ');

let otherskills = [
    "Psykologi",
    "Ledelse",
    "Photoshop",
    "Figma",
    "InDesign",
    "Forskning", 
    ]
otherskills.sort()
let otherskillsstostring = otherskills.toString();
let sortedstringother = otherskillsstostring.replace(/,/g, ' 🤌 ');

function HeroBlurb({}: Props) {
    const [text1, count1] = useTypewriter({
        words: [sortedstringcode],
        typeSpeed: 15,
        loop: 1
    });
    const [text2, count2] = useTypewriter({
        words: [sortedstringother],
        typeSpeed: 15,
        loop: 1
    });

  return (
    <>
    <div className='font-sans'>
            <br></br>
            <span style={{ color: '#FFFFFF' }}>{text1}</span>
            <br></br>
            <span style={{ color: '#007FB1' }}>{text2}</span>
    </div>
    </>
  )
}

export default HeroBlurb 