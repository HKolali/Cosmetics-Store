import React from 'react'
import './Home.css'
import Menu from './../Menu/Menu'
import Landing from './../Landing/Landing'
import SpecialOffer from './../SpecialOffer/SpecialOffer'

export default function Home() {
  return (
    <div className='home'>
        <Menu />
        <Landing />
        <SpecialOffer />
    </div>
  )
}
