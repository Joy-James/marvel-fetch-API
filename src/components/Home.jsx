import React from 'react'

import { Link } from 'react-router-dom'
import marvel from './marvel.jpg'

const Home = () => {
  return (
    <div className="homepage">
      <div className='overlay'></div>
      <img src={marvel} />
      <div className='content'>
       
        <p><span>world!! SuperHero</span></p>
        <p> Unlock the Marvel Universe's Endless Wonders.</p>
        <Link to="/characters"><button className='home-btn'>Get Started</button></Link>
      </div>
    </div>
  )
}

export default Home