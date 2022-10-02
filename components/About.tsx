import React from 'react'

const about = "I Nederland tok jeg psykologutdanning, men for det meste har jeg jobbet pasientnært med helse-, rus- og psykatri i Oslo. I senere tid har jeg jobbet som karriereveileder, men endte opp med å veilede meg til selv til et karriereskifte. Våren 2022 tok jeg intensivutdanning i C# .NET gjennom Academic Work, før jeg i september begynte som utvikler hos Elkjøp."

export default function About() {
  return (
    <div className='flex items-center justify-center content-center'>
        <p className='font-sans text-lg max-w-screen-sm text-center px-5 items-center content-center tracking-wide'>
            {about}
        </p>
    </div>
  )
}
