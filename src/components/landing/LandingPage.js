


import React from 'react'
import './landingpage.css'
import LandingNavbar from './LandingNavbar'

const LandingPage = () => {
  return (
    <div>

        <LandingNavbar />

        <main className='landingpage__container'>

             <h2><span className='heading'>WeNotes</span>, Your private note taking space.</h2>

        </main>

    </div>
  )
}

export default LandingPage