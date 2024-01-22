import React from 'react'
import './Home.css'
import Menu from './../Menu/Menu'
import Landing from './../Landing/Landing'

export default function Home() {
  return (
    <div className='home'>
        <Menu />
        <Landing />
    </div>
  )
}
