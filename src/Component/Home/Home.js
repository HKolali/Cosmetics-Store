import React from 'react'
import './Home.css'
import Menu from './../Menu/Menu'
import Landing from './../Landing/Landing'
import SpecialOffer from './../SpecialOffer/SpecialOffer'
import LastProduct from './../LastProduct/LastProduct'

export default function Home() {
  return (
    <div className='home'>
        <Menu />
        <Landing />
        <SpecialOffer />
        <LastProduct />
        {/* <SpecialOffer /> */}
    </div>
  )
}
