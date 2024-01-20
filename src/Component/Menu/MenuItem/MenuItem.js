import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'

export default function MenuItem(props) {
  return (
    <>
        <Link className='menu-item' to={props.link}>{props.title}</Link>
    </>
  )
}
